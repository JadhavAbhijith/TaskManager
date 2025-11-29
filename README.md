# 🚀 TaskManager — Full Stack MERN Task Management System

TaskManager is a production-ready, secure, role-based Task Management application built with:

- **Backend:** Node.js, Express.js, MongoDB Atlas  
- **Frontend:** React + Bootstrap  
- **Authentication:** JWT  
- **Role Based Access:** User, Admin  
- **Deployment:** Docker + Docker Compose  
- **API Testing:** Postman + Swagger  

Users can create, edit, and delete tasks while admins can view all users and their tasks.  
The UI includes a responsive dashboard, dark mode, modals, and a clean Bootstrap layout.

---

# ✨ Features

### 🔐 **Authentication & Authorization**
- Secure JWT Authentication  
- Password hashing via bcrypt  
- Role-based access control:
  - **User:** Manage own tasks  
  - **Admin:** View all users + all tasks  

---

### 📝 **Task Management (CRUD)**
- Create Tasks  
- Edit Tasks (via modal)  
- Delete Tasks  
- Get tasks of logged-in user  
- Status field: `Pending` / `Completed`

---

### 🧑‍💼 **Admin Panel**
Admin features:
- View all registered users  
- View all tasks from all users  
- Admin login:
              Email: admin@gmail.com
              Password: admin@45



---

### 🎨 **Frontend UI (React + Bootstrap)**
- Login & Register pages  
- Dashboard with:
- Navbar  
- Sidebar (with Create Task button)  
- Dark Mode Toggle  
- Task Grid (3×3 layout)  
- Edit/Delete buttons on each task  
- Responsive design  
- Smooth UI flow  

---

### 🌙 **Dark Mode Support**
- Entire UI switches to dark theme  
- Task cards, navbar, sidebar, modals, table (admin) — all themed  

---

### ⚙️ **Backend Features**
- Express.js with modular structure  
- JWT & role middleware  
- Express validator for request validation  
- Custom error handling middleware  
- MongoDB Atlas  
- API versioning → `/api/v1`  
- Swagger documentation included  

---


---

# 🔌 API Endpoints

## 🔑 **Auth Routes**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | Login user |

---

## 📝 **Task Routes (Protected)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/tasks` | Get tasks of logged-in user |
| GET | `/api/v1/tasks/:id` | Get task by ID |
| POST | `/api/v1/tasks` | Create a new task |
| PUT | `/api/v1/tasks/:id` | Update a task |
| DELETE | `/api/v1/tasks/:id` | Delete a task |

---

## 🧑‍💼 **Admin Routes (Admin Only)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/users` | Get all users |
| GET | `/api/v1/admin/tasks` | Get all tasks from all users |

---

# 🧪 Postman Testing Guide

### 1️⃣ Login to get your token  
Send POST → `/api/v1/auth/login`

Copy the token from response:
e.g: eyJhbGciOiJIUzI1NiIsInR...


### 2️⃣ Add JWT Token to Headers for protected APIs  
In request → **Headers**:



### 3️⃣ Test APIs:
- GET tasks  
- POST create task  
- PUT update task  
- DELETE remove task  
- Admin → all users/tasks  

---

# 🐳 Docker Setup

## 1️⃣ Build & run the full project
Run in project root:

docker-compose up --build -d


##Check Containers
docker ps



🛠 Local Development Setup:

1. Clone Repository
   git clone https://github.com/yourname/TaskManager.git
   cd TaskManager



⚙️ Backend Setup:

1. Install Dependencies -
   cd backend
   npm install


2. Create .env file having -
    PORT=5000
    MONGO_URI=your_mongodb_atlas_url
    JWT_SECRET=taskappsecret
    JWT_EXPIRES_IN=1d


3. Start backend -
   npm run dev



🎨 Frontend Setup :

1. Install Dependencies -
   cd frontend
   npm install


2. Start frontend
   npm start



📦 Scalability Notes

The system is designed with scalability in mind:

> MongoDB Atlas → horizontal scaling

> API versioning

> Can split into microservices

> Load balancing via Nginx / AWS

> Redis caching for fast authentication

> Docker allows multi-container orchestration

> Rate limiting (DDOS protection)

> Modular backend architecture


