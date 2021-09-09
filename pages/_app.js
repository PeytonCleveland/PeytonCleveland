import "../styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  console.log(
    "\nHiring? \nPlease email me at peyton.cleveland.1@gmail.com\n\n      ▄█    █▄     ▄█     ▄████████    ▄████████        ▄▄▄▄███▄▄▄▄      ▄████████\n     ███    ███   ███    ███    ███   ███    ███      ▄██▀▀▀███▀▀▀██▄   ███    ███\n     ███    ███   ███▌   ███    ███   ███    █▀       ███   ███   ███   ███    █▀\n    ▄███▄▄▄▄███▄▄ ███▌  ▄███▄▄▄▄██▀  ▄███▄▄▄          ███   ███   ███  ▄███▄▄▄\n   ▀▀███▀▀▀▀███▀  ███▌ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀          ███   ███   ███ ▀▀███▀▀▀\n     ███    ███   ███  ▀███████████   ███    █▄       ███   ███   ███   ███    █▄\n     ███    ███   ███    ███    ███   ███    ███      ███   ███   ███   ███    ███\n     ███    █▀    █▀     ███    ███   ██████████       ▀█   ███   █▀    ██████████\n                         ███    ███                                                \n\n"
  );
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
