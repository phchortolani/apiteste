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

                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Poppins" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="hpfneITc-QepH2PbgAZFYa-Y7rTJWSaVkXdJx3IZyFk" />
                <link rel="icon" type="image/png" href="/dmlogolittle.png" />
                <title>Dara Marques Psicóloga</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />

               {/*  <link rel="stylesheet" href="@sweetalert2/theme-material-ui/material-ui.css" /> */}

                <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous"></script>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Shrikhand" />
                <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet"></link>

            </Head>

            <Component {...pageProps} />
        </AuthProvider>
    )
}


export default MyApp