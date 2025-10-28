# 🎨 Secure Authentication System — Frontend

The frontend of the Secure Authentication System is built using React.js, focusing on creating a modern, secure, and responsive user interface.
It allows users to register, log in, and access protected pages through a clean, minimal design and robust client-side logic.

---

## 🧩 Overview

The frontend is responsible for:
- Displaying user interfaces for authentication (login, signup, profile).
- Handling user interactions and form validation.
- Communicating securely with backend APIs using Axios.
- Storing and managing authentication tokens using localStorage.
- Protecting routes using React Router and JWT verification.

---

## ⚙️ Tech Stack

Framework: React.js (with Vite or CRA)
Styling: Tailwind CSS / CSS Modules
Routing: React Router DOM
HTTP Requests: Axios
State Management: React Hooks, Context API
Token Storage: LocalStorage
Version Control: Git & GitHub


---

## 🚀 Features

- User Registration Form — Collects user details and validates input before sending to backend.
- Login Form — Authenticates user and stores the JWT token locally.
- Protected Profile Page — Accessible only if the user is logged in and token is valid.
- Error Handling & Validation — Displays form errors and backend validation messages gracefully.
- Logout Functionality — Clears stored token and redirects to login page.
- Responsive UI — Fully responsive layout optimized for mobile and desktop.
- Token-Based Route Protection — Uses custom ProtectedRoute component to block unauthenticated access.

---

## 🔒 Authentication Flow

1️⃣ User registers or logs in via frontend forms.
2️⃣ Frontend sends credentials to backend via Axios (POST request).
3️⃣ Backend responds with a JWT token upon successful authentication.
4️⃣ Frontend stores the token in localStorage.
5️⃣ Protected pages check for the presence and validity of the token before rendering.
6️⃣ Logout clears token, returning the user to the login page.

---

## 🧠 Key Concepts Implemented

- React functional components & hooks (useState, useEffect, useContext)
- Context API for global authentication state
- API integration with Axios
- JWT-based route protection
- Client-side form validation
- Responsive and accessible UI

---

## ⚙️ Run Locally
```
Step 1: Navigate to Frontend Directory
cd frontend

Step 2: Install Dependencies
npm install

Step 3: Start Development Server
npm start
```

Frontend will run on http://localhost:3000

---

## 🧑‍💻 Author

Mohammad Asif
Portfolio: https://mohammadasifhasnain.vercel.app   
LinkedIn: https://linkedin.com/in/mohammadasifhasnain   
GitHub: https://github.com/mohammadasifhasnain   

---

⭐ A clean, secure, and responsive React-based frontend for user authentication and role-based access control.
"""
