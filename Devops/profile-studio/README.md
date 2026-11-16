# 🐳 Containerising a Web Application with Docker Compose

## 📌 Project Overview

This project demonstrates how to containerise a web application using **Docker and Docker Compose**.

The application, **Profile Studio**, is a simple profile management application built with Node.js, Express and MongoDB.

The goal of this practical was to understand how to package an application into a Docker image, run multiple services in containers, configure communication between containers, and persist database data beyond the lifecycle of a container.

## 🎯 Learning Objectives

Through this practical, I learned how to:

- Build a Docker image using a Dockerfile.
- Understand Docker image layers and layer caching.
- Use `.dockerignore` to exclude unnecessary files from the build context.
- Run multiple application services using Docker Compose.
- Configure environment variables for containers.
- Understand port mapping and container networking.
- Connect an Express backend to a MongoDB container.
- Use named Docker volumes for persistent database storage.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Docker | Application containerisation |
| Docker Compose | Multi-container orchestration |

## 📂 Project Structure

```text
profile-studio/
│
├── public/
├── src/
├── node_modules/
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
└── server.js
```

## 1️⃣ Running the Application Locally

Before containerising the application, I first verified that it worked locally.

The Express backend ran on my local machine, while MongoDB ran in a standalone Docker container.

**Start the MongoDB container:**

```bash
docker start my-mongo
```

**Start the application:**

```bash
npm start
```

The application was accessible at:

```text
http://localhost:3000
```

📸 **Screenshot 1: Application running locally**
<img width="1346" height="668" alt="Screenshot 2026-11-16 162649" src="https://github.com/user-attachments/assets/b0b5fd0f-fc55-4980-adf8-e7d4b2825a05" />

## 2️⃣ Creating the Dockerfile

I created a Dockerfile to define how the application image should be built.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### 🔍 Understanding the Instructions

| Instruction | Purpose |
|---|---|
| `FROM` | Specifies the base Node.js image. |
| `WORKDIR` | Sets the working directory inside the image. |
| `COPY package*.json ./` | Copies the package files into the image. |
| `RUN npm install` | Installs the application dependencies. |
| `COPY . .` | Copies the remaining application files. |
| `EXPOSE 3000` | Documents the port the application listens on. |
| `CMD` | Specifies the command to start the application. |

### ⚡ Docker Layer Caching

I copied the package files and installed dependencies before copying the rest of the application code.

This takes advantage of Docker layer caching.

If application source code changes but the package files remain unchanged, Docker can reuse the cached dependency installation layer instead of installing the dependencies again.

📸 **Screenshot 2: Dockerfile**
<img width="461" height="347" alt="dockerfile" src="https://github.com/user-attachments/assets/6c4eecf7-3aa8-44a0-a186-a085c66e70fa" />


## 3️⃣ Creating the .dockerignore File

I created a `.dockerignore` file to prevent unnecessary files from being included in the Docker build context.

```text
node_modules
.env
.git
.gitignore
README.md
```

This helps reduce the build context and prevents local dependencies, environment files and Git metadata from being copied into the image.

📸 **Screenshot 3: .dockerignore**

<img width="431" height="212" alt="dockerignore" src="https://github.com/user-attachments/assets/7a3b96f1-d6be-44fa-8416-8a20962aafb6" />



## 4️⃣ Configuring Docker Compose

I used Docker Compose to define and manage the backend and MongoDB services.

```yaml
services:
  backend:
    build: .
    ports:
      - "3000:3000"
    environment:
      PORT: 3000
      MONGODB_URI: mongodb://mongodb:27017/profile_studio
    depends_on:
      - mongodb

  mongodb:
    image: mongo:latest
    volumes:
      - profile-studio-data:/data/db

volumes:
  profile-studio-data:
    external: true
```

### 🔍 Understanding the Configuration

**Backend service**
- `build: .` builds the backend image using the Dockerfile in the project directory.
- `ports: "3000:3000"` maps port 3000 on the host to port 3000 inside the container.
- `environment` supplies the backend's runtime environment variables.
- `MONGODB_URI` specifies the MongoDB connection string.
- `depends_on` establishes the startup order between the services.

**MongoDB service**
- `image: mongo:latest` uses the official MongoDB image.
- `volumes` mounts persistent storage at MongoDB's `/data/db` directory.

**Named volume**

The `profile-studio-data` volume stores MongoDB database files independently of the container.

It was configured as an external volume, meaning it had to exist before Docker Compose could use it.

### 🌐 Container Networking

Docker Compose automatically creates a network for the application services.

The backend connects to MongoDB using:

```text
mongodb://mongodb:27017/profile_studio
```

Here:

- `mongodb://` is the connection protocol.
- `mongodb` is the hostname, matching the MongoDB service name.
- `27017` is MongoDB's port.
- `profile_studio` is the database name.

Docker Compose's internal DNS allows the backend container to locate the MongoDB service using its service name.

📸 **Screenshot 4: Docker Compose configuration**

<img width="654" height="467" alt="dockercompose" src="https://github.com/user-attachments/assets/efc405df-3a0e-4cb5-bc2b-62c4adc76b79" />


## 5️⃣ Building and Running the Containers

I used the following command to build the backend image and start the services:

```bash
docker compose up --build
```

Docker Compose built the backend image and started the backend and MongoDB containers.

To inspect the running services, I used:

```bash
docker compose ps
```

📸 **Screenshot 5: Running Docker Compose containers**

![Docker containers screenshot](screenshots/compose-containers.png)

*Replace with a screenshot showing both backend and MongoDB containers running.*

## 6️⃣ Testing the Containerised Application

After the services started successfully, I accessed the application through:

```text
http://localhost:3000
```

The browser still uses the same host address, but the backend is now running inside its Docker container and communicating with MongoDB over the Compose network.



## 7️⃣ 💾 Demonstrating Persistent Storage

One of the key objectives of this practical was to demonstrate persistent database storage.

MongoDB stores its database files in `/data/db`, which is mounted to the named Docker volume:

```yaml
volumes:
  - profile-studio-data:/data/db
```

To test persistence, I:

1. Created and saved a profile in the application.
2. Stopped and removed the Compose containers using:

   ```bash
   docker compose down
   ```

3. Recreated and started the containers using:

   ```bash
   docker compose up -d
   ```

4. Opened the application again and checked the previously saved profile.

The profile was still available!

### Why did the data survive?

Docker containers have writable layers that are tied to individual containers. When a container is removed, its writable layer is removed too.

However, the named Docker volume exists independently of the container.

Since the MongoDB volume was mounted at `/data/db`, the database files remained available when a new MongoDB container was created and attached to the same volume.

**This demonstrates how Docker volumes provide persistent storage beyond the lifecycle of containers.**



## 🎥 Practical Demonstration Video

The video below demonstrates the complete practical workflow, from running the application locally to containerising it with Docker Compose and testing persistent storage.



## 🧠 Key Takeaways



This practical helped me understand that:

- A Dockerfile defines how an application image is built.
- Docker images are built in layers, and caching helps avoid unnecessary rebuild work.
- Docker Compose simplifies the management of multiple application services.
- Containers can communicate through a Docker network using service names.
- Port mapping allows services inside containers to be accessed from the host machine.
- Named volumes allow database data to survive container removal and recreation.

## ✅ Conclusion

I successfully containerised Profile Studio using Docker and Docker Compose.

The practical gave me hands-on experience with image building, container networking, environment configuration, multi-container application management and persistent storage.

This forms part of my ongoing journey in learning **DevOps, Cloud Engineering and DevSecOps**.
