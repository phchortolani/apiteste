import { connectToDataBase } from '../../config/mongodb';

export default async  (request, response) => {
  

    const { where = {} } = request.body;
        const db = await connectToDataBase(process.env.MONGODB_URI);
        const retorno = await db.collection("counter").find(where).toArray();
        response.json({
            result: retorno ? retorno : null
        })
}