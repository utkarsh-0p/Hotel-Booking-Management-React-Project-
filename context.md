# Elite Tower - Hotel Booking System - Web Flow

## 🌐 Overview

This document outlines the complete web flow for the MERN stack hotel booking system, including page navigation, user interactions, and booking process.

---

## 📚 User Journey

### 1. **Landing Page (Home)**

- User lands on the homepage with an overview of **Elite Tower**.
- Options available:
  - Navigate to About Us, Rooms, Services, Contact Us.
  - Login or Sign Up.
  - Click "Book Now" to start the booking process.

### 2. **About Us Page**

- Displays **Elite Tower**'s history, mission, and values.
- Information about management and customer trust.

### 3. **Rooms Page**

- List of available rooms with:
  - Room types and descriptions.
  - Pricing and amenities.
  - Option to click on "Book Now" to proceed with a specific room.

### 4. **Services Page**

- List of **Elite Tower** services and amenities.
- Option to contact or inquire for more details.

### 5. **Contact Us Page**

- Contact form with fields:
  - Name, Email, Message
- **Elite Tower**'s physical address and contact information.

---

## 🔐 Authentication Flow

### 6. **Login Page**

- User enters email and password.
- Successful login redirects to homepage.
- Failed login shows error message.

### 7. **Signup Page**

- User provides:
  - Name, Email, Password
  - Confirm Password
- On success, user is redirected to login.

---

## 📆 Booking Flow

### 8. **Booking Page**

- Triggered when user clicks "Book Now".
- Booking form includes:
  - Select room type
  - Check-in and check-out date
  - Number of guests
- Option to proceed to payment (if implemented).

### 9. **Payment Integration (Optional)**

- User can pay via Stripe/PayPal.
- Confirmation message after successful payment.

---

## ⚙️ Admin Panel (Future Enhancement)

- Admin login to manage:
  - Room listings
  - View/Edit/Delete bookings
  - View user details

## 🎉 Completion

- User receives confirmation email after successful booking.
- Booking details stored in the database.

---

## 🛠️ Frameworks & Technologies

### Frontend
- **React.js** - For building dynamic and responsive user interfaces.

### Backend
- **Node.js** - JavaScript runtime for backend logic.
- **Express.js** - Lightweight framework to create REST APIs.

### Database
- **MongoDB** - NoSQL database to store user, room, and booking data.

### Authentication
- **JWT (JSON Web Token)** - For secure authentication and authorization.

---

## ⚙️ Backend Configuration

### 1. **Initialize Backend**
- Create a `backend` folder.
- Run `npm init -y` to initialize a new Node.js project.
- Install required dependencies:
```bash
npm install express mongoose dotenv bcryptjs jsonwebtoken
```

### 2. **Project Structure**
```
/backend
├── /config
│   └── db.js (MongoDB connection)
├── /controllers
│   ├── authController.js
│   ├── bookingController.js
│   └── roomController.js
├── /models
│   ├── User.js
│   ├── Room.js
│   └── Booking.js
├── /routes
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   └── roomRoutes.js
├── /middleware
│   └── authMiddleware.js
├── server.js
└── .env
```

### 3. **MongoDB Configuration**
- Create a `config/db.js` file:
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### 4. **Server Setup**
- Create a `server.js` file:
```javascript
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 5. **Environment Variables**
- Create a `.env` file:
```
MONGO_URI=mongodb://localhost:27017/elite_tower
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 🚀 Next Steps

- Implement backend API to handle CRUD operations.
- Connect frontend to backend using Axios.
- Add role-based access control for admin and users.

---

## 🎨 Logo Placement

- **Navbar:** Place the **Elite Tower** logo on the top left corner.
- **Footer:** Add the **Elite Tower** logo and relevant copyright information.

