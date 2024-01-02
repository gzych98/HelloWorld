import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { subject, message, formData } = await request.json();
        console.log(formData)
        const emailContent = `
        <h3>${message}</h3>
        <p>Imię: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Uwagi dodatkowe: ${formData.additionalNotes}</p>
        `;
        console.log(emailContent)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: 'grz3siek17@gmail.com',
            to: 'grzegorz.zych98@gmail.com',
            subject: subject,
            html: emailContent
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Failed to send email: ${error.message}' }, { status: 500 })
    }
}