import React from "react";

function Footer() {
  return (
    <div className="p-8 size-full">
      <div className="bg-black rounded-t-xl size-full p-8 gap-8">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <h2 className="font-bold md:text-6xl text-3xl text-center text-white">
            Ready to get started?
          </h2>
          <p className="font-semibold text-white text-center">
            Manage and protect all your passwordsin one place
          </p>
          <button className="bg-green-700 rounded-md w-[150px] text-white font-semibold h-[50px] ">
            Try for free
          </button>
          <span className="bg-green-900 rounded-full h-1 w-full"></span>
        </div>
        <footer className="flex md:flex-col flex-row">
          <div className="flex md:flex-row flex-col justify-around">
            <div className="flex md:text-ba text- md:flex-row flex-wrap md:items-center justify-center md:text-base w-full md:w-auto md:gap-4 gap-2 ">
              <p className="font-bold text-white">PassCode</p>
              <p className="font-semibold text-white">Privacy Policy</p>
              <p className="font-semibold text-white">Terms of Service</p>
              <p className="font-semibold text-white">Cookies</p>
            </div>
            <div className="flex md:text-ba text- md:flex-row flex-wrap md:items-center justify-center md:text-base w-full md:w-auto md:gap-4 gap-2">
              <p className="font-semibold text-white">Instagram</p>
              <span className="text-center bg-green-600 rounded-full h-1 w-1"></span>
              <p className="font-semibold text-white">Linkedin</p>
              <span className="text-center bg-green-600 rounded-full h-1 w-1"></span>
              <p className="font-semibold text-white">Facebook</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
