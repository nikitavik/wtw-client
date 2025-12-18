# WTW Client

A Next.js web application with three routes: Home (/), Login (/login), and Register (/register).

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

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
