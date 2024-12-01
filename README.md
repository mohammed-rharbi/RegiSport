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



# API Documentation 📚

## Events Endpoints 🎉

### 1. **Create Event** 📝
- **URL**: `POST /events/create/event`
- **Description**: Create a new event with an optional image upload.
- **Request Body**:
    ```json
    {
      "title": "Event Title",
      "description": "Event Description",
      "date": "2024-12-01T00:00:00Z"
    }
    ```
- **Response**:
    ```json
    {
      "message": "Event created successfully 🎉"
    }
    ```

---

### 2. **Get All Events** 🔎
- **URL**: `GET /events/get/events`
- **Description**: Fetch all events.
- **Response**:
    ```json
    [
      {
        "id": "eventId",
        "title": "Event Title",
        "description": "Event Description",
        "date": "2024-12-01T00:00:00Z"
      }
    ]
    ```

---

### 3. **Get Event by ID** 🎯
- **URL**: `GET /events/getEvent/:id`
- **Description**: Fetch an event by its ID.
- **URL Params**:
  - `id`: Event ID
- **Response**:
    ```json
    {
      "id": "eventId",
      "title": "Event Title",
      "description": "Event Description",
      "date": "2024-12-01T00:00:00Z"
    }
    ```

---

### 4. **Update Event** ✏️
- **URL**: `PATCH /events/update/event/:id`
- **Description**: Update an event with optional image upload.
- **URL Params**:
  - `id`: Event ID
- **Request Body**:
    ```json
    {
      "title": "Updated Title",
      "description": "Updated Description",
      "date": "2024-12-01T00:00:00Z"
    }
    ```
- **Response**:
    ```json
    {
      "message": "Event updated successfully ✅"
    }
    ```

---

### 5. **Delete Event** 🗑️
- **URL**: `DELETE /events/delete/event/:id`
- **Description**: Delete an event by its ID.
- **URL Params**:
  - `id`: Event ID
- **Response**:
    ```json
    {
      "message": "Event deleted successfully 🗑️"
    }
    ```

---

### 6. **Add Participant to Event** 👥
- **URL**: `PATCH /events/:eventId/addParticipent`
- **Description**: Add participants to an event.
- **URL Params**:
  - `eventId`: Event ID
- **Request Body**:
    ```json
    {
      "userIds": ["userId1", "userId2"]
    }
    ```
- **Response**:
    ```json
    {
      "message": "Participants added successfully 🥳"
    }
    ```

---

### 7. **Get User's Events** 🧑‍🤝‍🧑
- **URL**: `GET /events/:userId/userEvents`
- **Description**: Get all events for a specific user.
- **URL Params**:
  - `userId`: User ID
- **Response**:
    ```json
    [
      {
        "eventId": "eventId",
        "title": "Event Title",
        "description": "Event Description",
        "date": "2024-12-01T00:00:00Z"
      }
    ]
    ```

---

## Users Endpoints 👤

### 1. **User Registration** 🆕
- **URL**: `POST /users/register`
- **Description**: Register a new user.
- **Request Body**:
    ```json
    {
      "username": "user1",
      "email": "user1@example.com",
      "password": "securePassword123"
    }
    ```
- **Response**:
    ```json
    {
      "message": "User registered successfully ✅"
    }
    ```

---

### 2. **User Login** 🔑
- **URL**: `POST /users/login`
- **Description**: Login with email and password. Returns a JWT token.
- **Request Body**:
    ```json
    {
      "email": "user1@example.com",
      "password": "securePassword123"
    }
    ```
- **Response**:
    ```json
    {
      "token": "jwt_token"
    }
    ```

---

### 3. **Get All Users** 👥
- **URL**: `GET /users/getAllUsers`
- **Description**: Fetch all users.
- **Response**:
    ```json
    [
      {
        "id": "userId",
        "username": "user1",
        "email": "user1@example.com"
      }
    ]
    ```

---

### 4. **Get User by ID** 🔍
- **URL**: `GET /users/getUserById/:id`
- **Description**: Fetch a specific user by ID.
- **URL Params**:
  - `id`: User ID
- **Response**:
    ```json
    {
      "id": "userId",
      "username": "user1",
      "email": "user1@example.com"
    }
    ```

---

### 5. **Update User** ✏️
- **URL**: `PATCH /users/updateUser/:id`
- **Description**: Update user details.
- **URL Params**:
  - `id`: User ID
- **Request Body**:
    ```json
    {
      "username": "updatedUserName",
      "email": "updatedEmail@example.com"
    }
    ```
- **Response**:
    ```json
    {
      "message": "User updated successfully ✅"
    }
    ```

---

### 6. **Delete User** 🗑️
- **URL**: `DELETE /users/deleteUser/:id`
- **Description**: Delete a user by ID.
- **URL Params**:
  - `id`: User ID
- **Response**:
    ```json
    {
      "message": "User deleted successfully 🗑️"
    }
    ```

---

## Error Handling ⚠️

If an error occurs, the response will look like this:

```json
{
  "statusCode": 400,
  "message": "Error message description",
  "error": "Bad Request"
}
