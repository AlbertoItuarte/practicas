import React from "react";

const CardPlan = () => {
  return (
    <div className="p-8 size-full ">
      <div className="bg-[#e9f3eb] flex flex-col rounded-2xl size-full">
        <div className="flex flex-col px-16 justify-around pt-8">
          <p className=" text-[#3A9676] text-desktop">Our features</p>
          <span className="bg-gray-500 bg-opacity-50 h-1 w-full rounded-sm"></span>
        </div>
        <div className="flex md:flex-row md:space-x-8 md:justify-between items-center flex-col pt-8 px-16">
          <h2 className="font-bold text-3xl md:text-start w-full text-center">
            Solutions for everyone
          </h2>
          <p className="font-semibold md:text-start p-4 w-full text-center">
            We are here to help you, choose the plan that suits you <br /> best.
            Your passwords will be safe at all times.
          </p>
        </div>
        {/* Area of plan cards
         */}
        <div className="flex justify-center items-center p-8 md:flex-row flex-col gap-8">
          <div className="flex flex-col bg-white md:text-start text-center justify-center gap-4 items-center rounded-xl p-8 h-[640px] w-[360px]">
            <img src="vite.svg"></img>
            <h2 className="font-bold text-3xl">Teams</h2>
            <p className="font-semibold">
              Rugged protection for growing
              <br /> equipmet.
            </p>
            <h2 className="before:content-['$'] font-bold text-3xl">4</h2>
            <div className="size-full flex justify-center">
              <button className="bg-black font-semibold text-white size-full h-[50px] rounded-md ">
                Try this plan
              </button>
            </div>
            <p className="font-semibold">Business-grade policy control</p>
            <p className="font-semibold">Activity log tracking</p>
            <p className="font-semibold">Directory synchronization</p>
          </div>

          <div className="flex flex-col bg-white md:text-start text-center justify-center gap-4 items-center rounded-xl p-8 h-[640px] w-[360px]">
            <img src="vite.svg"></img>
            <h2 className="font-bold text-3xl">Businesses</h2>
            <p className="font-semibold">
              Specialized tools for enterprise-scale <br /> operations.
            </p>
            <h2 className="before:content-['$'] font-bold text-3xl">12</h2>
            <div className="size-full flex justify-center">
              <button className="bg-black font-semibold text-white size-full h-[50px] rounded-md ">
                Try this plan
              </button>
            </div>
            <p className="font-semibold">Business-grade policy control</p>
            <p className="font-semibold">Seamless password-free login</p>
            <p className="font-semibold">
              Streamlined account recovery options
            </p>
          </div>

          <div className="flex flex-col bg-white md:text-start text-center justify-center gap-4 items-center rounded-xl p-8 h-[640px] w-[360px]">
            <img src="vite.svg"></img>
            <h2 className="font-bold text-3xl">Companies</h2>
            <p className="font-semibold">
              Disigned for bussines with large <br /> teams requiring advanced
              freatures.
            </p>
            <h2 className="before:content-['$'] font-bold text-3xl">26</h2>
            <div className="size-full flex justify-center">
              <button className="bg-black font-semibold text-white size-full h-[50px] rounded-md ">
                Try this plan
              </button>
            </div>
            <p className="font-semibold">Mitigating cybersecurity thereats</p>
            <p className="font-semibold">Boosting efficiency</p>
            <p className="font-semibold">Enffortless integration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
