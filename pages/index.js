import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Peyton Cleveland</title>
        <meta
          name="description"
          content="Welcome to my personal site! I'm Peyton Cleveland and I create digital experiences that users love utilizing modern tech stacks and serverless architectures."
        />
        <meta name="author" content="Peyton Cleveland" />
        <meta
          name="keywords"
          content="peyton,cleveland,digital,developer,education,ux,design,serverless,cloud"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peytoncleveland.com/" />
        <meta property="og:locale" content="en_US" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container h-screen flex flex-row px-4 md:px-6 lg:px-1 overflow-y-hidden">
        <div className="h-full flex flex-col justify-start md:justify-center pt-32 md:pt-0">
          <h1 className="text-white font-black tracking-wider text-5xl md:text-7xl mb-5 z-20 antialiased">
            DRIVING <span className="outlinedbright text-transparent">THE</span>{" "}
            <br /> DIGITAL REVOLUTION
          </h1>
          <p className="md:text-lg text-md font-light text-gray-300 w-11/12 z-20">
            I create digital products and toolings to drive the adoption of
            skills-based education and hiring.{" "}
            <br className="hidden md:block" /> I build experiences that people
            love to use, utilizing modern tech stacks and serverless
            architectures.
          </p>
          <div className="flex space-x-6 mt-7 w-full justify-center md:justify-start">
            <Link href="/">
              <button className="h-10 w-1/2 md:w-auto z-20 hover:bg-gray-900 hover:bg-opacity-50 md:px-8 border-2 text-white flex justify-center items-center text-sm font-extrabold transform uppercase hover:scale-103 duration-300 tracking-widest">
                RESUMé{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 -mr-1.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
            <Link href="/contact">
              <button className="ml-6 z-20 w-1/2 md:w-auto md:px-8 h-10 text-black text-sm font-extrabold tracking-widest bg-white hover:bg-gray-300 shadow-xl transform uppercase hover:scale-103 duration-300">
                CONTACT ME
              </button>
            </Link>
          </div>
          <div className="absolute bottom-6 lg:bottom-10 flex flex-col space-y-2.5 pr-1">
            <p className="text-white text-xs font-bold uppercase tracking-widest">
              Let&apos;s Connect
            </p>
            <div className="flex flex-row space-x-3 md:space-x-4">
              <div className="w-6 h-6 md:w-8 md:h-8 relative transform hover:scale-105 duration-300">
                <a href="https://google.com">
                  <Image layout="fill" src="/linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 relative transform hover:scale-105 duration-300">
                <a href="https://github.com/PeytonCleveland">
                  <Image layout="fill" src="/github.svg" alt="Github" />
                </a>
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 relative transform hover:scale-105 duration-300">
                <a href="https://google.com">
                  <Image layout="fill" src="/slack.svg" alt="Slack" />
                </a>
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 relative transform hover:scale-105 duration-300">
                <a href="https://discordapp.com/users/646023304087470101">
                  <Image layout="fill" src="/discord.svg" alt="Discord" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-10 mt-8 md:mt-2 space-y-3 absolute right-0 h-screen w-3/5 md:w-1/2 lg:w-2/6 overflow-hidden whitespace-nowrap z-0 text-4xl md:text-6xl">
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            Pentesting & Malware
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            User Experience Design
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            CISCO Networking
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            Adobe XD & Sketch
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            Product Management
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            RASA & Dialogflow
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            IOS Development
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            Pytorch & Tensorflow
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            Version Control
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            Jest & CYPRESS
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            React Development
          </h6>
          <h6 className="outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            Cloud Engineering
          </h6>
          <h6 className="outlined block uppercase font-extrabold tracking-wider text-transparent lg:hidden opacity-40">
            Product Design
          </h6>
        </div>
      </div>
      <div className="w-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-row overflow-x-hidden relative">
        <img src="redacted.png" className="w-1/2 z-20" />
        <div className="container -ml-24 mt-12 overflow-hidden flex flex-col">
          <h2 className="text-5xl tracking-wider font-extrabold whitespace-nowrap z-10 text-gray-300 scrolltext poppins">
            ABOUT ME <span className="text-deep-gray opacity-60">ABOUT ME</span>{" "}
            ABOUT ME ABOUT ME{" "}
            <span className="text-deep-gray opacity-60">ABOUT ME</span> ABOUT ME
            ABOUT ME ABOUT ME
          </h2>

          <div className="flex flex-col ml-44 mt-16">
            <code>{"const name = 'Peyton M. Cleveland';"}</code>
            <code>{"const home = 'Montgomery, AL';"}</code>
            <code>{"let email = 'peyton.cleveland.1@gmail.com';"}</code>
            <code>{"const children = ["}</code>
            <code className="ml-10">{"'Ava', 'Rosalee'"}</code>
            <code>{"];"}</code>
            <code>{"let hobbies = ["}</code>
            <code className="ml-10">
              {"'Carpentry', 'Music', 'Reading', 'Graphic Design', 'Crypto'"}
            </code>
            <code>{"];"}</code>
            <code>{"let favoriteBook = 'The Great Gatsby';"}</code>
            <code>{"let runningOutOfSpace = true;"}</code>
          </div>
        </div>
      </div>
    </div>
  );
}
