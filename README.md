# Cooperative Backend

*A robust and scalable backend for an AI-powered chatbot website, built with Node.js, Express.js, MongoDB, TypeScript, and integrated with the Gemini 2.0 Pro API.*

## 📖 Overview

The **Cooperative Backend** powers an AI chatbot website, providing seamless user authentication, chat management, and AI-driven responses using the Gemini 2.0 Pro API. It securely stores user data and chat histories in MongoDB, handles user authentication with JWT, and delivers a modern, type-safe codebase with TypeScript.

This backend is designed for scalability, security, and maintainability, making it an ideal foundation for AI-driven applications requiring real-time chat functionality.

## ✨ Features

- **User Authentication**: Secure signup, login, logout, and user verification using JWT and bcrypt for password hashing.
- **Chat Management**: Store and retrieve user chat histories, generate AI responses using Gemini 2.0 Pro, and delete chats.
- **Type-Safe Codebase**: Built with TypeScript for enhanced developer experience and reduced runtime errors.
- **MongoDB Integration**: Efficient storage of user profiles and chat histories using Mongoose.
- **RESTful API**: Well-structured endpoints for user and chat operations.
- **Modular Architecture**: Organized into controllers, models, routes, and utilities for maintainability.

## 🛠️ Tech Stack

- **Node.js**: Runtime environment for server-side JavaScript.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and chat data.
- **TypeScript**: Superset of JavaScript for type safety and better tooling.
- **Gemini 2.0 Pro API**: AI model for generating chatbot responses.
- **Mongoose**: ODM for MongoDB to manage data models.
- **JWT**: JSON Web Tokens for secure authentication.
- **Bcrypt**: Password hashing for secure user authentication.

## 📂 Project Structure

```
cooperative-backend/
├── controllers/          # Request handlers for user and chat operations
│   ├── chat-controllers.ts
│   └── user-controllers.ts
├── db/                   # Database connection and Gemini model configuration
│   ├── AiModelConfig.ts
│   └── dbConnection.ts
├── models/               # Mongoose schemas for data models
│   └── user.ts
├── routes/               # API route definitions
│   ├── chat-routes.ts
│   └── user-routes.ts
├── utils/                # Utility functions and validators
│   ├── token-manager.ts
│   └── validators.ts
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16 or higher
- **MongoDB**: Local or cloud instance (e.g., MongoDB Atlas)
- **Gemini 2.0 Pro API Key**: Obtain from the Gemini API provider
- **npm**: Package manager for Node.js

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/cooperative-backend.git
   cd cooperative-backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   COOKIE_NAME=auth_token
   COOKIE_DOMAIN=localhost
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```
   The server will start at `http://localhost:5000`.

### Building for Production

```bash
npm run build
npm start
```

## 📡 API Endpoints

### User Routes
| Method | Endpoint             | Description                     | Authentication |
|--------|----------------------|---------------------------------|----------------|
| GET    | `/api/users`         | Get all users                  | Required       |
| POST   | `/api/users/signup`  | Register a new user            | None           |
| POST   | `/api/users/login`   | Log in a user                  | None           |
| GET    | `/api/users/verify`  | Verify user token              | Required       |
| POST   | `/api/users/logout`  | Log out a user                 | Required       |

### Chat Routes
| Method | Endpoint             | Description                     | Authentication |
|--------|----------------------|---------------------------------|----------------|
| POST   | `/api/chats`         | Generate AI chat response       | Required       |
| GET    | `/api/chats`         | Retrieve user chats            | Required       |
| DELETE | `/api/chats`         | Delete user chats              | Required       |


## 🛡️ Security

- **Password Hashing**: Uses bcrypt to securely hash passwords.
- **JWT Authentication**: Ensures only authorized users access protected routes.
- **Secure Cookies**: HTTP-only, signed cookies with `sameSite: none` and `secure: true` for cross-origin requests.
- **Input Validation**: Validators ensure safe data handling.

## 📝 Example Usage

1. **User Signup**:
   ```json
   POST /api/users/signup
   {
     "name": "John Doe",
     "email": "john@example.com",
     "password": "securepassword123"
   }
   ```

2. **Generate Chat Response**:
   ```json
   POST /api/chats
   {
     "message": "What's the weather like today?"
   }
   ```

3. **Retrieve Chats**:
   ```json
   GET /api/chats
   ```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📬 Contact

For questions or feedback, reach out via:
- **GitHub Issues**: [Open an issue](https://github.com/HemantBatra873/Cooperative_Server/issues)
- **Email**: hemantbatra567@gmail.com

---

*Built with 💻 and ☕ by Hemant Batra*  
*Happy coding! 🚀*
