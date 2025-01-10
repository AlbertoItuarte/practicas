const Cards = () => {
  return (
    <div className="pt-10 ">
      <div className="px-20">
        <div className="flex w-full justify-between items-center pb-6">
          <p className="text-[#3A9676] text-xl">Our solutions</p>
          <p className="text-xl">Explore more</p>
        </div>
        <div className="border-b-2 border-[#3A9676] w-full mb-6"></div>
        <div className="flex lg:flex-row xs:flex-col justify-between items-center pb-10">
          <h2 className="font-bold xs:text-3xl xs:self-center sm:text-4xl md:self-auto md:text-4xl lg:text-4xl 2xl:text-5xl">
            Tailored Security Solutions
          </h2>
          <p className="xl:text-xl xs:self-start sm:w-6/12 xs:pt-6 md:pt-6 lg:pt-0 md:w-5/12">
            Stay secure and efficient with solutions built for your unique needs
          </p>
        </div>
        <div className="grid md:grid-cols-1 xs:-ml-6 xs:-mr-6 sm:mr-0 sm:ml-0 xs:gap-6 lg:gap-10 lg:grid-cols-3 pb-20 md:pt-10 lg:pt-20">
          <div className="flex xs:flex-col sm:flex-row lg:flex-col items-center bg-gray-100 xs:p-4 sm:p-10 rounded-xl">
            <img
              className="w-52 xs:mb-6 sm:mb-0 lg:mb-10"
              src="Card1.png"
              alt=""
            />
            <div className="sm:pl-14">
              <h2 className="font-bold xs:text-3xl sm:text-2xl md:self-auto md:text-4xl lg:text-3xl 2xl:text-5xl ">
                Sharing passwords securely
              </h2>
              <p className="2xl:text-2xl pt-6 md:text-2xl py-6 ">
                Minimize cybersecurity threats to your team and bussisness by
                simplifying and streamlining secure password sharing.
              </p>
            </div>
          </div>
          <div className="flex  xs:flex-col sm:flex-row lg:flex-col items-center bg-gray-100 xs:p-4 sm:p-10 rounded-xl">
            <img
              className="w-52 xs:mb-6 sm:mb-0 lg:mb-6"
              src="Card2.png"
              alt=""
            />
            <div className="sm:pl-14">
              <h2 className="font-bold xs:text-3xl sm:text-2xl md:text-4xl lg:text-3xl 2xl:text-5xl ">
                Synchronisation between devices
              </h2>
              <p className="2xl:text-2xl pt-6 md:text-2xl py-6 ">
                Save a login on one device and access it on another for a
                seamless expierence across al your devices.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-col sm:flex-row lg:flex-col items-center bg-gray-100 xs:p-4 sm:p-10 rounded-xl">
            <img
              className="w-52 xs:mb-6 sm:mb-0 lg:mb-9"
              src="Card3.png"
              alt=""
            />
            <div className="sm:pl-14">
              {" "}
              <h2 className="font-bold xs:text-3xl sm:text-2xl sm:w-full md:text-4xl lg:w-1/2 lg:text-3xl 2xl:text-5xl self-start">
                Seamles integrations
              </h2>
              <p className="2xl:text-2xl pt-6 md:text-2xl py-6 ">
                Integratate your existing systems through SSO (single sign-on),
                directory services, or robust APIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
