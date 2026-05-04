const express = require("express");
const router = express.Router();
const Certificate = require("../models/Certificate");
const Application = require("../models/Application");

// @desc    Verify Certificate
// @route   POST /api/certificates/verify
// @access  Public
router.post("/verify", async (req, res) => {
  try {
    const { certId, email } = req.body;
    // clg("Received verification request for certId:", certId, "and email:", email);

    // Find certificate
    const certificate = await Certificate.findOne({ certificateId: certId });

    if (!certificate) {
      return res.status(404).json({ message: "Invalid Certificate ID" });
    }

    // Find the associated application
    const application = await Application.findOne({
      email: { $regex: new RegExp("^" + email + "$", "i") },
      internshipRole: certificate.internshipRole,
    });

    if (!application) {
      return res
        .status(404)
        .json({ message: "Invalid Email for this Certificate" });
    }

    res.json({
      user: {
        name: application.name,
        email: application.email,
        phone: application.phone,
        collegeName: application.college,
        branch: application.branch,
      },
      certificate: {
        domain: certificate.internshipRole,
        duration: certificate.duration,
        issueDate: certificate.issueDate,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
