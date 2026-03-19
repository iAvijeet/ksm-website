# KAJARIA SANITARY MART Website

A premium brochure-style dealership website with:

- luxury public homepage
- WhatsApp-first enquiry flow
- built-in PDF catalogue viewer
- multiple branch location section
- control panel for updating key content
- Supabase-ready integration points

## Current state

This workspace did not have `node` or `npm` installed at build time, so the project was scaffolded manually and could not be run locally yet.

## Install Node.js first

Install Node.js LTS from the official site:

[https://nodejs.org/](https://nodejs.org/)

Then run:

```powershell
npm install
npm run dev
```

Or, if you want to use the portable Node.js runtime already set up in this workspace:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\dev.ps1
```

## Project structure

- `app/page.tsx`: public website
- `app/admin/page.tsx`: website control panel
- `components/admin-dashboard.tsx`: editable admin UI
- `components/catalogue-viewer.tsx`: inbuilt PDF reader section
- `lib/site-content.ts`: seed content for the business
- `lib/storage.ts`: browser-local content persistence
- `lib/supabase.ts`: Supabase connection helper
- `scripts/dev.ps1`: run development server with the local Node runtime
- `scripts/build.ps1`: run production build with the local Node runtime

## How the control panel works now

The control panel currently saves updates in browser local storage so the website can be edited immediately without backend wiring.

This means:

- edits persist in the same browser
- edits do not sync across devices yet
- it is ideal for preview and structure testing

## Upgrading to real online admin

To make the admin panel work as a proper online shared CMS:

1. Create a Supabase project
2. Add the values to `.env.local`
3. Replace the local-storage save/load flow with Supabase read/write calls
4. Add Supabase Auth for admin login
5. Store PDFs, images, and videos in Supabase Storage

## Free hosting path

Recommended:

- deploy the Next.js app to Vercel
- use Supabase free tier for auth, database, and storage
- connect your GoDaddy domain using Vercel DNS instructions

## Content to replace next

- WhatsApp number in `lib/site-content.ts`
- branch addresses and map links
- your actual catalogue PDF files under `public/catalogues/`
- showroom-specific images or videos

## Suggested next build step

After Node.js is installed, the next best step is to wire real Supabase authentication and database-backed content saving so the admin panel becomes production-ready.
