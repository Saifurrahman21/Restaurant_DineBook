🍽️ Restaurant_DineBook

Restaurant_DineBook is a responsive restaurant dine-in table booking web application focused on delivering a clean, user-friendly, and accessible booking experience.

The project emphasizes frontend UI/UX, responsiveness, form handling, validation, and backend integration for storing booking data.

📖 Project Overview

Restaurant_DineBook allows users to book a restaurant table by filling out a simple and intuitive reservation form.

Key goals of the project include:

Clean and responsive user interface

Smooth and realistic booking flow

Proper client-side validation and user feedback

Backend integration for storing booking details

🔗 Live Demo

👉 Frontend Live URL:
https://restaurant-dinebook-frontend.onrender.com

✅ Features Implemented
🖥️ Frontend

Built using React.js

Fully responsive UI (desktop, tablet, and mobile)

Custom CSS used instead of Tailwind or UI libraries

Demonstrates understanding of layout, spacing, and responsiveness

Restaurant table booking form with the following fields:

First Name

Last Name

Email

Phone Number

Date

Time

Client-side validation

All fields are required

Phone number must be exactly 11 digits

Popup error message shown if phone number is less or more than 11 digits

Success message displayed on successful booking

Clean, user-friendly, and accessible UI

🗄️ Backend

Built using Node.js and Express.js

Connected to MongoDB

Booking data stored in the database

REST API used to submit and store reservation details

Basic error handling implemented

🛠️ Tech Stack
Frontend

React.js

HTML5

CSS3

JavaScript (ES6+)

Backend

Node.js

Express.js

MongoDB

📂 Project Structure (High Level)
Restaurant_DineBook/
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── App.js
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js

🚀 How to Run Locally
1️⃣ Clone the Repository
git clone <repository-url>

2️⃣ Frontend Setup
cd frontend
npm install
npm start

3️⃣ Backend Setup
cd backend
npm install
npm run dev


Ensure MongoDB is running and environment variables are configured correctly.

📌 Notes

Focuses on frontend development with a clean UI and smooth user experience.

Demonstrates form handling, validation, responsiveness, and API integration.

Code is structured for readability and maintainability.
