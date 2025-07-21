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
