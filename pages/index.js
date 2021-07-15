import { useState } from "react";


export default function Home() {
    const [count, setCount] = useState(0);


    return (<div>
        <p>Alterar {count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>Contar</button>
    </div>)
}