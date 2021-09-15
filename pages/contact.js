import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
        <meta
          name="description"
          content="Want to get in touch? Send me a message and I'll reach out shortly!"
        />
        <meta name="author" content="Peyton Cleveland" />
        <meta
          name="keywords"
          content="peyton,cleveland,digital,developer,education,ux,design,serverless,cloud,university"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peytoncleveland.com/" />
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div className="h-full w-full flex flex-col justify-end">
          <h1 className="text-white font-black tracking-wider text-7xl mb-3">
            CONTACT <span className="outlinedbright text-deep-gray">ME</span>
          </h1>
          <p className="text-lg font-normal text-gray-300 w-7/12 mb-6">
            Interested in having a chat? Fill out the form below and I&#39;ll
            reach out to you shortly.
          </p>
          <div
            style={{ backgroundColor: `#191919`, width: `920px` }}
            className="h-3/5 -ml-20 border-gray-400 border-r-2 border-t-2"
          >
            <form className="ml-20 pt-10">
              <div className="flex flex-row space-x-12">
                <div style={{ width: `345px` }} className="flex flex-col">
                  <label className="text-white font-bold uppercase mb-1 tracking-wider">
                    Full Name
                  </label>
                  <input
                    className="py-2 pl-2 placeholder-gray-400 font-base bg-gray-300"
                    type="text"
                    placeholder="Jane Doe"
                  />
                </div>
                <div style={{ width: `345px` }} className="flex flex-col">
                  <label className="text-white font-bold uppercase mb-1 tracking-wider">
                    Email Address
                  </label>
                  <input
                    className="py-2 pl-2 placeholder-gray-400 font-base bg-gray-300"
                    type="email"
                    placeholder="Email@example.com"
                  />
                </div>
              </div>
              <div style={{ width: `738px` }} className="flex flex-col mt-8">
                <label className="text-white font-bold uppercase mb-1">
                  MESSAGE
                </label>
                <textarea
                  className="py-2 h-44 pl-2 placeholder-gray-400 font-base bg-gray-300 resize-none"
                  placeholder="Enter your message here..."
                />
              </div>
              <div
                style={{ paddingRight: `98px` }}
                className="w-full flex flex-row justify-end"
              >
                <Link href="/sign-up">
                  <button
                    style={{ backgroundColor: `#191919` }}
                    className="mt-10 h-12 w-full bg-opacity-70 hover:bg-deep-gray hover:bg-opacity-50 px-8 border-2 text-white flex justify-center items-center text-sm font-extrabold transform uppercase hover:scale-105 duration-300 tracking-widest"
                  >
                    SUBMIT
                  </button>
                </Link>
              </div>
            </form>
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
