const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [60, "Name must be 60 characters or fewer"]
    },
    role: {
      type: String,
      trim: true,
      maxlength: [80, "Role must be 80 characters or fewer"],
      default: "Your role"
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      maxlength: 120
    },
    location: {
      type: String,
      trim: true,
      maxlength: 80,
      default: ""
    },
    bio: {
      type: String,
      trim: true,
      maxlength: [240, "Bio must be 240 characters or fewer"],
      default: ""
    },
    avatarColor: {
      type: String,
      enum: ["violet", "blue", "peach", "green", "rose"],
      default: "violet"
    }
  },
  { timestamps: true }
);

profileSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("Profile", profileSchema);
