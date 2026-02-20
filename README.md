# IQgent One

A modern SaaS website for IQgent One - an agentic research and outreach engine by ImpactQuill.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 19

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is optimized for Vercel deployment:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Problem.tsx      # Problem statement
│   ├── Solution.tsx     # Solution overview
│   ├── HowItWorks.tsx   # Step-by-step process
│   ├── Features.tsx     # Key features
│   ├── UseCases.tsx     # Target audience
│   ├── WhyIQgent.tsx    # Value propositions
│   ├── Trust.tsx        # ImpactQuill section
│   ├── FinalCTA.tsx     # Final call-to-action
│   └── ui/              # Reusable UI components
│       ├── Button.tsx
│       ├── Container.tsx
│       └── Section.tsx
```

## Customization

- Update CTAs in `components/Hero.tsx` and `components/FinalCTA.tsx`
- Modify colors in `app/globals.css` and `tailwind.config.ts`
- Add analytics or tracking scripts in `app/layout.tsx`
- Connect forms to your backend or email service

## License

Private - ImpactQuill
