import React, { useState } from "react";
import axios from "axios";

export default function Inscrever() {
    const [user, setUser] = useState({
        usuario: "",
        senha: "",
        dataCriacao: new Date(),
        nome: "",
        email: "",
        tipo: "administrador"

    });
    const encrypt = require("md5");
    async function CadastrarNovo() {
        setUser({ ...user, dataCriacao: new Date() });
        await axios.post('/api/inscrever', { usuario: user });
    }

    return (
        <div className="container w-50 mt-2">
            <div className="mb-3">
                <label htmlFor="usuario" className="form-label">Nome de Usuário</label>
                <input onChange={(e) => setUser({ ...user, usuario: e.target.value })} type="text" className="form-control" id="usuario" />
            </div>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input onChange={(e) => setUser({ ...user, nome: e.target.value })} type="text" className="form-control" id="nome" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Este e-mail não será compartilhado com ninguém.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                <input onChange={(e) => setUser({ ...user, senha: encrypt(e.target.value) })} type="password" className="form-control" id="senha" />
            </div>
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo</label>
                <select onChange={(e) => setUser({ ...user, tipo: e.target.value })} className="form-select" id="tipo" >
                    <option value="administrador">Administrador</option>
                    <option value="paciente">Paciente</option>
                </select>

            </div>
            <button onClick={() => { CadastrarNovo() }} type="button" className="btn btn-primary">Cadastrar</button>
        </div>
    )
}
