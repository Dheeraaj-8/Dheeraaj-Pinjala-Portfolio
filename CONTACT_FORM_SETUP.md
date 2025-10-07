# Contact Form Setup Instructions

## Overview
The contact form has been successfully implemented with backend email functionality using Resend.

## Setup Steps

### 1. Get a Resend API Key
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key

### 2. Configure Environment Variables
Create a `.env.local` file in the root of your project:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

Replace `your_resend_api_key_here` with your actual Resend API key.

### 3. Update Email Configuration (Optional)
In `app/api/contact/route.ts`, you may want to update:

- **From email**: Currently set to `onboarding@resend.dev` (Resend's default test email)
  - For production, you'll want to verify your own domain and use that
  - Instructions: https://resend.com/docs/dashboard/domains/introduction

- **To email**: Currently set to `dheeraajpinjala@gmail.com`
  - This is where contact form submissions will be sent

### 4. Testing
1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox for the message

## Features Implemented

✅ **Form Validation**
- Client-side validation using Zod
- Required fields: name (min 2 chars), email (valid format), subject (min 5 chars), message (min 10 chars)
- Real-time error messages

✅ **User Experience**
- Loading state with spinner while submitting
- Success/error toast notifications
- Form reset after successful submission
- All fields disabled during submission

✅ **API Route**
- POST endpoint at `/api/contact`
- Server-side validation
- Professional HTML email template
- Error handling and logging

✅ **Email Template**
- Beautiful, responsive HTML email
- Displays sender's name, email, subject, and message
- Includes reply-to functionality for easy responses

## Tech Stack
- **Next.js 15** - Framework
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Resend** - Email service
- **Sonner** - Toast notifications
- **Tailwind CSS** - Styling

## Notes
- The free tier of Resend allows 100 emails per day
- For production use, verify your own domain in Resend
- Keep your API key secure and never commit it to version control

