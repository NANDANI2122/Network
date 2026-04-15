# NetMesh

NetMesh is a full-stack event networking app that helps users join a session, discover relevant people, connect, chat, and receive notifications.

## Features

- User registration and login
- Session creation and joining
- Interest-based recommendations
- In-app chat between connected users
- Notification support for connect and message activity
- Session timer with expiry handling

## Project Structure

```text
Network/
  mini/mini/mini/          # Frontend (React + Vite)
  miniback/miniback/       # Backend (Node.js + Express + MongoDB)
```

## Tech Stack

- Frontend: React, Vite
- Backend: Node.js, Express
- Database: MongoDB
- Auth: JWT

## Prerequisites

Make sure these are installed on your system:

- Node.js
- npm
- MongoDB Atlas account or MongoDB connection string

## Environment Variables

Create a `.env` file inside `miniback/miniback/` using `miniback/miniback/.env.example`.

Example:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
HF_TOKEN=your_huggingface_token
```

## Installation

### Frontend

```bash
cd mini/mini/mini
npm install
```

### Backend

```bash
cd miniback/miniback
npm install
```

## Run the App

Open two terminals.

### Start backend

```bash
cd miniback/miniback
npm run dev
```

### Start frontend

```bash
cd mini/mini/mini
npm run dev
```

Frontend usually runs on:

`http://localhost:5173`

Backend usually runs on:

`http://localhost:8000`

## Available Scripts

### Frontend

- `npm run dev` - start development server
- `npm run build` - build production app
- `npm run preview` - preview production build
- `npm run lint` - run lint checks

### Backend

- `npm run dev` - start backend with nodemon
- `npm start` - start backend with node

## Notes

- Do not upload your real `.env` file to GitHub.
- `node_modules` should not be committed.
- If notifications do not appear after backend changes, restart the backend server.

## Author

Created by Nandani.
