const Cards = () => {
  return (
    <div className=" pt-10 ">
      <div className="px-20">
        <div className="flex w-full justify-between items-center pb-6">
          <p className="text-[#3A9676] text-xl">Our solutions</p>
          <p className="text-xl">Explore more</p>
        </div>
        <div className="border-b-2 border-[#3A9676] w-full mb-6"></div>
        <div className="flex  justify-between items-center pb-10">
          <h2 className="font-bold text-5xl">Tailored Security Solutions</h2>
          <p className="text-xl w-3/12">
            Stay secure and efficient with solutions built for your unique needs
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 pt-20">
          <div className="flex flex-col items-center bg-gray-100 p-10 rounded-xl">
            <img className="w-52 mb-10" src="Card1.png" alt="" />
            <h2 className="font-bold text-5xl">Sharing passwords securely</h2>
            <p className="text-2xl pt-6 ">
              Minimize cybersecurity threats to your team and bussisness by
              simplifying and streamlining secure password sharing.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-10 rounded-xl">
            <img className="w-52 mb-6" src="Card2.png" alt="" />
            <h2 className="font-bold text-5xl">
              Synchronisation between devices
            </h2>
            <p className="text-2xl pt-6 ">
              Save a login on one device and access it on another for a seamless
              expierence across al your devices.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-10 rounded-xl">
            <img className="w-52 mb-9" src="Card3.png" alt="" />
            <h2 className="font-bold text-5xl w-1/2 self-start">
              Seamles integrations
            </h2>
            <p className="text-2xl pt-6 ">
              Integratate your existing systems through SSO (single sign-on),
              directory services, or robust APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
