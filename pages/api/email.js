import { SMTPClient } from 'emailjs';

export default function handler(req, res) {

    const { name, email, message } = req.body;

    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        ssl: true
    });

    try {
        client.send(
            {
                text: message,
                from: `${name} <${email}>`,
                to: `Antoine Bollinger <${process.env.TO}>`,
                cc: `${name} <${email}>`,
                subject: `${name} vous a envoyé un email`,

            }
        )
    } catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }))
        return;
    }

    res.status(200).end(JSON.stringify(req.body))
}