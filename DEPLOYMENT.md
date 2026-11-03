# Envoedu Germany — Vercel deployment

The project root is the folder containing `package.json`, `vercel.json` and `api/`.
Deploy the whole project, including `api/` and `server/`. Uploading only `dist/public`
serves the website without the email API.

## Build

- Framework: Vite (declared in `vercel.json`)
- Build command: `npm run build`
- Output directory: `dist/public`
- Node API functions: `api/health.ts` and `api/consultation-requests.ts`
- Verification: `npm ci`, `npm run check`, `npm test`, `npm run build`

## Contact page

The appointment request form has been removed. The contact page now provides
direct WhatsApp and email links, address information and opening hours in Turkish
and English. These links do not use the SMTP service.

## Optional mail API configuration

The existing mail API is retained for compatibility but is not called by the
contact page. Its environment variables, if needed, are:

| Variable | Value |
| --- | --- |
| `EMAIL_USER` | The full IONOS mailbox address used to authenticate |
| `EMAIL_PASS` | The mailbox password, entered directly in Vercel |
| `SMTP_HOST` | The SMTP host specified for that mailbox by IONOS |
| `SMTP_PORT` | `587` for STARTTLS, or `465` for implicit TLS |
| `SMTP_SECURE` | `false` for port 587; `true` for port 465 |
| `CONTACT_EMAIL` | `info@envoedugermany.com` |

Redeploy after changing environment variables. Local `.env` files are not a
substitute for Vercel production environment variables and are excluded from the
release archive.

The provided local SMTP credentials were rejected with authentication code `535`
during verification on 3 November 2026. No real message was sent during testing.
Valid mailbox credentials are required before live delivery can be confirmed.

## Acceptance checks after deployment

1. `https://www.envoedugermany.com/api/health` returns HTTP 200 and JSON containing
   `"status":"ok"`. It must not return an HTML document.
2. `/contact` and university detail pages continue to load directly.
3. `/contact` contains contact details and opening hours, without a request form.
4. The WhatsApp link opens the intended contact and the email link uses `mailto:`.
5. Turkish and English language selection updates the contact page text.

Automated tests mock email delivery. Any live test message should be explicitly
authorized and sent to an intended recipient.
