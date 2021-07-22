import jwt from "jsonwebtoken";
import { connectToDataBase } from '../../config/mongodb';

export default async (request, response) => {
    if (!request.body) {
        request.statusCode = 404;
        request.end('Error');
        return;
    }
    const encrypt = require("md5");
    const { user, pass } = request.body;

    const db = await connectToDataBase(process.env.MONGODB_URI);

    const collection = db.collection("usuarios");

    await collection.insertOne({
        usuario: user,
        senha: encrypt(pass),
        dataCriacao: new Date()
    })

    response.json({
        token: jwt.sign({
            username: user
        }, process.env.JWT_KEY)
    });


}