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

## Mail configuration

Set these environment variables in Vercel for the intended deployment environment:

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
3. An invalid email or a blank required field is rejected before sending.
4. A valid submission reports success only after the business mailbox accepts it.
5. The email received by the business includes the visitor's phone number.
6. Confirmation email language follows the selected site language.

Automated tests mock email delivery. Any live test message should be explicitly
authorized and sent to an intended recipient.
