import React, { useEffect, useState } from "react";
import axios from "axios"
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import jwt from 'jsonwebtoken';


export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [login, setLogin] = useState(undefined);

    const isAuthenticated = !!login;

    useEffect(() => {
        const { token } = parseCookies();
        if (token) {
            var user = jwt.decode(token);
            setLogin(user.username);
            Router.push("./Home");
        } else {
            Router.push("./");
        }
    }, []);

    async function signIn(user, pass) {
        var ret = await axios.post('/api/login', { user: user, pass: pass });
        if (ret.data) {
            setCookie(null, 'token', ret.data.token, { maxAge: 68 * 68 * 1, path: '/' });
        }
        setLogin(ret.data.login);

        if (ret.data.login) {
            Router.push("./Home");
        } else return "Usuário não encontrado.";

    }

    async function signOut() {
        destroyCookie(null, "token", { path: '/' });
        setLogin(undefined);
        Router.push("./");
    }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated, login, signOut }}>
            {props.children}
        </AuthContext.Provider>
    )

}
