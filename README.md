# Peralink_frontend_initial

Initial build up.
Contains the initial frontend. 
Includes bugs.
No connection links.
Low modularity.
Not done based on micro frontend.

# Peralink - University Social Media Platform

## Setup Instructions

## Prerequisites

Before you begin, ensure you have the following installed on your laptop:

1. **Node.js** (version 16.0.0 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation with `node -v` in your terminal/command prompt

2. **pnpm** (recommended) or npm
   - Install pnpm globally: `npm install -g pnpm`
   - Verify installation with `pnpm -v`

## Setup Steps

### 1. Clone the Project Files

Clone the file to a location of your choice on your laptop.

### 2. Install Dependencies

Open a terminal/command prompt and navigate to the extracted project directory:

```bash
cd path/to/Peralink_frontend_initial
```

Install the project dependencies:

```bash
pnpm install
```

If you prefer using npm instead of pnpm:

```bash
npm install
```

### 3. Run the Development Server

To start the development server with hot-reload capability:

```bash
pnpm run dev
```

Or with npm:

```bash
npm run dev
```

This will start the development server, typically at http://localhost:5173/. Open this URL in your browser to view the application.

## Features

- **Login Page**: Secure authentication system
- **Home Feed**: View and interact with posts from connections
- **Discover Page**: Find new connections, groups, and content
- **Profile Page**: View and edit your academic and social profile
- **Notifications**: Stay updated with important alerts
- **Search**: Find people, groups, courses, and resources

## Navigation

- The application uses React Router for navigation
- You can navigate between pages using the navigation tabs in the header
- The default route is the login page

## Troubleshooting

If you encounter any issues:

1. Ensure all prerequisites are correctly installed
2. Verify you're using the correct Node.js version
3. Try deleting the `node_modules` folder and running `pnpm install` again
4. Check for any error messages in the terminal or browser console

## Additional Information

- This is a frontend-only implementation focused on UI/UX
- The application uses React with TypeScript for type safety
- Styling is implemented with Tailwind CSS for responsive design


IF ABOVE DOESN'T WORK DUE TO VERSION MISMATCH THEN USE:

1. npm install --force
2. npm run dev
