# Restaurant Frontend

A modern React-based frontend for the Bella Vista restaurant website, featuring a responsive design with TailwindCSS.

## Features

- **Home Page**: Restaurant introduction and featured dishes
- **Menu Page**: Dynamic menu display with category filtering
- **Reservation Page**: Interactive booking form with validation
- **Contact Page**: Contact information and location details
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with TailwindCSS

## Tech Stack

- **React 18**: Modern functional components with hooks
- **React Router**: Client-side routing
- **TailwindCSS**: Utility-first CSS framework
- **Axios**: HTTP client for API communication
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 14 or higher
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

The application will open in your browser at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── Menu.js         # Menu page
│   ├── Reservation.js  # Reservation form
│   └── Contact.js      # Contact page
├── services/           # API services
│   └── api.js          # API client and endpoints
├── App.js              # Main app component
├── index.js            # Application entry point
└── index.css           # Global styles with TailwindCSS
```

## API Integration

The frontend communicates with the backend API running on `http://localhost:8080`:

- **GET /api/menu** - Fetch menu items
- **POST /api/reservation** - Create reservations
- **GET /api/reservations** - Get all reservations

## Components

### Navbar
- Responsive navigation menu
- Active page highlighting
- Mobile-friendly hamburger menu

### Footer
- Restaurant information
- Contact details
- Social media links
- Operating hours

### Pages

#### Home
- Hero section with call-to-action
- Featured dishes from API
- Restaurant story section
- Reservation call-to-action

#### Menu
- Category-based filtering
- Dynamic menu items from API
- Responsive card layout
- Price and description display

#### Reservation
- Form validation
- Date and time selection
- Success/error messaging
- Restaurant information

#### Contact
- Contact information
- Location details
- Operating hours
- Social media links

## Styling

The application uses TailwindCSS for styling with:

- Custom color palette (primary orange theme)
- Responsive breakpoints
- Hover and focus states
- Animation and transitions
- Custom utility classes

## Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_API_URL=http://localhost:8080
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
