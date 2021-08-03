import { connectToDataBase } from '../../config/mongodb';

export default async (request, response) => {
    if (!request.body) {
        request.statusCode = 404;
        request.end('Error');
        return;
    }

    const { obj, table } = request.body;

    if (obj && table) {
        const db = await connectToDataBase(process.env.MONGODB_URI);

        const retorno = await db.collection(table).findOne(obj);

        response.json({
            result: retorno ? retorno : null
        })
    }
    else {
        response.json({
            result: "Erro de obj ou table"
        })
    }

}