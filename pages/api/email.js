import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {

    const { name, email, message } = req.body;

    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        ssl: true
    });

    try {
        await client.sendAsync(
            {
                text: message,
                from: `${name} <${email}>`,
                to: `Antoine Bollinger <${process.env.TO}>`,
                cc: `${name} <${email}>`,
                bcc: `Antoine Bollinger <${process.env.BCC}>`,
                subject: `${name} vous a envoyé un email`,

            }
        );
    } catch (e) {
        res.status(400).end(JSON.stringify(e));
        return;
    }

    res.status(200).end(JSON.stringify(req.body));
}