// backend/src/controllers/contactController.js

const { sendContactEmails } = require("../services/emailService");

/**
 * Submit Contact Form
 * POST /api/contact
 */
exports.submitContactForm = async (req, res) => {
  try {
    const {
      name,
      business,
      email,
      phone,
      country,
      projectType,
      budget,
      timeline,
      message,
      consent,
    } = req.body;

    // ======= VALIDATION =======
    if (
      !name ||
      !email ||
      !projectType ||
      !budget ||
      !timeline ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    if (!consent) {
      return res.status(400).json({
        success: false,
        message: "Please agree to be contacted.",
      });
    }

    // ======= PREPARE DATA =======
    const contactData = {
      name,
      business,
      email,
      phone,
      country,
      projectType,
      budget,
      timeline,
      message,
      submittedAt: new Date(),
    };

    // ======= SEND EMAILS =======
    await sendContactEmails(contactData);

    // ======= SUCCESS RESPONSE =======
    return res.status(200).json({
      success: true,
      message:
        "Thank you! Your inquiry has been received. We'll respond within 24-48 hours.",
      data: {
        email: email,
        submittedAt: contactData.submittedAt,
      },
    });
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit your inquiry. Please try again later.",
      error:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

/**
 * Get Contact Form Status (Optional)
 * GET /api/contact/status
 */
exports.getContactStatus = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Contact form is active and ready to receive inquiries.",
      status: "active",
    });
  } catch (error) {
    console.error("Error in getContactStatus:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve contact status.",
    });
  }
};