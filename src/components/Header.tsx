import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-center bg-transparent py-4 z-50">
      <div className="flex gap-6 md:gap-10 ">
        <a
          href="https://www.linkedin.com/in/nilacksha-dhanawardhane-722663316/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500 duration-300 text-sm md:text-base"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/NillyDhane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-300 transition-colors duration-300 text-sm md:text-base"
        >
          GitHub
        </a>
        <button
          href="https://www.youtube.com/channel/UCgHj9UaaNQXu4fe5Ko8LknA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-red-500 transition-colors duration-300 text-sm md:text-base"
        >
          YouTube
        </button>
      </div>
    </div>
  );
};

export default Header;
