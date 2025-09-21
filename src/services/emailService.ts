// Email notification service using EmailJS
// Install: npm install @emailjs/browser

import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';

export const sendEmailNotification = async (messageData: {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: messageData.name,
      from_email: messageData.email,
      company: messageData.company,
      service: messageData.service,
      message: messageData.message,
      to_email: 'hexagonenterprises.me@gmail.com', // Your admin email
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};

// Alternative: Using a serverless function (Netlify/Vercel)
export const sendEmailViaServerless = async (messageData: any) => {
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email service error:', error);
    return { success: false, error };
  }
};