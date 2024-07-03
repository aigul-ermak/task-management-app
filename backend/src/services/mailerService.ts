import nodemailer from 'nodemailer';
import { emailConfig } from '../config/emailConfig';

const transporter = nodemailer.createTransport(emailConfig);

export const sendEmail = async (to: string, subject: string, text: string, html?: string) => {
    const mailOptions = {
        from: 'noreply@example.com',
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
