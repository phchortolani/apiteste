import { useState } from "react";

export default function Estoque() {

    const valorMercadoriaCompra = 20.00;


    const [mercadoria, setMercadoria] = useState(0);

    const [caixa, setCaixa] = useState(0);
    const [valorMercadoriaVenda, setvalorMercadoriaVenda] = useState(40.00);

    function Vender() {
        if (mercadoria > 0) {
            setMercadoria(mercadoria - 1);
            setCaixa(caixa + valorMercadoriaVenda);
        }
    }

    function Comprar() {
        setCaixa(caixa - valorMercadoriaCompra);
        setMercadoria(mercadoria + 1);

    }

    function Limpar() {
        setMercadoria(0);
        setCaixa(0);
    }

    function  DefinirValorDaVenda(valordavenda) {
        
        setvalorMercadoriaVenda(parseInt(valordavenda.target.value))
    }

    return (
        <div className="text-center mt-5">
            <p style={{color:'green'}}>Valor da mercadoria de venda (teste): R$ {valorMercadoriaVenda}</p>
            <p style={{color:'red'}}>Valor da mercadoria de Compra: R$ {valorMercadoriaCompra}</p>
            <p>Total de itens sapatos: {mercadoria}</p>
            <p>Caixa: R${caixa.toFixed(2)}</p>
            <p>Porcentagem de lucro: {valorMercadoriaVenda / valorMercadoriaCompra * 100 - 100}%</p>
            <input type="text" className="form-control w-25 container" onInput={(e) => DefinirValorDaVenda(e)} placeholder="Valor desejado de venda"></input>
            <br></br>
            <button type="button" onClick={() => Vender()} className="btn btn-primary">Vender</button>
            <button type="button" onClick={() => Comprar()} className="btn btn-info">Comprar</button>
            <button type="button" onClick={() => Limpar()} className="btn btn-danger">Limpar</button>
        </div>
    );

}