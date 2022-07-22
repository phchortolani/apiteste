import { Html, Head, Main, NextScript } from 'next/document';
var dataLayer =  dataLayer || []

export default function Document() {
  
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'AW-10929408149');

  gtag('event', 'conversion', { 'send_to': 'AW-10929408149/zuxBCNiBss8DEJWRxtso' });


  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />

        <link rel="icon" type="image/png" href="./dmlogolittle.png" />

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10929408149"></script>

        <script>

        </script>


      </Head>
      <body>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}