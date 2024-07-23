import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        // Ustawienia nodemailer
        let transporter = nodemailer.createTransport({
            host: "smtp.example.com", // Podmień na swojego SMTP
            port: 587,
            secure: false,
            auth: {
                user: "user@example.com", // Podmień na swojego użytkownika SMTP
                pass: "password" // Podmień na swoje hasło SMTP
            },
        });

        // Przygotowanie wiadomości e-mail
        const mailData = {
            from: 'formularz@example.com',
            to: 'office@gtcodelab.com',
            subject: `Nowa wiadomość od ${req.body.name}`,
            text: req.body.message,
            html: `<div>${req.body.message}</div>`
        };

        // Wysyłanie e-maila
        transporter.sendMail(mailData, function (err, info) {
            if (err) {
                console.error(err);
                res.status(500).send("Error podczas wysyłania e-maila");
            } else {
                res.status(200).send("E-mail wysłany pomyślnie");
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
