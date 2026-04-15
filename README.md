# NetMesh

NetMesh is a full-stack event networking app that helps users join a session, discover relevant people, connect, chat, and receive notifications.

## Features

- User registration and login
- Session creation and joining
- Interest-based recommendations
- In-app chat between connected users
- Notification support for connect and message activity
- Session timer with expiry handling

## Screenshots

### Create an Account

<img width="1676" height="967" alt="Create an account" src="https://github.com/user-attachments/assets/18f50ae7-eb5e-46e7-b21b-8f0ec0c26fe7" />

### Log In

<img width="680" height="602" alt="Log in" src="https://github.com/user-attachments/assets/513a1773-a9b6-4cc2-a9cf-dfc7cf647500" />

### Join or Create a Session

<img width="645" height="625" alt="Join or create a session" src="https://github.com/user-attachments/assets/f78abe9d-e6fd-42fd-8ae4-ef6f16957719" />

<img width="608" height="470" alt="Create a session" src="https://github.com/user-attachments/assets/fbd86c9d-78e0-43a5-9103-bee17a6cf9c6" />

<img width="585" height="622" alt="Join a session" src="https://github.com/user-attachments/assets/f7a7c095-c239-44eb-bed1-ff2b4a952fe2" />

### Recommended Matches

<img width="1918" height="970" alt="Recommended matches" src="https://github.com/user-attachments/assets/ea9ce104-ae30-44b7-8888-7972768dac55" />

### Connect Notification

<img width="951" height="670" alt="Connect notification" src="https://github.com/user-attachments/assets/c7b11dc0-45b5-4d84-a2f8-826b42b7cd81" />

### Chat After Connecting

<img width="1919" height="980" alt="Chat feature" src="https://github.com/user-attachments/assets/0b412e2f-cf71-453d-aee3-27190811b9d9" />

<img width="1886" height="736" alt="Chat in action" src="https://github.com/user-attachments/assets/66cd1f35-2136-4355-9c7c-088a92fe3a7a" />

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
- Authentication: JWT

## Prerequisites

Make sure these are installed on your system:

- Node.js
- npm
- MongoDB Atlas account or a valid MongoDB connection string

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

### Start the Backend

```bash
cd miniback/miniback
npm run dev
```

### Start the Frontend

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

- `npm run dev` - Start the development server
- `npm run build` - Build the production app
- `npm run preview` - Preview the production build
- `npm run lint` - Run lint checks

### Backend

- `npm run dev` - Start the backend with nodemon
- `npm start` - Start the backend with node

## Notes

- Do not upload your real `.env` file to GitHub.
- If notifications do not appear after backend changes, restart the backend server.

## Author

Created by Nandani.
