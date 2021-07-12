import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center overflow-y-hidden flex-col">
        <h1
          style={{ fontSize: `41rem`, color: `#171717` }}
          className="text-gray-800 font-bold error m-0 mt-10"
        >
          404
        </h1>
        <Link href="/">
          <a className="z-50 px-8 h-10 absolute bottom-56 text-black flex justify-center items-center text-sm font-extrabold tracking-widest bg-white hover:bg-gray-300 shadow-xl transform uppercase hover:scale-105 duration-300">
            TAKE ME HOME
          </a>
        </Link>
      </div>
      <div className="container flex h-screen justify-center items-center text-white relative">
        <Image
          src="/lost.gif"
          width="425px"
          height="260px"
          className="absolute opacity-60"
        />
        <div className="text-white absolute text-center space-y-3 pt-10">
          <h2 className="text-4xl font-bold tracking-wider leading-relaxed error">
            404 error – page not found <br /> 🤔
          </h2>
        </div>
      </div>
    </>
  );
}
