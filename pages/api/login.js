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

export default async (request, response) => {
    if (!request.body) {
        request.statusCode = 404;
        request.end('Error');
        return;
    }
    const encrypt = require("md5");

    const { user, pass } = request.body;

    const db = await connectToDataBase(process.env.MONGODB_URI);

    const dbuser = db.collection('usuarios').find({ usuario: user });

    const cursor = db
        .collection('usuarios')
        .find({
            usuario: user
        })
        .project({ usuario: 1, _id: 0 });


    console.log(cursor);


    response.json({
        usuario: dbuser
    });


}