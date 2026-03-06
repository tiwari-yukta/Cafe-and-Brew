# Café and Brew

A production-level e-commerce + café reservation platform built with React, TypeScript, styled-components, Formik, Zustand, and React Query. Features a feminine soft pastel aesthetic with elegant animations and a scalable feature-based architecture.

## Tech Stack

- **React 19** + **TypeScript** (strict mode)
- **styled-components** - Styling only
- **Formik** + **Yup** - Form handling & validation
- **Zustand** - Global state (cart, wishlist, theme)
- **React Query** - Server state & mock API
- **React Router v7**

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable primitives (Button, Card, Input, Modal, Badge)
│   ├── layout/       # Header, Footer, MainLayout
│   └── features/     # Feature-specific components
│       ├── cart/
│       ├── wishlist/
│       ├── products/
│       └── reservation/
├── pages/
├── store/            # Zustand stores
├── hooks/            # Custom hooks
├── services/         # API layer
├── types/
└── theme/
```

## Features

- **Homepage** - Animated hero with floating hearts/sparkles
- **Product Listing** - Filters, search, category tabs
- **Product Detail** - Add to cart, wishlist
- **Cart** - Quantity controls, checkout flow
- **Wishlist** - Save items for later
- **Auth** - Sign in/up with email or Google, user menu, account page
- **Reservation** - Formik-validated table booking form
- **Checkout** - Order summary, place order
- **Success** - Animated confirmation for orders & reservations

## Design System

- **Colors**: Blush pink, lavender, cream, rose
- **Fonts**: Caveat (headings), DM Sans (body)
- **Components**: Rounded buttons & cards, soft shadows
- **Animations**: Hover scale/glow, smooth transitions

## Authentication (Firebase)

The app supports sign in with **email/password** and **Google**. To enable:

1. Create a project at [Firebase Console](https://console.firebase.google.com)
2. Enable **Authentication** → **Sign-in method** → Email/Password and Google
3. Copy `.env.example` to `.env` and add your Firebase config:

```bash
cp .env.example .env
```

4. Fill in your Firebase credentials (Project Settings → General → Your apps)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## License

MIT
