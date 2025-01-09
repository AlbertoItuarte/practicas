import React from "react";

const navBarBanner = () => {
  return (
    <div className="flex flex-col px-24 py-12 gap-8 justify-center items-center">
      <div className=" h-[600px] w-full  bg-gradient-to-t from-[#e4ede8] to-transparent rounded-3xl shadow-sm shadow-black/50 py-8 ">
        <header className="flex items-center text-lg justify-between text-black px-4 pb-4 md:px-32 bg-transparent ">
          <h2 className="text-lg w-52 font-bold">PassCode</h2>
          <ul className="hiden xl:flex items-center text-base gap-8 ">
            <li className="p-3 cursor-pointer">Fratures</li>
            <li className="p-3 cursor-pointer">Picing</li>
            <li className="p-3 cursor-pointer">Company</li>
            <li className="p-3 cursor-pointer">Contact</li>
            <li>
              <button className="bg-black rounded-md h-10 p-3 font-semibold w-fit text-center text-white flex items-center justify-center">
                Log in
              </button>
            </li>
          </ul>
        </header>
        <div className="flex flex-col gap-8 justify-center items-center mt-6">
          <button className="border-2 border-[#5b8b7b] bg-[#d9ebe5] rounded-md px-2">
            Secure system
          </button>
          <h2 className="font-bold text-6xl text-center ">
            <span className="text-[#03815A]">Protect</span> and{" "}
            <span className="text-[#03815A]">strengthen</span> <br />
            your passwords
          </h2>
          <p className="font-semibold text-lg text-center">
            Mange and protect all your passwords in one place <br />
            teams, business and company.
          </p>
          <button className="bg-black rounded-md h-10 p-3 font-semibold w-fit text-center text-white flex items-center justify-center">
            Try for free <img className="size-5" src="vite.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default navBarBanner;
