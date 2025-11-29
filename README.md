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


Check Containers -

docker ps



🛠 Local Development Setup:

1. Clone Repository -
   
   git clone https://github.com/yourname/TaskManager.git
   
   cd TaskManager





⚙️ Backend Setup:

1. Install Dependencies -
   
   cd backend
   
   npm install



3. Create .env file having -

    PORT=5000
    MONGO_URI=your_mongodb_atlas_url
    JWT_SECRET=taskappsecret
    JWT_EXPIRES_IN=1d



4. Start backend -
   
   npm run dev





🎨 Frontend Setup :

1. Install Dependencies -
   cd frontend
   npm install



2. Start frontend
   npm start



Project Snippets:

<img width="1919" height="910" alt="Screenshot 2025-11-30 013019" src="https://github.com/user-attachments/assets/9e1f7e52-dc54-48f0-aba0-17604e428ce3" />

<img width="1919" height="907" alt="Screenshot 2025-11-30 013132" src="https://github.com/user-attachments/assets/adadd6f0-92f8-45ae-9dbc-873cd29c4cb2" />

<img width="1902" height="907" alt="Screenshot 2025-11-30 013214" src="https://github.com/user-attachments/assets/9a3d1bfc-0878-4a09-914b-45b830e5b656" />

<img width="1902" height="908" alt="Screenshot 2025-11-30 013255" src="https://github.com/user-attachments/assets/87e4052e-3acf-4e60-a460-e11d55dd28f7" />

<img width="1898" height="908" alt="Screenshot 2025-11-30 013327" src="https://github.com/user-attachments/assets/e83292ef-78a4-4e5a-8e54-7c0652c1e51b" />

<img width="1900" height="907" alt="Screenshot 2025-11-30 013410" src="https://github.com/user-attachments/assets/8fa83072-a2b9-4689-8e0c-f2770715815b" />

<img width="1898" height="912" alt="Screenshot 2025-11-30 013446" src="https://github.com/user-attachments/assets/01563527-88f1-494a-a94d-85f4c8911735" />

<img width="1900" height="904" alt="Screenshot 2025-11-30 013521" src="https://github.com/user-attachments/assets/18daf57c-12ef-490c-aa0e-5a920a6db005" />

<img width="1919" height="897" alt="Screenshot 2025-11-30 013558" src="https://github.com/user-attachments/assets/a128ef56-31bf-40d8-9494-04788083d354" />

<img width="1904" height="904" alt="Screenshot 2025-11-30 013627" src="https://github.com/user-attachments/assets/039d228c-62c9-43a7-b11a-0c16d404a37b" />






