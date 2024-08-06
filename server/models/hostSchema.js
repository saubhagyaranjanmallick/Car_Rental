const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // Correct import for bcrypt

const SECRET_KEY = "abcdefghijklmnop";

// Define the host schema
const hostSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not a valid email");
      }
    },
  },
  contactNumber: {
    type: String,
    required: true,
    minlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  location: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Hash the password before saving the host model
hostSchema.pre("save", async function (next) {
  const host = this;
  if (host.isModified("password")) {
    host.password = await bcrypt.hash(host.password, 8);
  }
  next();
});

// Token generation method for the host schema
hostSchema.methods.generateAuthToken = async function () {
  try {
    let newToken = jwt.sign({ _id: this._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });

    this.tokens = this.tokens.concat({ token: newToken });
    await this.save();
    return newToken;
  } catch (error) {
    throw new Error("Error generating token");
  }
};

// Creating host model
const Host = mongoose.model("Host", hostSchema);

module.exports = Host;
