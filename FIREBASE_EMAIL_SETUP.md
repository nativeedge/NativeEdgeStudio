# Firebase Email Automation Setup

## What This Does
Automatically sends email to `hexagonenterprises.me@gmail.com` whenever someone submits the contact form.

## Setup Steps

### 1. Install Dependencies
```bash
cd functions
npm install
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Set Email Configuration
```bash
firebase functions:config:set email.user="your-email@gmail.com"
firebase functions:config:set email.pass="your-app-password"
```

**For Gmail:**
- Enable 2-factor authentication
- Generate App Password: https://myaccount.google.com/apppasswords
- Use the app password (not your regular password)

### 4. Deploy Function
```bash
firebase deploy --only functions
```

### 5. Test
- Submit contact form on your website
- Check your email for automatic notification

## Email Template
The email includes:
- 👤 Contact person details
- 📧 Email and company info
- 🛠️ Service requested
- 💬 Full message content
- 📱 Quick reply links

## Troubleshooting

**Function not triggering?**
- Check Firebase Console > Functions for errors
- Verify Firestore rules allow writes

**Email not sending?**
- Check Gmail app password is correct
- Verify email configuration: `firebase functions:config:get`

**View logs:**
```bash
firebase functions:log
```

## Alternative: Simple EmailJS (No Backend)
If Firebase Functions seem complex, use EmailJS in the frontend:

1. Create account at https://emailjs.com
2. Update `src/services/emailService.ts` with your keys
3. Email sends directly from browser

## Cost
Firebase Functions: Free tier includes 125K invocations/month