import { timeStamp } from "console";
import jwt from "jsonwebtoken";
import { MongoClient } from 'mongodb';
import url from 'url';


async function connectToDataBase(uri) {
 

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const dbname = url.parse(uri).pathname.substr(1);
    const db = client.db(dbname);

 
    return db;
}

const KEY = 'H5ADF0RM1T0K&N';

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
        }, KEY)
    });


}