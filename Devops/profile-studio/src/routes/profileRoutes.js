const express = require("express");
const Profile = require("../models/Profile");

const router = express.Router();

const allowedFields = ["name", "role", "email", "location", "bio", "avatarColor"];

function cleanPayload(body) {
  const result = {};
  for (const field of allowedFields) {
    if (body[field] !== undefined) result[field] = body[field];
  }
  return result;
}

// Get all profiles
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ createdAt: -1 });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Could not load profiles." });
  }
});

// Create a profile
router.post("/", async (req, res) => {
  try {
    const profile = await Profile.create(cleanPayload(req.body));
    res.status(201).json(profile);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "That email address is already in use." });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Could not create this profile." });
  }
});

// Update a profile
router.patch("/:id", async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      cleanPayload(req.body),
      { new: true, runValidators: true }
    );
    if (!profile) return res.status(404).json({ message: "Profile not found." });
    res.json(profile);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "That email address is already in use." });
    }
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({ message: "Please check the profile details and try again." });
    }
    res.status(500).json({ message: "Could not update this profile." });
  }
});

// Delete a profile
router.delete("/:id", async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) return res.status(404).json({ message: "Profile not found." });
    res.json({ message: "Profile deleted." });
  } catch (error) {
    res.status(400).json({ message: "Invalid profile ID." });
  }
});

module.exports = router;
