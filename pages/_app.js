import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  console.log(
    "\nHiring? \nPlease email me at peyton.cleveland.1@gmail.com\n\n      ▄█    █▄     ▄█     ▄████████    ▄████████        ▄▄▄▄███▄▄▄▄      ▄████████\n     ███    ███   ███    ███    ███   ███    ███      ▄██▀▀▀███▀▀▀██▄   ███    ███\n     ███    ███   ███▌   ███    ███   ███    █▀       ███   ███   ███   ███    █▀\n    ▄███▄▄▄▄███▄▄ ███▌  ▄███▄▄▄▄██▀  ▄███▄▄▄          ███   ███   ███  ▄███▄▄▄\n   ▀▀███▀▀▀▀███▀  ███▌ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀          ███   ███   ███ ▀▀███▀▀▀\n     ███    ███   ███  ▀███████████   ███    █▄       ███   ███   ███   ███    █▄\n     ███    ███   ███    ███    ███   ███    ███      ███   ███   ███   ███    ███\n     ███    █▀    █▀     ███    ███   ██████████       ▀█   ███   █▀    ██████████\n                         ███    ███                                                \n\n"
  );
  return (
    <Layout>
      <Head>
        <title>Peyton Cleveland</title>
        <meta
          name="description"
          content="Welcome to my personal site! I'm Peyton Cleveland and I create digital experiences that users love utilizing modern tech stacks and serverless architectures."
        />
        <meta name="author" content="Peyton Cleveland" />
        <meta
          name="keywords"
          content="peyton,cleveland,digital,developer,education,ux,design,serverless,cloud,university"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
