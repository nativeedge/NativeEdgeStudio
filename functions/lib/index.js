"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailOnNewMessage = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();
// Configure your email transporter
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: functions.config().email.user,
        pass: functions.config().email.pass // Set via: firebase functions:config:set email.pass="your-app-password"
    }
});
exports.sendEmailOnNewMessage = functions.firestore
    .document('messages/{messageId}')
    .onCreate(async (snap, context) => {
    const messageData = snap.data();
    const mailOptions = {
        from: functions.config().email.user,
        to: 'hexagonenterprises.me@gmail.com',
        subject: `New Contact Form Message from ${messageData.name}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f39c12; padding-bottom: 10px;">
            🔔 New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Name:</strong> ${messageData.name}</p>
            <p><strong>📧 Email:</strong> ${messageData.email}</p>
            <p><strong>🏢 Company:</strong> ${messageData.company || 'Not provided'}</p>
            <p><strong>🛠️ Service:</strong> ${messageData.service}</p>
            <p><strong>📅 Received:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">💬 Message:</h3>
            <p style="line-height: 1.6; color: #555;">${messageData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px;">
            <p style="margin: 0; color: #2d5a2d;">
              <strong>📱 Quick Actions:</strong><br>
              Reply to: <a href="mailto:${messageData.email}">${messageData.email}</a><br>
              View in Admin Panel: <a href="https://your-domain.com/admin">Admin Dashboard</a>
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #888; font-size: 12px; text-align: center;">
            This email was automatically generated from NativeEdge Studio contact form.
          </p>
        </div>
      `
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully for message:', context.params.messageId);
        return null;
    }
    catch (error) {
        console.error('Error sending email:', error);
        return null;
    }
});
//# sourceMappingURL=index.js.map