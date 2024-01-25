# StartupWizard App

## Overview

Welcome to StartupWizard, an innovative application that leverages artificial intelligence to generate groundbreaking startup ideas. This documentation provides a comprehensive guide to understanding and using the application. The project is built with Node.js (Express) for the backend and React.js with Styled Components for the frontend.

## Backend

### `server.js`

The backend server is the core of the application, responsible for handling requests and interacting with the OpenAI API to generate startup ideas.

#### Routes:

1. **Get Available Startup Fields:**
   - Endpoint: `/startupFields`
   - Method: `GET`
   - Returns a list of available startup fields.

2. **Generate Startup Ideas:**
   - Endpoint: `/startupIdeas`
   - Method: `POST`
   - Expects a field selection from the frontend, then utilizes the OpenAI API to generate startup ideas based on the chosen field.

### Configuration:

- Uses Express for server setup.
- Implements CORS for cross-origin resource sharing.
- Utilizes the OpenAI API for generating startup ideas.

## Frontend

### `App.js`

The frontend is built with React.js and Styled Components, providing a user-friendly interface to interact with the application.

#### Components:

- **Sidebar:**
  - Displays the application title, a dropdown to select a startup field, and a button to generate startup ideas.

- **Main:**
  - Renders the generated startup ideas, a loading indicator, and a button to generate new startup ideas.

### Functionality:

- Fetches available startup fields from the backend on component mount.
- Allows users to select a startup field and generate corresponding ideas.
- Displays generated ideas with the ability to refresh and generate new ideas.

### Styling:

- Styled with Styled Components for a clean and responsive UI.

## Getting Started

1. Clone the repository `https://github.com/lsegouras/startup-ideas-generator`.
2. Install backend dependencies using `npm install` in the `backend` directory:
   - `express`, `cors`, `dotenv`, `node-fetch`.
3. Install frontend dependencies using `npm install` in the `frontend` directory:
   - `react`, `react-dom`, `react-scripts`, `styled-components`, `axios`.
4. Set up the backend:
   - Create a `.env` file in the `backend` directory and add your OpenAI API key.
   - Run the server using `npm start` in the `backend` directory, on port `8000`.
5. Set up the frontend:
   - Run the app using `npm start` in the `frontend` directory.

Now you're ready to explore the exciting world of StartupWizard and generate innovative startup ideas!