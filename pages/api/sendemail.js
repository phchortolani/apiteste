import { SMTPClient } from 'emailjs';
import { connectToDataBase } from '../../config/mongodb';

export default function Sendemail(req, res) {

    const { email } = req.body;

    async function save() {
        const db = await connectToDataBase(process.env.MONGODB_URI);

        const collection = db.collection("newsletter");

        let ret = await collection.insertOne({ email: email.toLowerCase(), createAt: new Date() });

        if (ret) return true;
        else return false;
    }



    const client = new SMTPClient({
        user: process.env.MAIL,
        password: process.env.MAIL_PASS,
        host: 'smtp.gmail.com',
        ssl: true
    });

    try {
        async function send(destino) {
            await client.sendAsync({
                text: `Olá! Este e-mail: ${email} quer receber conteúdos toda a semana sobre psicologia.`,
                from: process.env.MAIL,
                to: destino,
                subject: 'Solicitação de Newsletter!!',
            });
        }

        send("phchortolani@gmail.com");

    }
    catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }))
        return;
    }

    res.status(200).end(JSON.stringify({ message: 'Send Mail' }))




}