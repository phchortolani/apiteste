import { useState } from "react";


export default function Home() {
    const [count, setCount] = useState(0);


    return (<div>
        <p>Clique aqui para contar {count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>Contar</button>
    </div>)
}