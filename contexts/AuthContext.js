import { createContext } from "react";
import { Token } from "../auth";
import { Router } from 'next/router';
import axios from "axios";

export const AuthContext = createContext({isAuthenticated, signIn});

export function AuthProvider(props) {
    const isAuthenticated = Token().isAuthenticated;

    async function signIn(user, pass) {
        var ret = await axios.post('/api/login', { user: user, pass: pass });
        if (ret.data) {
            setCookie(null, 'token', ret.data.token, { maxAge: 68 * 68 * 1, path: '/' });
        }
        console.log("caiu aq");

        Router.push('../Home');

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}