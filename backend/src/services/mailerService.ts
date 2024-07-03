import nodemailer from 'nodemailer';
import { emailConfig } from '../config/emailConfig';

const transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure, // true for 465, false for other ports
    auth: {
        user: emailConfig.auth.user,
        pass: emailConfig.auth.pass,
    },
    tls: {
        rejectUnauthorized: false // If using a self-signed certificate
    }
});

export const sendEmail = async (to: string, subject: string, text: string, html?: string) => {
    const mailOptions = {
        from: 'noreply@example.com', // Replace with a suitable from address
        to,
        subject,
        text,
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
