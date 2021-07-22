import { parseCookies } from "nookies";

export const Token = () => {
    let token;
    var cookies = parseCookies();
    let Authenticated;
    if (cookies.token) {
        token = cookies.token;
        Authenticated = true;
    }

    var jwt = require('jsonwebtoken');
    var decoded = jwt.decode(token, process.env.JWT_KEY);

    var tk = {
        isAuthenticated: Authenticated,
        usuario: decoded
    }

    return tk;

}
