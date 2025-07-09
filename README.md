# 🧑‍💼 Workforce Management System

A full-stack **Workforce Management System** built with modern web technologies to manage employee records, authentication, and visualize workforce data using interactive charts.

---

## 🚀 Live Demo

> Coming Soon — Deploying to Render / Vercel / Railway  
> (Optional: Add the link if hosted online)

---

## 🛠 Tech Stack

### 🔹 Frontend
- **React.js**
- **JavaScript (ES6+)**
- **Tailwind CSS** – Utility-first CSS framework
- **Material UI (MUI)** – Pre-built UI components
- **React ECharts** – Data visualization library

### 🔹 Backend
- **Node.js** with **Express.js**
- **MySQL** – Relational database for storing user records
- **bcrypt.js** – Password hashing for secure authentication
- **CORS**, **body-parser**, **dotenv**

---

## 📁 Features & Pages

### ✅ Authentication
- **Registration Page** – New user sign-up with form validation
- **Login Page** – Secure login with session/token-based authentication

### 📊 Dashboard
- Displays backend table data in an organized format
- Visual data analytics using:
  - **Bar Charts**
  - **Line Charts**
  - **Pie Charts**

### 📝 Form Page (CRUD)
- Add new user or employee record
- Includes all necessary fields (name, email, gender, role, date, image, etc.)

### 🖼️ Gallery Page
- Fetch and display all records from the backend
- Supports:
  - **Edit** existing records
  - **Update** data fields
  - **Delete** records
- Supports **all MySQL datatypes** (int, varchar, date, blob, etc.)

### 📈 Gallery Plots
- Graphical representation of backend data using **Bar** and **Line** charts

### 📊 Dashboard Plots
- Enhanced visual dashboard with **Bar**, **Line**, and **Pie** charts for reporting

## 📦 Installation & Setup

### 1. Clone the Repository
git clone https://github.com/yourusername/workforce-management-system.git
cd workforce-management-system

### 2. Setup Backend (Node.js + MySQL)
cd backend
npm install

### Configure your MySQL database and .env file:
DB_HOST=test
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=test
PORT=5000

### Start backend server:
node index.js

### 3. Setup Frontend (React)
cd frontend
npm install
npm run dev

```bash
