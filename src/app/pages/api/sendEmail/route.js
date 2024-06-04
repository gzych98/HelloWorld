// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { subject, message, formData } = req.body;
    console.log(formData);

    const emailContent = `
        <h3>${message}</h3>
        <p>Imię: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Uwagi dodatkowe: ${formData.additionalNotes}</p>
    `;
    console.log(emailContent);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "grz3siek17@gmail.com", // Should be replaced with your verified sender email address
      to: "gregorytomek1@gmail.com", // Destination email address
      subject: subject,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Error occurred: ", error);
    res.status(500).json({
      message: `Failed to send email: ${error.message}`,
    });
  }
}
