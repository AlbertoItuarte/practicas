import React from "react";
import { useState } from "react";

const navBarBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col px-20 py-12 gap-8 justify-center items-center">
      <div className=" h-[600px] w-full  bg-gradient-to-t from-[#e4ede8] to-transparent rounded-3xl shadow-sm shadow-black/50 py-8 ">
        <header className="flex sticky items-center text-lg justify-between text-black px-4 pb-8  md:px-32 bg-transparent ">
          <h2 className="text-lg w-52 font-bold">PassCode</h2>
          <button
            onClick={toggleMenu}
            className=" xl:hidden sticky items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-green-500 hover:bg-green-500 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear"
          >
            =
          </button>
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute top-12 right-0 bg-white shadow-lg rounded-md p-4 xl:flex xl:relative xl:top-0 xl:right-auto xl:bg-transparent xl:shadow-none xl:p-0 xl:z-auto items-center text-base gap-2`}
          >
            <ul className="flex flex-col xl:flex-row items-center text-base gap-2">
              <li className="p-2 cursor-pointer">Fratures</li>
              <li className="p-2 cursor-pointer">Picing</li>
              <li className="p-2 cursor-pointer">Company</li>
              <li className="p-2 cursor-pointer">Contact</li>
              <li>
                <button className="bg-black rounded-md h-10 p-3 font-semibold w-fit text-center text-white flex items-center justify-center">
                  Log in
                </button>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col gap-6 justify-center items-center mt-6">
          <button className="border-2 flex items-center justify-center px-4 text-center border-[#5b8b7b] bg-[#d9ebe5] rounded-md">
            <img className="size-5" src="vite.svg"></img> Secure system
          </button>
          <h2 className=" sm:text-3xl font-bold text-6xl text-center ">
            <span className="text-[#03815A]">Protect</span> and{" "}
            <span className="text-[#03815A]">strengthen</span> <br />
            your passwords
          </h2>
          <p className="font-semibold sm:text-md text-lg text-center">
            Mange and protect all your passwords in one place <br />
            teams, business and company.
          </p>
          <button className="bg-black rounded-md h-10 p-3 font-semibold w-fit text-center text-white flex items-center justify-center">
            Try for free <img className="size-5" src="vite.svg"></img>
          </button>
        </div>
      </div>
      <nav className="flex justify-center flex-row gap-3 py-2 px-4 ">
        <img className="w-[100px] h-[50px]" src="vite.svg"></img>
        <img className="w-[100px] h-[50px]" src="vite.svg"></img>
        <img className="w-[100px] h-[50px]" src="vite.svg"></img>
        <img className="w-[100px] h-[50px]" src="vite.svg"></img>
        <img className="w-[100px] h-[50px]" src="vite.svg"></img>
      </nav>
    </div>
  );
};

export default navBarBanner;
