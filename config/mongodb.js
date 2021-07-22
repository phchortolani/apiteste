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