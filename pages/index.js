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
      <div className="container h-screen flex flex-row items-center">
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-white font-black tracking-wider text-7xl mb-5">
            DRIVING <span className="outlinedbright text-deep-gray">THE</span>{" "}
            <br /> DIGITAL REVOLUTION
          </h1>
          <p className="text-lg font-normal text-gray-300 w-7/12">
            I create digital products and toolings to drive the adoption of
            skills-based education and hiring. I build experiences that people
            love to use, utilizing modern tech stacks and serverless
            architectures.
          </p>
          <div className="flex space-x-6 mt-7">
            <Link href="/">
              <button className="h-10 hover:bg-gray-900 hover:bg-opacity-50 px-8 border-2 text-white flex justify-center items-center text-sm font-extrabold transform uppercase hover:scale-105 duration-300 tracking-widest">
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
            <Link href="/sign-up">
              <button className="ml-6 px-8 h-10 text-black text-sm font-extrabold tracking-widest bg-white hover:bg-gray-300 shadow-xl transform uppercase hover:scale-105 duration-300">
                CONTACT ME
              </button>
            </Link>
          </div>
          <div className="absolute bottom-10 flex flex-col space-y-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest">
              Let&apos;s Connect
            </p>
            <div className="flex flex-row space-x-4">
              <div className="w-8 h-8 relative">
                <a href="https://google.com">
                  <Image layout="fill" src="/linkedin.svg" />
                </a>
              </div>
              <div className="w-8 h-8 relative">
                <a href="https://github.com/PeytonCleveland">
                  <Image layout="fill" src="/github.svg" className="w-8 h-8" />
                </a>
              </div>
              <div className="w-8 h-8 relative">
                <a href="https://google.com">
                  <Image layout="fill" src="/slack.svg" className="w-8 h-8" />
                </a>
              </div>
              <div className="w-8 h-8 relative">
                <a href="https://discordapp.com/users/646023304087470101">
                  <Image layout="fill" src="/discord.svg" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-16 mt-2 space-y-3 absolute right-0 h-screen w-2/6 overflow-hidden whitespace-nowrap">
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-5">
            Pentesting & Malware
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-10">
            User Experience Design
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-20">
            CISCO Networking
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-30">
            Adobe XD & Sketch
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-40">
            Product Management
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-50">
            RASA & Dialogflow
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-60">
            IOS Development
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-70">
            Pytorch & Tensorflow
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-80">
            Version Control
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent opacity-90">
            Jest & CYPRESS
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent">
            React Development
          </h6>
          <h6 className="text-6xl outlined uppercase font-extrabold tracking-wider text-transparent">
            Cloud Engineering
          </h6>
        </div>
      </div>
    </div>
  );
}
