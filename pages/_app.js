// import App from 'next/app'
// add bootstrap css 


// own css files here
import "../css/customcss.css";
import Head from "next/head";

import { AuthProvider } from '../context/Auth2Context';


function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Head>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="/dmlogolittle.png" />
                <title>Dm Psico</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous"></script>
            </Head>

            <Component {...pageProps} />
        </AuthProvider>
    )
}


export default MyApp