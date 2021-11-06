const About = () => {
  return (
    <div className="container pt-44 flex flex-col">
      <h1 className="text-9xl uppercase poppins font-bold text-white">
        About{" "}
        <span className="poppins outlinedbright text-transparent">Me</span>
      </h1>
      <div className="flex flex-col items-end w-full mt-12">
        <hr className="h-0.5 bg-gray-500 w-1/2" />
        <p className="w-1/3 text-white text-lg poppins tracking-wider font-light my-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br />
          <br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <hr className="h-0.5 bg-gray-500 w-1/2" />
      </div>
    </div>
  );
};
export default About;
