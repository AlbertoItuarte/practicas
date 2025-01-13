import React, { useState } from "react";

const banner = () => {
  const [open, setOpen] = useState(false);

  function createDropdownList() {
    setOpen(!open);
    console.log(open);
  }

  return (
    <div className="flex flex-col justify-around p-8 gap-4 ">
      <div className="flex flex-col md:h-[600px] md:min-h-fit h-fit size-full bg-gradient-to-t from-[#e4ede8] to-transparent rounded-2xl p-8">
        <header className="flex justify-between items-center px-8 py-4 flex-row">
          <h1 className="font-bold">PassCode</h1>
          <div className="flex flex-wrap justify-center items-center">
            <button
              onClick={createDropdownList}
              className="md:hidden h-[50px] w-[50px] hover:border-b-green-500"
            >
              ==
            </button>
            <div
              className={`flex flex-row w-fit justify-between md:top-0 top-20 right-[900px] md:bg-none  bg-white ${
                open ? "block" : "hidden md:block"
              }`}
            >
              <ul className="flex flex-col md:flex-row md:relative h-fit w-full absolute gap-4 items-center">
                <li className="p-2 cursor-pointer">Fratures</li>
                <li className="p-2 cursor-pointer">Picing</li>
                <li className="p-2 cursor-pointer">Company</li>
                <li className="p-2 cursor-pointer">Contact</li>
                <li>
                  <button className="bg-black h-[50px] font-semibold text-white rounded-md px-8">
                    Log in
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="flex size-full gap-8 flex-col md:justify-center items-center">
          <h2 className="font-bold xl:text-6xl md:text-4xl text-center text-3xl ">
            <span className="text-green-500">Protect</span> and{" "}
            <span className="text-green-500">strengthen</span> <br /> your
            passwords
          </h2>
          <p className="font-semibold md:text-base text-center text-md ">
            Mange and protect all your passwords in one place
            <br /> teams, business and company.
          </p>
          <button className="bg-black w-full md:w-auto h-[50px] font-semibold text-white rounded-md px-8">
            Try for free
          </button>
        </div>
      </div>
      <div className="flex m-1 w-full justify-center max-h-fit md:flex-row flex-wrap gap-3 py-2 px-4">
        <img className="w-[100px] h-[50px]" src="vite.svg" alt="Mark Image" />
        <img className="w-[100px] h-[50px]" src="vite.svg" alt="Mark Image" />
        <img className="w-[100px] h-[50px]" src="vite.svg" alt="Mark Image" />
        <img className="w-[100px] h-[50px]" src="vite.svg" alt="Mark Image" />
        <img className="w-[100px] h-[50px]" src="vite.svg" alt="Mark Image" />
      </div>
    </div>
  );
};

export default banner;
