# NetMesh

NetMesh is a full-stack event networking app that helps users join a session, discover relevant people, connect, chat, and receive notifications.

## Features

- User registration and login
- Session creation and joining
- Interest-based recommendations
- In-app chat between connected users
- Notification support for connect and message activity
- Session timer with expiry handling

## ScreenShots

### Create an account
<img width="1676" height="967" alt="image" src="https://github.com/user-attachments/assets/18f50ae7-eb5e-46e7-b21b-8f0ec0c26fe7" />
### Log in
<img width="680" height="602" alt="image" src="https://github.com/user-attachments/assets/513a1773-a9b6-4cc2-a9cf-dfc7cf647500" />
### Join a session OR Create a session
<img width="645" height="625" alt="image" src="https://github.com/user-attachments/assets/f78abe9d-e6fd-42fd-8ae4-ef6f16957719" />
<img width="608" height="470" alt="image" src="https://github.com/user-attachments/assets/fbd86c9d-78e0-43a5-9103-bee17a6cf9c6" />
<img width="585" height="622" alt="image" src="https://github.com/user-attachments/assets/f7a7c095-c239-44eb-bed1-ff2b4a952fe2" />

### Recommends the best matches 
<img width="1918" height="970" alt="image" src="https://github.com/user-attachments/assets/ea9ce104-ae30-44b7-8888-7972768dac55" />

### Connect feature
#### Notification pops out to the connected user
<img width="951" height="670" alt="image" src="https://github.com/user-attachments/assets/c7b11dc0-45b5-4d84-a2f8-826b42b7cd81" />

### Chat feature is enabled once you connect with other 
<img width="1919" height="980" alt="image" src="https://github.com/user-attachments/assets/0b412e2f-cf71-453d-aee3-27190811b9d9" />
<img width="1886" height="736" alt="image" src="https://github.com/user-attachments/assets/66cd1f35-2136-4355-9c7c-088a92fe3a7a" />



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

- If notifications do not appear after backend changes, restart the backend server.

## Author

Created by Nandani.
