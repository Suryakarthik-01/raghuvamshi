# Raghuvamsi Website - Project Structure

## Overview
This project recreates the exact UI from the provided design image using React, Vite, and Tailwind CSS.

## Technology Stack
- **React** v19.1.1
- **Vite** v7.1.7 (Build tool)
- **Tailwind CSS** v4.0 (Latest version with @tailwindcss/postcss)
- **PostCSS** & **Autoprefixer**

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   └── Hero.jsx        # Hero section with background image
│   ├── pages/
│   │   └── Home.jsx        # Home page composition
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind directives
├── public/                 # Static assets
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
```

## Components

### Navbar Component (`src/components/Navbar.jsx`)
- Blue header background (#1e4d8b)
- "raghuvamsi" logo/brand name
- Navigation menu with 5 items:
  - Home (active with underline)
  - About Us
  - Manufacturing Verticals & Infrastructure
  - Products
  - Contact Us
- Responsive hover effects

### Hero Component (`src/components/Hero.jsx`)
- Full-height hero section
- Industrial machinery background image
- Dark overlay for text contrast
- Headline: "Creating value with precision."
- Responsive typography

### Home Page (`src/pages/Home.jsx`)
- Combines Navbar and Hero components
- Main landing page composition

## Features Implemented
✅ Exact UI match from the provided image
✅ Proper component structure following React best practices
✅ Tailwind CSS v4.0 (latest version) installed and configured
✅ Clean, minimal code with no unnecessary files
✅ Responsive design
✅ Modern UI with proper spacing and typography
✅ Removed default Vite boilerplate code

## Running the Project
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Development Server
The application runs on: http://localhost:5173

## Notes
- The @tailwind warnings in the IDE are expected and can be ignored - they're CSS linting warnings that don't affect functionality
- The background image uses a placeholder from Unsplash - replace with your actual industrial image
- All components follow React functional component patterns with hooks
- Tailwind classes are used for all styling (no custom CSS files except for Tailwind directives)
