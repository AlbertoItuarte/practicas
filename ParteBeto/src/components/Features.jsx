const Features = () => {
  return (
    <div className="xs:pt-32 sm:-pt-20 md:pt-0">
      <div className="flex  justify-center xs:flex-col xs:pt-10 sm:px-10 md:pt-20 md:px-20 lg:flex-row w-full">
        <div className="flex flex-col xs:items-center xs:justify-center lg:items-start lg:justify-normal w-full">
          <p className="text-[#3A9676] text-lg self-start">Our features</p>
          <h2 className="xs:text-4xl xs:w-8/12 font-semibold xs:pt-4 md:pt-6 lg:w-8/12 lg:text-5xl xl:w-full 2xl:w-8/12 lg:self-start">
            Secure solutions to protect you
          </h2>
        </div>
        <div className="flex xs:flex-col xs:items-center xs:pt-14 md:space-x-10 md:flex-row w-full lg:pt-4">
          <div className="xs:w-8/12 md:w-6/12 ">
            <div className="flex flex-row hover:scale-105 cursor-pointer">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col w-full pl-3 ">
                <h3 className="font-bold text-3xl ">
                  Easy incorporation with directory Synchronisation
                </h3>
                <p className="pt-6 pb-9 text-lg">
                  Streamline user onboarding whit SCIM support or Directory
                  Connector to sync with your existing directory service
                </p>
              </div>
            </div>
            <div className="flex flex-row hover:scale-105 cursor-pointer">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl ">
                  Cloud Synchronisation or self-hosting
                </h3>
                <p className="pt-6 pb-9 text-lg">
                  Get started quickly with our Cloud, or takefull control by
                  opting for self- hosting
                </p>
              </div>
            </div>
            <div className="flex flex-row hover:scale-105 cursor-pointer">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl sm:self-start">
                  Centralise security woth policies
                </h3>
                <p className="pt-6 pb-9 text-lg">
                  Direct the user experiences by defining policies and refining
                  password requirements for all users
                </p>
              </div>
            </div>
          </div>
          <div className=" xs:w-8/12 md:w-6/12">
            <div className="flex flex-row hover:scale-105 cursor-pointer">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl w-full md:w-7/12 lg:w-full 2xl:w-7/12 sm:self-start">
                  Cross-platform accesibility
                </h3>
                <p className="pt-6 pb-9 text-lg">
                  Acces your vault data anytime, anywhere, on any device. Stay
                  secure and conected from any location.
                </p>
              </div>
            </div>
            <div className="flex flex-row hover:scale-105 cursor-pointer">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl ">
                  Open source security and transparency
                </h3>
                <p className="pt-6 pb-9 text-lg">
                  We undergoes regular audits and enhancements to ensure
                  top-notch security.
                </p>
              </div>
            </div>
            <div className="flex flex-row hover:scale-105 cursor-pointer">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl pl-3 sm:self-start">
                  Zero-knowledge encryptation
                </h3>
                <p className="pt-6 pb-9 text-lg">
                  The one-way hash ensures the security of your data, prevening
                  it from being sotred or trancelularited
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
