# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form emails to `sw2@atm.edu.in`.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (or any email provider you prefer)
4. Connect your email account (this will be the account that sends emails)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New Contact Form Submission - {{subject}}
```

**Email Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Contact Details</h3>
            <p><strong>Name:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Phone:</strong> {{from_phone}}</p>
            <p><strong>Subject:</strong> {{subject}}</p>
        </div>
        
        <div style="background: #fefefe; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Message</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
                This message was sent from the ATM Global Business School contact form.
                You can reply directly to this email to respond to {{from_name}}.
            </p>
        </div>
    </div>
</body>
</html>
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key** (e.g., `user_public_key_123`)

## Step 5: Update the Code

Replace the placeholder values in `src/pages/about/Contact.tsx`:

```javascript
// Replace these values with your actual EmailJS credentials
const result = await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email at `sw2@atm.edu.in` for the received message

## Alternative: Using a Different Email Service

If you prefer not to use EmailJS, you can also:

1. **Use Formspree**: Replace the form action with Formspree endpoint
2. **Use Netlify Forms**: If deploying on Netlify, use their built-in form handling
3. **Use a Backend API**: Create a simple backend API to handle email sending

## Troubleshooting

- Make sure all EmailJS credentials are correct
- Check browser console for any errors
- Verify your email service is properly connected
- Ensure the template variables match the code

## Security Notes

- The public key is safe to expose in frontend code
- EmailJS handles the email sending securely
- No sensitive data is stored on EmailJS servers 