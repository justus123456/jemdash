# Jendash

React + Vite landing page. Run `npm install`, then `npm run dev`. Production: `npm run build`; preview: `npm run preview`.

Business configuration: `src/config.js`. Email links open the visitor's email application. No message is sent by the website. No booking or payment is implied.

Before publication, confirm:
- Contact number confirmed: 08134043022 (+2348134043022). Calls and WhatsApp are enabled.
- Vehicle make, model, year, transmission, seating and daily rate.
- Actual vehicle photos and permission to use supplied reference photos; one contains a third-party watermark.
- Operating location, opening hours, pickup and return arrangements.
- Driver eligibility, documents, deposits, payments, cancellations and rental conditions.

Update FAQ answers in src/main.jsx once the policies are confirmed.

Validation: `npm run build` and `node browser-check.mjs`. Browser checks use installed Microsoft Edge via Playwright. Preview screenshots: desktop-preview.png and mobile-preview.png.
"# jemdash" 

## Deploy to Vercel

Import this repository into Vercel. Use the repository root (the directory containing package.json) as the Root Directory. vercel.json configures the Vite preset, npm ci installation, npm run build, and dist output. Node.js is pinned to 22.x in package.json. No environment variables or backend service are required.

Keep package-lock.json, index.html, public/, src/ and images/ committed. Photos are bundled by Vite for production. Vercel serves the generated dist directory; do not use the development server command as the build command.

All navigation uses section anchors on one page, so no custom rewrite is required. Email and WhatsApp enquiries work without a server. They open the visitor's chosen provider and never automatically send a message.

Before launch, finalise the draft privacy notice, operating details and vehicle information listed above.
