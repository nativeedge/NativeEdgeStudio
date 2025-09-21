# Email Notification Setup Guide

## Admin Panel Access
- Visit: `http://localhost:3000/admin` to access the admin panel
- View all messages, mark as read, and delete messages

## Email Notification Setup Options

### Option 1: EmailJS (Recommended for Frontend)

1. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

2. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Create account and verify email

3. **Setup Email Service**
   - Add email service (Gmail, Outlook, etc.)
   - Create email template with these variables:
     - `{{from_name}}` - Sender name
     - `{{from_email}}` - Sender email
     - `{{company}}` - Company name
     - `{{service}}` - Service type
     - `{{message}}` - Message content

4. **Update Configuration**
   - Edit `src/services/emailService.ts`
   - Replace with your EmailJS credentials:
     ```typescript
     const EMAILJS_SERVICE_ID = 'your_service_id';
     const EMAILJS_TEMPLATE_ID = 'your_template_id';
     const EMAILJS_PUBLIC_KEY = 'your_public_key';
     ```

### Option 2: Serverless Function (Netlify/Vercel)

1. **Create Netlify Function**
   ```javascript
   // netlify/functions/send-email.js
   const nodemailer = require('nodemailer');
   
   exports.handler = async (event, context) => {
     if (event.httpMethod !== 'POST') {
       return { statusCode: 405, body: 'Method Not Allowed' };
     }
   
     const { name, email, company, service, message } = JSON.parse(event.body);
   
     const transporter = nodemailer.createTransporter({
       service: 'gmail',
       auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS
       }
     });
   
     try {
       await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: 'admin@nativeedge.studio',
         subject: `New Contact Form Message from ${name}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Company:</strong> ${company}</p>
           <p><strong>Service:</strong> ${service}</p>
           <p><strong>Message:</strong> ${message}</p>
         `
       });
   
       return { statusCode: 200, body: 'Email sent successfully' };
     } catch (error) {
       return { statusCode: 500, body: 'Failed to send email' };
     }
   };
   ```

2. **Environment Variables**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Option 3: Firebase Functions (Advanced)

1. **Install Firebase Functions**
   ```bash
   npm install -g firebase-tools
   firebase init functions
   ```

2. **Create Function**
   ```javascript
   // functions/index.js
   const functions = require('firebase-functions');
   const nodemailer = require('nodemailer');
   
   exports.sendEmailNotification = functions.firestore
     .document('messages/{messageId}')
     .onCreate(async (snap, context) => {
       const messageData = snap.data();
       
       const transporter = nodemailer.createTransporter({
         service: 'gmail',
         auth: {
           user: functions.config().email.user,
           pass: functions.config().email.pass
         }
       });
   
       await transporter.sendMail({
         from: functions.config().email.user,
         to: 'admin@nativeedge.studio',
         subject: `New Contact Form Message from ${messageData.name}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${messageData.name}</p>
           <p><strong>Email:</strong> ${messageData.email}</p>
           <p><strong>Company:</strong> ${messageData.company}</p>
           <p><strong>Service:</strong> ${messageData.service}</p>
           <p><strong>Message:</strong> ${messageData.message}</p>
         `
       });
     });
   ```

## Firebase Security Rules

Add these rules to your Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{document} {
      allow read, write: if true; // For development
      // For production, add proper authentication
    }
  }
}
```

## Testing

1. Fill out contact form on your website
2. Check Firebase console for new message
3. Check admin panel at `/admin`
4. Verify email notification received

## Production Considerations

- Add authentication to admin panel
- Implement proper security rules
- Use environment variables for sensitive data
- Add rate limiting to prevent spam
- Consider using a dedicated email service (SendGrid, Mailgun)