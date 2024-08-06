const Host = require("../models/hostSchema");
const hostOtp = require("../models/hostOtp"); // Assuming a similar OTP model exists for hosts
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Host SignUp
exports.hostSignUp = async (req, res) => {
  const { firstName, lastName, email, contactNumber, password, location } = req.body;

  if (!firstName || !lastName || !email || !contactNumber || !password || !location) {
    return res.status(400).json({ error: "Please enter all required fields" });
  }

  try {
    const existingHost = await Host.findOne({ email });

    if (existingHost) {
      return res.status(400).json({ error: "This host already exists in our database" });
    }

    const newHost = new Host({
      firstName,
      lastName,
      email,
      contactNumber,
      password, // Password hashing is handled in the schema
      location,
    });

    const savedHost = await newHost.save();
    res.status(201).json(savedHost);
  } catch (error) {
    res.status(500).json({ error: "Error registering host", details: error });
  }
};

// Host Send OTP
exports.hostSendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Please enter your email" });
  }

  try {
    const existingHost = await Host.findOne({ email });

    if (existingHost) {
      const OTP = Math.floor(100000 + Math.random() * 900000);

      const existingOtpEntry = await hostOtp.findOne({ email });

      if (existingOtpEntry) {
        existingOtpEntry.otp = OTP;
        await existingOtpEntry.save();
      } else {
        const otpEntry = new hostOtp({ email, otp: OTP });
        await otpEntry.save();
      }

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Sending Email For OTP Validation",
        text: `OTP: ${OTP}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error);
          return res.status(500).json({ error: "Failed to send OTP email" });
        }
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "OTP sent successfully" });
      });
    } else {
      res.status(404).json({ error: "Host does not exist in our database" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error", details: error });
  }
};

// Host SignIn
exports.hostSignIn = async (req, res) => {
  const { email, otp } = req.body;

  if (!otp || !email) {
    return res.status(400).json({ error: "Please enter your OTP and email" });
  }

  try {
    const otpVerification = await hostOtp.findOne({ email });

    if (otpVerification && otpVerification.otp === otp) {
      const host = await Host.findOne({ email });

      if (host) {
        const token = await host.generateAuthToken();
        res.status(200).json({ message: "Host login successfully", hostToken: token });
      } else {
        res.status(404).json({ error: "Host not found" });
      }
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error", details: error });
  }
};

// Get All Hosts
exports.getAllHosts = async (req, res) => {
  try {
    const hosts = await Host.find();
    res.json(hosts);
  } catch (err) {
    console.error("Error fetching host data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.hostSignInWithPassword = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter your email and password" });
    }
  
    try {
      // Find the host by email
      const host = await Host.findOne({ email });
  
      if (!host) {
        return res.status(404).json({ error: "Host not found" });
      }
  
      // Compare the provided password with the stored hashed password
      const isPasswordMatch = await bcrypt.compare(password, host.password);
  
      if (!isPasswordMatch) {
        return res.status(400).json({ error: "Invalid password" });
      }
  
      // Generate authentication token
      const token = await host.generateAuthToken();
  
      res.status(200).json({ message: "Host login successful", hostToken: token });
    } catch (error) {
      res.status(500).json({ error: "Internal server error", details: error });
    }
  };

  exports.updatePassword = async (req, res) => {
    const { email, contactNumber, newPassword } = req.body;

    if (!email || !contactNumber || !newPassword) {
        return res.status(400).json({ error: "Please provide email, contact number, and new password" });
    }

    try {
        // Find the host by email and contact number
        const host = await Host.findOne({ email, contactNumber });

        if (!host) {
            return res.status(404).json({ error: "Host not found with provided email and contact number" });
        }

        // Log current password for debugging purposes (ensure this is removed in production)
        console.log(`Current Password (hashed): ${host.password}`);

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Log the hashed password
        console.log(`New Hashed Password: ${hashedPassword}`);

        // Update the password in the database
        host.password = hashedPassword;
        await host.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};