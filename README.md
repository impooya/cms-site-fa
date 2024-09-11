## Educational CMS Project in Persian (Farsi) 🤖

### About

This project is based on the educational React course by SabzLearn. The backend has been provided exclusively by the SabzLearn Academy website, and the frontend has been developed by me. It is connected to a MySQL database and a Node.js backend. It has some issues that will be fixed in the future. This project will not be deployed! I designed it only for practice and to challenge myself.

## Technologies Used

1. <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"/></a> - A fast development build tool for modern web projects.
2. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/></a> - A high-level, interpreted programming language.
3. <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></a> - A JavaScript library for building user interfaces.
4. <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/></a> - A standard library for routing in React applications.
5. <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/></a>- An open-source relational database management system.
6. <a href="https://nodejs.org/"><img src="    https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/></a> - A JavaScript runtime built on Chrome's V8 JavaScript engine.
7. <a href="https://tanstack.com/query/latest"><img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"/></a> - A library for fetching, caching, and updating data in React applications.
8. <a href="https://axios-http.com/"><img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white"/></a> - A promise-based HTTP client for the browser and Node.js.
9. <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/></a> - A utility-first CSS framework for rapid UI development.

## Project Setup Instructions

Follow these steps to set up and run the project on your local machine.

### 1. Prerequisites

Make sure to install the following prerequisites:

- **Node.js**:

  - Download and install Node.js from [nodejs.org](https://nodejs.org/).

- **XAMPP**:
  - Download and install XAMPP from [apachefriends.org](https://www.apachefriends.org/).

### 2. Clone the Repository

Clone the project repository from GitHub:

```bash
git clone https://github.com/impooya/cms-site-fa.git
cd cms-app
```

### 3.Install Node.js Dependencies

install the Node.js dependencies

```bash
npm install
```

Navigate to the <code>backend</code> directory and install the Node.js dependencies:

```bash
cd cms-app/backend
npm install
```

### 4. Set Up the Database

To set up the MySQL database for this project, follow these steps:

1. Open **XAMPP** and start the **Apache** and **MySQL** services.
2. Open your browser and navigate to [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
3. Create a new database named **`sabzlearn_shop`**.
4. Go to the **"Import"** tab and upload the `sabzlearn_shop.sql` file located in `cms-app/backend/database`.

### 6. Run the Backend and Frontend

To run the project, open two terminal windows or use a terminal multiplexer.

#### Backend:

1. Navigate to the backend directory:

```bash
cd cms-app/backend
```

2. Start the backend server with the following command:

```bash
node server.js
```

#### Frontend:

1. In another terminal, navigate to the project root (where `vite.config.js` is located):

```bash
cd cms-app
```

2. Run the frontend development server:

```bash
npm run dev
#or
vite
```

## Coming Soon...

This project is not responsive for mobile and tablet and has limited features; it is somewhat a simulation of a real project. Updates will be coming soon.
