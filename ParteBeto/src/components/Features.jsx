const Features = () => {
  return (
    <div className="">
      <div className="flex xs:flex-col xs:pt-10 xs:pl-10 sm:px-10 laptop:pt-20 laptop:px-20 desktop:flex-row w-full">
        <div className="felx flex-col w-full">
          <p className="text-[#3A9676] text-desktop">Our features</p>
          <h2 className="text-5xl font-semibold xs:pl-20 xs:pt-4 laptop:pt-6 desktop:w-full 2xl:w-6/12">
            Secure solutions to protect you
          </h2>
        </div>
        <div className="flex xs:flex-col xs:items-center xs:pt-14 laptop:space-x-10 laptop:flex-row w-full desktop:pt-4">
          <div className="xs:w-8/12 laptop:w-6/12 ">
            <div className="flex flex-row">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col w-full pl-3 ">
                <h3 className="font-bold text-3xl ">
                  Easy incorporation with directory Synchronisation
                </h3>
                <p className="pt-6 pb-9 text-desktop">
                  Streamline user onboarding whit SCIM support or Directory
                  Connector to sync with your existing directory service
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl ">
                  Cloud Synchronisation or self-hosting
                </h3>
                <p className="pt-6 pb-9 text-desktop">
                  Get started quickly with our Cloud, or takefull control by
                  opting for self- hosting
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl sm:self-start">
                  Centralise security woth policies
                </h3>
                <p className="pt-6 pb-9 text-desktop">
                  Direct the user experiences by defining policies and refining
                  password requirements for all users
                </p>
              </div>
            </div>
          </div>
          <div className=" xs:w-8/12 laptop:w-6/12">
            <div className="flex flex-row">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl w-full laptop:w-7/12 desktop:w-full 2xl:w-7/12 sm:self-start">
                  Cross-platform accesibility
                </h3>
                <p className="pt-6 pb-9 text-desktop">
                  Acces your vault data anytime, anywhere, on any device. Stay
                  secure and conected from any location.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl ">
                  Open source security and transparency
                </h3>
                <p className="pt-6 pb-9 text-desktop">
                  We undergoes regular audits and enhancements to ensure
                  top-notch security.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="border border-[#3A9676] mt-2 h-8"></div>
              <div className="flex flex-col pl-3 ">
                <h3 className="font-bold text-3xl pl-3 sm:self-start">
                  Zero-knowledge encryptation
                </h3>
                <p className="pt-6 pb-9 text-desktop">
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
