// backend/src/services/emailService.js

const nodemailer = require("nodemailer");

// ======= EMAIL TRANSPORTER CONFIGURATION =======
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Verify email configuration on startup
transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Email configuration error:", error);
  } else {
    console.log("✅ Email server is ready!");
  }
});

/**
 * Escape HTML to prevent injection when embedding user input in emails
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Send Contact Emails (to customer and company)
 */
exports.sendContactEmails = async (contactData) => {
  try {
    const { name, email, projectType, budget, timeline, message } = contactData;

    // ======= EMAIL TO CUSTOMER =======
    const customerEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank You for Your Inquiry - COT360°",
      html: generateCustomerEmail(name, projectType, email),
    };

    // ======= EMAIL TO COMPANY =======
    const companyEmail = {
      from: process.env.GMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `New Project Inquiry from ${name}`,
      html: generateCompanyEmail(contactData),
    };

    // Send both emails
    await transporter.sendMail(customerEmail);
    console.log(`✅ Customer email sent to ${email}`);

    await transporter.sendMail(companyEmail);
    console.log(`✅ Company email sent to ${process.env.COMPANY_EMAIL}`);

    return {
      success: true,
      message: "Emails sent successfully",
    };
  } catch (error) {
    console.error("❌ Error sending emails:", error);
    throw new Error(`Failed to send emails: ${error.message}`);
  }
};

/**
 * Generate Customer Email HTML
 */
