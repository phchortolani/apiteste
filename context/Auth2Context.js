import React, { useEffect, useState } from "react";
import axios from "axios"
import { setCookie, parseCookies } from "nookies";
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
        }
    }, []);

    async function signIn(user, pass) {
        var ret = await axios.post('/api/login', { user: user, pass: pass });
        if (ret.data) {
            setCookie(null, 'token', ret.data.token, { maxAge: 68 * 68 * 1, path: '/' });
        }
        setLogin(ret.data.login);
        Router.push("./Home");
    }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated, login }}>
            {props.children}
        </AuthContext.Provider>
    )

}
