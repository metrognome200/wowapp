# World of Warcraft Community Portal

A modern web application themed around World of Warcraft, featuring a professional gaming design and interactive elements.

## Features

- Modern, WoW-themed UI design
- Character profiles and statistics
- News and updates section
- Community features
- Responsive design for all devices

## Setup Instructions

1. Install dependencies:
```bash
npm install
cd client
npm install
```

2. Create a .env file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

3. Start the development server:
```bash
# Run backend only
npm run dev

# Run frontend only
npm run client

# Run both frontend and backend
npm run dev:full
```

## Technologies Used

- Node.js
- Express.js
- React
- MongoDB
- JWT Authentication
- Styled Components
- React Router

## Project Structure

```
├── client/                 # React frontend
├── server.js              # Express server
├── package.json           # Project dependencies
└── README.md             # Project documentation
``` 