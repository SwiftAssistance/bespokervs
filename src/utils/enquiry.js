import { siteConfig } from '../config/site';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

/**
 * Send a contact enquiry.
 *
 * When VITE_WEB3FORMS_KEY is configured (Vercel → Settings → Environment
 * Variables), the enquiry is delivered to the inbox registered with that
 * key. Without a key it falls back to opening the visitor's email client
 * pre-filled, so enquiries are never silently lost.
 *
 * Returns 'sent' or 'mailto'; throws if the form service rejects the
 * submission so callers can show a failure message.
 */
export const sendEnquiry = async ({ name, email, phone, projectType, message }) => {
  if (ACCESS_KEY) {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `Website enquiry — ${projectType || 'General'}`,
        from_name: name,
        name,
        email,
        phone,
        project_type: projectType,
        message,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Enquiry could not be sent');
    }
    return 'sent';
  }

  const subject = `Website enquiry — ${projectType || 'General'}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    projectType && `Project type: ${projectType}`,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');
  window.location.href = `${siteConfig.contact.emailLink}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return 'mailto';
};

export const enquiryFallbackText = `If your email app didn't open, call ${siteConfig.contact.phone} or email ${siteConfig.contact.email}.`;
