# Personal Portfolio Website

A modern React portfolio built with Vite, Tailwind CSS v4, and Framer Motion.

## Overview

This project showcases:

- Hero section with responsive navigation and mobile menu
- Featured project highlight
- Filterable projects grid
- Skills showcase
- Experience timeline
- Social proof (testimonials + GitHub contribution graph)
- Contact form powered by EmailJS

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Icons
- React GitHub Calendar
- EmailJS

## Getting Started

### 1. Install dependencies

Use one package manager consistently:

- pnpm install

### 2. Configure environment variables

Create or update a local environment file with these keys:

- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY
- VITE_CALENDLY_URL

### 3. Run the app locally

- pnpm dev

## Available Scripts

- pnpm dev: Start development server
- pnpm build: Build for production
- pnpm preview: Preview production build locally
- pnpm lint: Run ESLint

## Project Structure

- client/src/sections: Page sections (Hero, Projects, Skills, Experience, About, SocialProof, Contact)
- client/src/components: Reusable UI components
- client/src/assets: Images and static media used in the UI
- client/public: Public static files

## Deployment

Build before deploy:

- pnpm build

Then deploy the generated client/dist folder to your preferred hosting provider.

## Notes

- Keep API keys and secrets out of source control.
- If contact form submission fails, verify EmailJS environment values first.
