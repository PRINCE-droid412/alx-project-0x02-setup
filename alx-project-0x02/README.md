# Next.js Project Setup and Basics

Welcome to the **alx-project-0x02-setup** repository!

This repository contains the foundational setup for a modern web application using **Next.js**, **TypeScript**, **Tailwind CSS**, and **ESLint**.

## 🚀 Purpose

The purpose of this repository is to demonstrate:
- How to scaffold a Next.js project using the Pages Router.
- How to configure TypeScript and Tailwind CSS from the start.
- How to organize folders and reusable components.
- The initial setup needed to build scalable and maintainable Next.js applications.

It serves as a reference and starting point for future projects within the Airbnb clone project.


## 📁 Folder Structure

```txt
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx         # Reusable button component
│   │   ├── Card.tsx           # General-purpose card for property or user listings
│   │   ├── PostCard.tsx       # Card specifically for displaying blog or post data
│   │   ├── PostModal.tsx      # Modal for viewing or editing post content
│   │   └── UserCard.tsx       # Card for displaying user profiles or info
│   └── layout/
│       └── Header.tsx         # App-wide header/navigation component
│
├── interfaces/
│   └── index.ts               # TypeScript interfaces for props and data types
│
├── pages/
│   ├── _app.tsx               # Custom App component (wraps all pages)
│   ├── _document.tsx          # Custom HTML document structure
│   ├── about.tsx              # About page
│   ├── home.tsx               # Home page
│   ├── index.tsx              # Landing page (root route)
│   ├── posts.tsx              # Posts listing page
│   └── users.tsx              # Users listing page
│
├── public/
│   └── assets/
│       └── images/            # Static images used in the app
│
├── styles/
│   └── globals.css            # Global CSS (includes Tailwind base)
│
├── .eslintrc.json             # ESLint configuration
├── next.config.js             # Next.js configuration file
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
└── tsconfig.json              # TypeScript configuration



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
