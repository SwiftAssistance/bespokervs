const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Web3Forms access key for the mailbox that receives enquiries.
 *
 * This is safe to commit: the key only identifies the destination mailbox,
 * and Vite inlines every VITE_* variable into the client bundle anyway, so
 * keeping it in an env var bought no secrecy — only the risk of a deploy
 * where the variable is missing and every enquiry silently fails. The env
 * var still wins when set, so the destination can be repointed from Netlify
 * without a code change.
 */
const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  '8a11c13e-356e-4f08-b808-467898e83a42';

/** Where on the site the enquiry was sent from, in words. */
const SOURCE_LABELS = {
  'homepage-form': 'Homepage contact form',
  'contact-page': 'Contact page form',
  'contact-modal': 'Pop-up enquiry form',
};

const clean = (value) => (typeof value === 'string' ? value.trim() : '');

/** Enquiry time in UK local time, so it reads correctly in the inbox. */
function receivedAt() {
  const now = new Date();
  try {
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/London',
    }).format(now);
  } catch {
    return now.toUTCString();
  }
}

/**
 * Submits an enquiry to Web3Forms.
 *
 * Web3Forms forwards every non-reserved field to the notification email
 * as-is, using the field name as the row label — so the keys below are
 * written the way they should read in the inbox ("Project type", not
 * "projectType"), and optional fields fall back to explicit text rather
 * than arriving as blank rows.
 *
 * Web3Forms can also return a 200 response with { success: false } (e.g.
 * an invalid access key or a tripped honeypot), so res.ok alone isn't
 * enough to confirm delivery.
 */
export async function submitEnquiry({
  name,
  email,
  phone,
  projectType,
  message,
  source,
  botcheck,
} = {}) {
  const enquiry = {
    name: clean(name),
    email: clean(email),
    phone: clean(phone),
    projectType: clean(projectType),
    message: clean(message),
  };

  const who = enquiry.name || 'Website visitor';
  const about = enquiry.projectType || 'General enquiry';
  const page =
    typeof window !== 'undefined' ? window.location.href : '';

  const payload = {
    access_key: ACCESS_KEY,
    // Scannable from a phone's notification shade: what it's about, who
    // from, without needing to open the mail.
    subject: `New enquiry: ${about} — ${who}`,
    from_name: `${who} via RVS Bespoke website`,
    // Hitting reply in any mail client goes straight back to the customer.
    ...(enquiry.email ? { replyto: enquiry.email } : {}),
    // Honeypot — bots fill this in, real visitors never see it.
    botcheck: botcheck || '',

    Name: who,
    Email: enquiry.email || 'Not provided',
    Phone: enquiry.phone || 'Not provided',
    'Project type': about,
    Message: enquiry.message || 'No message left.',
    'Sent from': SOURCE_LABELS[source] || 'RVS Bespoke website',
    ...(page ? { Page: page } : {}),
    Received: receivedAt(),
  };

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.success) {
    throw new Error(data?.message || `Form endpoint returned ${res.status}`);
  }
}
