const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const { protect, admin } = require("../middleware/authMiddleware");

// @desc    Submit new application
// @route   POST /api/applications
// @access  Public
router.post("/", async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Get all applications
// @route   GET /api/applications
// @access  Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const applications = await Application.find({});
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update application status
// @route   PUT /api/applications/:id/status
// @access  Private/Admin
router.put("/:id/status", protect, admin, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (application) {
      application.status = req.body.status;
      const updatedApplication = await application.save();
      res.json(updatedApplication);
    } else {
      res.status(404).json({ message: "Application not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
