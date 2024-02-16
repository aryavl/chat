This repository contains a chat application project that enables users to communicate in real-time with their friends. The project is divided into three main folders: `client`, `server`, and `socket`. Below, you'll find an overview of the project structure, dependencies, and functionalities.

## Demo

![Chat Application Homepage](/chatapp.png)

## Demo video

<video width="640" height="360" controls autoplay>
  <source src="/chatapp.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Project Structure

1. **Client**: This folder contains the client-side code of the chat application built using React.js. It handles the user interface and interaction with the server.
 
2. **Server**: The server-side code resides in this folder. It is built using Node.js and Express.js and handles authentication, message routing, and communication with the database.

3. **Socket**: The socket folder contains code related to WebSocket communication using Socket.IO. It facilitates real-time chat functionality between users.

## Dependencies

### Client Side

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library for React applications.
- **Next.js**: React framework for server-side rendering and static site generation.
- **Socket.IO Client**: Library for real-time, bidirectional, and event-based communication.
- **Emoji Picker React**: Component library for emoji picker functionality.
- **Lottie React**: Library for adding animations to React applications.
- **React Hot Toast**: Toast notifications for React applications.
- **React Input Emoji**: Component for emoji input in React.
- **Timeago.js**: Library for displaying time ago in a human-readable format.

### Server Side

- **Express**: Web application framework for Node.js.
- **Socket.IO**: Library for WebSocket communication.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JSON Web Token (JWT)**: JSON-based access tokens for authentication.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing in Express.js.

## Development Dependencies

- **TypeScript**: Typed superset of JavaScript.
- **Eslint**: Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs.
- **PostCSS**: Tool for transforming CSS with JavaScript plugins.
- **Autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes automatically.
- **Nodemon**: Utility that monitors for changes in your source code and automatically restarts the server.

## Functionalities

1. **Redux State Management**: Utilizes Redux Toolkit for managing application state.
2. **Toggle Theme**: Allows users to switch between light and dark themes.
3. **User Authentication**: Enables users to log in using their credentials.
4. **Real-Time Chat**: Facilitates real-time communication between users via WebSocket using Socket.IO.
5. **Emoji Support**: Supports the use of emojis in chat messages.
   
## Getting Started

To run the project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory and install dependencies for each folder (`client`, `server`, `socket`) using `npm install`.
3. Create `.env` files in the `server` folder to set environment variables such as database connection URI, JWT secret, etc.
4. Start the development server for each folder using `npm start` or `npm run dev`.

## Contributors

- [Your Name](https://github.com/yourusername)
