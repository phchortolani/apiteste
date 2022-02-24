import { SMTPClient } from 'emailjs';
import { connectToDataBase } from '../../config/mongodb';

export default function Sendemail(req, res) {

    const { email } = req.body;

    async function save() {
        const db = await connectToDataBase(process.env.MONGODB_URI);

        const collection = db.collection("newsletter");

        let ret = await collection.insertOne({ email: email, createAt: new Date() });

        if (ret) return true;
        else return false;
    }

    if (save()) {
        const client = new SMTPClient({
            user: process.env.MAIL,
            password: process.env.MAIL_PASS,
            host: 'smtp.gmail.com',
            ssl: true
        });

        try {
            client.send(
                {
                    text: `Olá!, Este e-mail: ${email} quer receber conteúdos toda a semana sobre psicologia.`,
                    from: process.env.MAIL,
                    to: "phchortolani@gmail.com",
                    subject: 'Solicitação de Newsletter!!',
                }
            )
        }
        catch (e) {
            res.status(400).end(JSON.stringify({ message: "Error" }))
            return;
        }

        res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
    } else res.status(400).end(JSON.stringify({ message: "Error" }))



}