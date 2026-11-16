require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const profileRoutes = require("./src/routes/profileRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

app.use("/api/profiles", profileRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "That route could not be found." });
});

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/profile_studio");
    console.log("✓ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`✓ Profile Studio is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Could not start the server:", error.message);
    process.exit(1);
  }
}

start();