function generateCustomerEmail(name, projectType, email) {
  const safeName = escapeHtml(name);
  const safeProjectType = escapeHtml(projectType);
  const safeEmail = escapeHtml(email);

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f6f8fc; padding: 40px 20px; border-radius: 10px;">
      <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        
        <h1 style="color: #0b1220; margin-bottom: 20px; font-size: 28px;">Thank You for Your Inquiry!</h1>
        
        <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Dear <strong>${safeName}</strong>,
        </p>
        
        <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          We've received your project inquiry and we're excited to learn more about your needs. Our team is reviewing your information and will get back to you within <strong>24 to 48 business hours</strong>.
        </p>

        <div style="background: #f0f5ff; padding: 20px; border-left: 4px solid #3b82f6; border-radius: 5px; margin: 30px 0;">
          <h3 style="color: #3b82f6; margin-top: 0; margin-bottom: 10px;">Your Inquiry Summary:</h3>
          <p style="color: #64748b; margin: 8px 0;"><strong>Project Type:</strong> ${safeProjectType}</p>
          <p style="color: #64748b; margin: 8px 0;"><strong>Contact Email:</strong> ${safeEmail}</p>
          <p style="color: #64748b; margin: 8px 0;"><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</p>
        </div>

        <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          In the meantime, if you have any additional information or questions, feel free to reply to this email.
        </p>

        <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
          Best regards,<br>
          <strong>The COT360° Team</strong><br>
          Your 360° Technology Partner
        </p>

        <hr style="border: none; border-top: 1px solid #e1e6ed; margin: 30px 0;">

        <div style="text-align: center; color: #64748b; font-size: 12px;">
          <p style="margin: 5px 0;">
            Email: <strong>hello@cot360.com</strong><br>
            Response Time: <strong>24-48 hours</strong>
          </p>
          <p style="margin: 10px 0; color: #999;">
            © 2026 COT360°. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  `;
}

/**
 * Generate Company Email HTML
 */
function generateCompanyEmail(data) {
  const { name, business, email, phone, country, projectType, budget, timeline, message } = data;

  const safeName = escapeHtml(name);
  const safeBusiness = escapeHtml(business);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeCountry = escapeHtml(country);
  const safeProjectType = escapeHtml(projectType);
  const safeBudget = escapeHtml(budget);
  const safeTimeline = escapeHtml(timeline);
  const safeMessage = escapeHtml(message);

  return `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; background: #f6f8fc; padding: 40px 20px;">
      <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        
        <h1 style="color: #0b1220; margin-bottom: 30px; font-size: 32px; border-bottom: 3px solid #00c2a8; padding-bottom: 15px;">
          🎯 New Project Inquiry
        </h1>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <tr style="border-bottom: 1px solid #e1e6ed;">
            <td style="padding: 12px; font-weight: 600; color: #0b1220; width: 30%; background: #f0f5ff;">Client Name:</td>
            <td style="padding: 12px; color: #64748b;">${safeName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e1e6ed;">
            <td style="padding: 12px; font-weight: 600; color: #0b1220; background: #f0f5ff;">Email:</td>
            <td style="padding: 12px; color: #64748b;"><a href="mailto:${safeEmail}" style="color: #3b82f6; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #e1e6ed;">
            <td style="padding: 12px; font-weight: 600; color: #0b1220; background: #f0f5ff;">Phone:</td>
            <td style="padding: 12px; color: #64748b;">${safePhone || "Not provided"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e1e6ed;">
            <td style="padding: 12px; font-weight: 600; color: #0b1220; background: #f0f5ff;">Business Name:</td>
            <td style="padding: 12px; color: #64748b;">${safeBusiness || "Not provided"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e1e6ed;">
            <td style="padding: 12px; font-weight: 600; color: #0b1220; background: #f0f5ff;">Country:</td>
            <td style="padding: 12px; color: #64748b;">${safeCountry || "Not provided"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e1e6ed;">
            <td style="padding: 12px; font-weight: 600; color: #0b1220; background: #f0f5ff;">Project Type:</td>
            <td style="padding: 12px; color: #64748b;"><span style="background: #e5f3ff; padding: 4px 12px; border-radius: 20px; font-weight: 600; color: #3b82f6;">${safeProjectType}</span></td>
          </tr>
          <tr style="border-bottom: 1px solid #e1e6ed;">
            <td style="padding: 12px; font-weight: 600; color: #0b1220; background: #f0f5ff;">Budget:</td>
            <td style="padding: 12px; color: #64748b;"><span style="background: #fff3cd; padding: 4px 12px; border-radius: 20px; font-weight: 600;">${safeBudget}</span></td>
          </tr>
          <tr style="border-bottom: 1px solid #e1e6ed;">
            <td style="padding: 12px; font-weight: 600; color: #0b1220; background: #f0f5ff;">Timeline:</td>
            <td style="padding: 12px; color: #64748b;"><span style="background: #e8f5e9; padding: 4px 12px; border-radius: 20px; font-weight: 600;">${safeTimeline}</span></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: 600; color: #0b1220; background: #f0f5ff;">Submitted:</td>
            <td style="padding: 12px; color: #64748b;">${new Date().toLocaleString()}</td>
          </tr>
        </table>

        <div style="background: #f9fafb; padding: 20px; border-left: 4px solid #00c2a8; border-radius: 5px; margin-bottom: 30px;">
          <h3 style="color: #0b1220; margin-top: 0; margin-bottom: 15px;">📝 Project Details:</h3>
          <p style="color: #64748b; white-space: pre-wrap; line-height: 1.6; margin: 0; font-size: 14px;">
            ${safeMessage}
          </p>
        </div>

        <div style="background: #fffbeb; padding: 15px; border-radius: 5px; border: 1px solid #fcd34d; margin-bottom: 30px;">
          <p style="color: #92400e; margin: 0; font-size: 13px; font-weight: 600;">
            ⚠️ ACTION REQUIRED: Please respond to this inquiry within 24-48 hours.
          </p>
        </div>

        <div style="text-align: center;">
          <a href="mailto:${safeEmail}?subject=Re: Your COT360° Project Inquiry" style="background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%); color: white; padding: 12px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; margin: 10px 0;">
            Reply to ${safeName}
          </a>
        </div>

        <hr style="border: none; border-top: 1px solid #e1e6ed; margin: 30px 0;">

        <div style="text-align: center; color: #999; font-size: 12px;">
          <p style="margin: 5px 0;">COT360° Contact Form - Automated Email</p>
        </div>

      </div>
    </div>
  `;
}