import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface EmailError extends Error {
  name: string;
  message: string;
  stack?: string;
}

export async function POST(request: Request) {
  console.log('API route hit - starting email process')

  // Check env variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error('Missing environment variables')
    return NextResponse.json(
      { message: 'Server configuration error - missing env variables' },
      { status: 500 }
    )
  }

  try {
    console.log('Parsing request body...')
    const body = await request.json()
    const { name, email, message } = body

    console.log('Creating transporter...')
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    })

    console.log('Attempting to send email...')
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email
    })

    console.log('Email sent successfully')
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    const emailError = error as EmailError
    console.error('Detailed error:', {
      name: emailError.name,
      message: emailError.message,
      stack: emailError.stack
    })
    
    return NextResponse.json(
      { message: `Failed to send email: ${emailError.message}` },
      { status: 500 }
    )
  }
}