const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Submits an enquiry to Web3Forms. Web3Forms can return a 200 response
 * with { success: false } (e.g. invalid access key), so res.ok alone
 * isn't enough to confirm delivery.
 */
export async function submitEnquiry(payload) {
  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      ...payload,
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.success) {
    throw new Error(data?.message || `Form endpoint returned ${res.status}`);
  }
}
