https://documenter.getpostman.com/view/45894497/2sB3B7NDPY

🔐 User Authentication & Authorization API


A simple user authentication system built with Node.js, Express.js, MongoDB, and JWT. It supports user registration, login, protected routes, and fetching authenticated user data.

📁 Project Structure
lua
Copy
Edit
project-root/
├── controllers/
│   └── authController.js
├── middlewares/
│   └── auth.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── utilis/
│   └── config.js
├── .env
├── app.js
├── package.json
└── README.md
🚀 Features
User Registration with hashed password (bcrypt)

User Login with JWT generation

Protected route /me to get logged-in user info

Middleware for verifying JWT token

Error handling for common cases

🧪 Technologies Used
Node.js

Express.js

MongoDB + Mongoose

bcrypt for password hashing

JWT for authentication

dotenv for environment configuration

📦 Installation
1.Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2.Install dependencies:

bash
Copy
Edit
npm install

3.Set up environment variables:

Create a .env file in the root directory and add:

ini
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4.Start the server:

bash
Copy
Edit
npm start
Server will run at http://localhost:5000

📌 API Endpoints
➕ Register a New User
arduino
Copy
Edit
POST /api/auth/register
Request Body:

json
Copy
Edit
{
  "name": "Thahira Sherin",
  "email": "thahira@example.com",
  "password": "password123"
}
Response:

json
Copy
Edit
{
  "message": "User registered successfully",
  "user": {
    "name": "Thahira Sherin",
    "_id": "some_id",
    "createdAt": "timestamp"
  }
}
🔐 Login
bash
Copy
Edit
POST /api/auth/login
Request Body:

json
Copy
Edit
{
  "email": "thahira@example.com",
  "password": "password123"
}
Response:

json
Copy
Edit
{
  "message": "Login Successfull",
  "token": "jwt_token"
}
👤 Get Authenticated User
vbnet
Copy
Edit
GET /api/auth/me
Headers:

makefile
Copy
Edit
Authorization: Bearer <jwt_token>
Response:

json
Copy
Edit
{
  "user": {
    "id": "user_id",
    "name": "Thahira Sherin",
    "email": "thahira@example.com"
  }
}
🔒 JWT Auth Middleware
Your middleware located in middlewares/auth.js checks for a valid JWT token and attaches the user ID to the request object.

🧑‍💻 Author
Thahira Sherin

📃 License
This project is open source and available under the MIT License.
