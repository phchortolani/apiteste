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
    const [validatelist, setValidatelist] = useState([]);

    const encrypt = require("md5");

    async function CadastrarNovo() {
        let erroslist = [];
        for (var prop in user) {
            if (user[prop] == "") {
                erroslist.push(prop);
            }
        }
        setValidatelist(erroslist);
        setUser({ ...user, dataCriacao: new Date() });

        if (erroslist.length == 0) {
            var ret = await axios.post('/api/findone', { obj: { usuario: user.usuario }, table: "usuarios" });
            console.log(ret.data);
            await axios.post('/api/saveone', { obj: user, table: "usuarios" });
        }

    }

    return (
        <div className="container w-50 mt-2">
            <form>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Nome de Usuário</label>
                    <input onChange={(e) => setUser({ ...user, usuario: e.target.value })} type="text" className={"form-control " + (validatelist.includes(("usuario")) ? "border-danger" : "")} id="usuario" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input onChange={(e) => setUser({ ...user, nome: e.target.value })} type="text" className={"form-control " + (validatelist.includes(("nome")) ? "border-danger" : "")} id="nome" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" className={"form-control " + (validatelist.includes(("email")) ? "border-danger" : "")} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Este e-mail não será compartilhado com ninguém.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input onChange={(e) => setUser({ ...user, senha: encrypt(e.target.value) })} type="password" className={"form-control " + (validatelist.includes(("senha")) ? "border-danger" : "")} id="senha" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tipo" className="form-label">Tipo</label>
                    <select onChange={(e) => setUser({ ...user, tipo: e.target.value })} className="form-select" id="tipo" >
                        <option value="administrador">Administrador</option>
                        <option value="paciente">Paciente</option>
                    </select>

                </div>
                <button onClick={() => { CadastrarNovo() }} type="button" className="btn btn-primary">Cadastrar</button>
                {validatelist.length > 0 ? <p className="text-danger">Preencha todos os campos obrigatórios.</p> : ""}
            </form>
        </div>
    )
}
