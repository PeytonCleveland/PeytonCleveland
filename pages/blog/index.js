import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Posts from "../../_posts";

const Blog = () => {
  // Create state for active button
  const [active, setActive] = useState("All Categories");

  const router = useRouter();

  console.log("posts", Posts);

  const categories = [
    "All Categories",
    "Digital U",
    "Development",
    "AI/ML",
    "Education",
    "Music",
  ];

  return (
    <>
      <div className="container pt-44 mb-20">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-white opacity-60 uppercase font-extrabold tracking-wider">
            The Blog
          </h2>
          <h1 className="text-center text-white text-5xl poppins mt-5 uppercase font-bold tracking-wide antialiased">
            Lorem and ipsum
            <br /> dolor sit amet consectetor.
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="bg-white h-80 mr-8" style={{ width: "450px" }}></div>
          <div className="flex flex-col justify-between">
            <div>
              <h3
                className="text-white text-3xl poppins font-semibold"
                style={{ width: `425px` }}
              >
                How to get fired from your job in just 3 easy-to-follow steps
              </h3>
              <p
                className="text-white opacity-60 mt-4"
                style={{ width: `400px` }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <p className="text-white poppins mt-4 font-semibold">
              September 18, 2021
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-14">
        <div className="container flex flex-col">
          <div className="flex justify-center space-x-8 pb-14">
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    active === category
                      ? "border-2 border-gray-900 bg-white"
                      : "bg-transparent border-transparent"
                  } text-gray-800 font-bold tracking-wider text-sm py-2 px-4 uppercase border-2 hover:bg-gray-200 hover:text-gray-800`}
                  onClick={() => setActive(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-10 w-full">
            {
              // Map through posts
              Posts.map((post, index) => {
                // Remove post if category is not active
                if (post.category !== active && active !== "All Categories")
                  return null;
                return (
                  <Link href={post.link} passHref key={index}>
                    <a>
                      <div key={index} className="flex flex-col">
                        <img
                          src={post.image}
                          alt="post"
                          className="w-full h-64 object-cover"
                        />
                        <h3 className="text-gray-800 font-bold tracking-wider mt-4">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mt-4">{post.description}</p>
                        <p className="text-gray-600 mt-4">{post.date}</p>
                      </div>
                    </a>
                  </Link>
                );
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
