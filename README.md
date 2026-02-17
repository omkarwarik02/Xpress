🚀 Xpress App

Xpress App is a real-time social media–style web application that allows users to create posts, upload images, and interact through likes with instant updates. The application focuses on performance, security, and real-time user experience.

📌 Features

User authentication using JWT

Create posts with image upload

Automatic image optimization on the server

Real-time likes update using Socket.IO

Live like count without page refresh

Secure API access using HTTP Interceptors

Responsive and dynamic user interface

Scalable and modular architecture

🛠️ Tech Stack
Frontend

Angular

TypeScript

HTML & CSS

PrimeNG (UI Components)

Backend

Node.js

Express.js

Socket.IO

JWT Authentication

Database

MongoDB

🔐 Authentication & Security

JWT-based authentication for secure login

Angular HTTP Interceptor automatically attaches tokens to API requests

Protected routes for authorized users only

⚡ Real-Time Functionality

Socket.IO enables instant updates for likes

All connected users see real-time changes without reloading the page.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#Project Structure

xpress-app/
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── socket/
│
│── frontend/
│   ├── components/
│   ├── services/
│   └── interceptors/
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#Backend(Commands)

cd backend
npm install
npm start

---------------

#Frontend

cd frontend
npm install
ng serve

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#Future Enhancements

Comments on posts

User profile pages

Real-time notifications

Follow/Unfollow functionality
