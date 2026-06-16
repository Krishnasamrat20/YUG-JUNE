# YUG AI Website

This is a Next.js website for the YUG AI startup.

## Structure

- `app/` - App router pages and routing structure
- `app/services/*` - Service-specific pages
- `app/industries/*` - Industry-specific pages
- `app/about/page.tsx` - About page
- `app/quality-assurance/page.tsx` - Quality Assurance page
- `app/portfolio/page.tsx` - Portfolio page
- `app/contact/page.tsx` - Contact page with a working API route
- `components/` - Shared UI components
- `app/api/contact/route.ts` - Backend API route for contact form submissions

## Run locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Notes

- The homepage and dedicated pages are styled to match a polished interface similar to the example site.
- The founders panel is ready for your team photos; you can replace the placeholder cards with actual images.
- Contact form submissions post to `/api/contact` and will send an email once SMTP is configured.

## SMTP configuration

Copy `.env.example` to `.env.local` and fill in your SMTP credentials:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_SECURE=false
EMAIL_FROM=hello@yugai.live
EMAIL_TO=hello@yugai.live
```

Then restart the dev server.