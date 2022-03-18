import Head from "next/head";
import "../css/landingpage.css";
import "../css/ColorAdmin.css";
import "../css/customcss.css";
import "../css/material-ui.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";


config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

import { AuthProvider } from '../context/Auth2Context';


function MyApp({ Component, pageProps }) {
    useEffect(() => {
        Aos.init({ duration: 1500 });

    }, [])
    return (
        <AuthProvider>
            <Head>
                <title>Dara Marques | Psicóloga Online</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="hpfneITc-QepH2PbgAZFYa-Y7rTJWSaVkXdJx3IZyFk" />
            </Head>

            <Component {...pageProps} />
        </AuthProvider>
    )
}


export default MyApp