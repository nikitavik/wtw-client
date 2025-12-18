# WTW Client

A Next.js web application with three routes: Home (/), Login (/login), and Register (/register).

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Make sure your backend is running on `http://localhost:3000`

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) to view the application.

## Backend Proxy Configuration

The frontend is configured to proxy API requests to your backend:

- **Frontend**: `http://localhost:3002`
- **Backend**: `http://localhost:3000`
- **API Routes**: `/auth/*` and `/user/*` are proxied to the backend

The proxy configuration in `next.config.js` automatically forwards:
- `/auth/login` → `http://localhost:3000/auth/login`
- `/user/register` → `http://localhost:3000/user/register`

## Project Structure

This project follows Feature-Sliced Design (FSD) architecture:

- `app/` - Next.js app router pages
- `features/` - Feature-specific logic
- `entities/` - Business entities
- `widgets/` - Composite UI components
- `shared/` - Reusable utilities and UI components

## Routes

- `/` - Home page
- `/login` - User login page
- `/register` - User registration page
