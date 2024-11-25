# 🏅 Sports Event Management Application

## 📚 Project Overview

This project is a web-based application designed to help sports organizations manage events and participant registrations efficiently. Organizers can create, update, and delete events, manage participant registrations, and generate printable participant lists. The system ensures secure access with authentication and is deployable using Docker.

---

## 🚀 Features

### Organizer
- **Event Management**: Create, update, and delete sports events.
- **Participant Management**: Add and update participant registrations for events.
- **Printable Reports**: Generate and download participant lists as PDFs.

### Security
- Authentication using JWT to protect sensitive routes.
- Role-based access control for enhanced security.

### Deployment
- Dockerized back-end and front-end for easy setup and scalability.

---

## ⚙️ Tech Stack

### Back-end
- **Framework**: Node.js (Express.js or NestJS)
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Testing**: Jest or Mocha for unit tests

### Front-end
- **Framework**: React.js
- **State Management**: Redux or Context API
- **Routing**: React Router with Protected Routes

### Deployment
- **Containerization**: Docker & Docker Compose

---

## 🛠️ Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/mohammed-rharbi/RegiSport.git
   cd REGISPORT



2. Install dependencies for back-end and front-end:

# Back-end
    cd backend
    npm install

# Front-end
    cd ../frontend
    npm install


3. Run the application:

# Back-end
    cd backend
    npm run start:dev

# Front-end
    cd ../frontend
    npm run dev

