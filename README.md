# 📝 Blog API - Node.js + Express + MySQL + Redis

A high-performance RESTful API for managing blog data using **Node.js**, **Express**, **MySQL**, and **Redis**.  
The project follows the **MVC architecture**, and includes caching, middleware, and modular routing.

---

## 🚀 Features

- 🌐 RESTful API built with Express
- ⚙️ Clean MVC folder structure
- 🛢️ MySQL as the primary database
- ⚡ Redis for high-speed caching
- ♻️ CORS support for cross-origin requests
- 🛠️ Nodemon for development auto-reloading
- 📤 JSON-formatted API responses
- 🧱 Structured and scalable codebase

---

## 🧱 Tech Stack

| Tech       | Description                          |
|------------|--------------------------------------|
| ⚙️ Node.js  | JavaScript runtime environment       |
| 🚀 Express  | Web framework for Node.js            |
| 🛢️ MySQL    | Relational database system           |
| ⚡ Redis     | In-memory cache system               |
| 🛠️ Nodemon  | Dev tool for auto-restarting server  |
| ♻️ CORS     | Cross-Origin Resource Sharing        |
| 📦 dotenv   | Environment variable management      |

---

## 📁 Project Structure
📦 project-root
├── ⚙️ Config
│ ├── 📄 DB.js # MySQL database connection
│ └── 📄 redis.js # Redis client connection
├── 🧠 Controller
│ └── 📝 Blogs
│ ├── ✍️ CreateBlogs.controller.js
│ └── 📄 GetBlogs.controller.js
├── 🚏 Router
│ └── 🧭 Blogs
│ └── 🛣️ CreateBlog.Router.js
├── 🔧 Utils
│ └── ⚡ ListenningPort.js # Server bootstrap logic
├── 🧱 middleware
│ └── 🛡️ error.middleware.js # Global error handler
├── 📄 index.js # Main entry point
├── 📦 package.json
├── 📦 package-lock.json
└── 🧾 .env

Create a `.env` file in the root folder:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
