import axios from "axios";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/Auth2Context';



export default function Blog() {
    const { isMobile } = useContext(AuthContext);
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
        <div className={isMobile ? "m-2 " : "m-5"}>
            {dados.length > 0 ?
                dados.map((e, i) => {
                    return <div className={isMobile ? " mb-5 mt-1 bg-white p-2 shadow" : "mb-5 bg-white  shadow p-4"} key={i}>
                        <div className="mb-2" style={{ display: 'grid', placeContent: 'center' }}>
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