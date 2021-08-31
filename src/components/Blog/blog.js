import axios from "axios";
import { useState } from "react";


export default function Blog() {

    const [dados, setDados] = useState([]);
    const [firstRender, SetFirstRender] = useState(true);

    async function connectToApi() {
        SetFirstRender(false);
        var response = await axios.post('/api/obterBlog');
        if (response.data) {
            setDados(response.data);
        }

    }

    if (firstRender) connectToApi();

    return (
        <div className=" m-5">
            {dados.length > 0 ?
                dados.map((e, i) => {
                    return <div className="mb-5 shadow p-4" key={i}>
                        <div className="mb-5" style={{ display: 'grid', placeContent: 'center' }}>
                            <img style={{ maxHeight: '40rem' }} src={e.media_url}></img>
                        </div>
                        <div>
                            <span>{e.caption}</span>
                        </div>

                    </div>
                }) : ""}
        </div>

    );
}