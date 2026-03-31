# AI Chatbot Assignment

This project is an AI-powered chatbot application developed as part of the company assignment.
The application is built using React.js, Redux, Node.js, and Express.js.
The chatbot allows users to ask any question in the chatbox and receive a response using API integration.

---

# Features

* Modern and responsive chatbot UI
* Animated floating chat button
* Open and close chat window
* Send and receive messages in real time
* Loading indicator while chatbot is generating response
* Backend API integration with OpenRouter
* Redux-based structure for managing chat-related data
* Separate reusable React components
* Environment variable support for secure API key handling
* Secure API protection using `.env` and `.gitignore`

---

# Project Structure

```text
chatbot-assignment/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBox.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   └── MessageList.jsx
│   │   ├── features/
│   │   │   └── chat/
│   │   │       └── chatSlice.js
│   │   ├── store/
│   │   │   └── store.js
│   │   └── App.js
│   └── package.json
│
├── backend/
│   ├── routes/
│   │   └── chatRoutes.js
│   ├── server.js
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
│
└── README.md
```

---

# Technologies Used

## Frontend

* React.js
* Redux Toolkit
* React Redux
* Axios
* CSS

## Backend

* Node.js
* Express.js
* Axios
* dotenv
* cors

## API

* OpenRouter API

---

# Redux Usage

Redux Toolkit is used to manage chat state.

Redux is used for:

* Storing chat messages
* Managing loading state
* Handling chatbot responses
* Keeping application state organized

Example Redux state:

```js
{
  messages: [],
  loading: false,
  error: null
}
```

---

# Installation Steps

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatbot-assignment.git
cd chatbot-assignment
```

---

## 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

Required frontend packages:

```bash
npm install react-redux @reduxjs/toolkit axios
```

---

## 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

Required backend packages:

```bash
npm install express cors axios dotenv
```

---

# Environment Variables

Create a `.env` file inside the `backend` folder:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
PORT=5000
```

A sample file is already provided as:

```text
backend/.env.example
```

---

# Important Security Note

For security reasons, the real API key is not included in this repository.
Sensitive credentials are stored inside the `.env` file and excluded from GitHub using `.gitignore`.

`.gitignore` contains:

```text
node_modules/
.env
build/
dist/
```

Before running the project, add your own OpenRouter API key in `backend/.env`.

---

# Run the Project

## Start Backend

```bash
cd backend
node server.js
```

or

```bash
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

## Start Frontend

```bash
cd frontend
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# How It Works

1. User types a question in the chatbox.
2. React frontend sends the question to the backend.
3. Backend receives the request through Express route.
4. Backend calls the OpenRouter API.
5. OpenRouter returns the chatbot response.
6. Response is displayed in the chat window.

---

# Example Questions

* What is the capital of India?
* Explain React Hooks
* What is JavaScript?
* What is Redux?
* Give me a Java example

---

# Main Components

## ChatBox.jsx

Responsible for:

* Showing chatbot UI
* Opening and closing chat window
* Sending messages
* Displaying message history

## MessageInput.jsx

Responsible for:

* Taking user input
* Handling Enter key and Send button

## MessageList.jsx

Responsible for:

* Showing all user and bot messages
* Auto-scrolling to latest message

---

# Future Improvements

* Save chat history in localStorage
* Add typing animation
* Add multiple chatbot themes
* Add voice input
* Add speech output
* Add dark mode

---

# Author

Yash Bandgar

This project was created as part of a company assignment to demonstrate knowledge of React, Redux, API integration, Node.js, Express.js, and secure environment variable handling.
