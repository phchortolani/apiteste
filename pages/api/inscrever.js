import { connectToDataBase } from '../../config/mongodb';

export default async (request, response) => {
    if (!request.body) {
        request.statusCode = 404;
        request.end('Error');
        return;
    }
    const { usuario } = request.body;

    const db = await connectToDataBase(process.env.MONGODB_URI);

    const collection = db.collection("usuarios");

    await collection.insertOne(usuario);


    response.json({
        result: true
    });


}