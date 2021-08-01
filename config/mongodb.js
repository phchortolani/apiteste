import { MongoClient } from 'mongodb';
import url from 'url';

export async function connectToDataBase(uri) {

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const dbname = url.parse(uri).pathname.substr(1);
    const db = client.db(dbname);


    return db;
}

export async function saveOne(obj, table) {
    if (obj && table) {
        try {
            const db = await connectToDataBase(process.env.MONGODB_URI);

            const collection = db.collection(table);

            await collection.insertOne(obj);

            return { status: true, retorno: "Salvo com sucesso!" }

        } catch {
            return { status: false, retorno: "Erro ao salvar" };
        }
    }
}