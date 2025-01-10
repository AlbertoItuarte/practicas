import React from "react";

const CardPlan = () => {
  return (
    <div className="px-20 py-12">
      <div className="flex flex-col rounded-xl  bg-[#e9f3eb] size-full gap-4 items-center justify-center ">
        <div className="flex flex-row p-8 size-full  items-center justify-center sm:flex-col ">
          <h2 className="font-bold text-start text-3xl mr-[500px]">
            Solutions for everyone
          </h2>
          <p className="font-semibold text-md">
            We are here to help you, choose the plan that suits you <br /> best.
            Your passwords will be safe at all times.
          </p>
        </div>

        <div className="flex  flex-row gap-4 p-8 h-[500px] ">
          <div className="bg-white rounded-xl  gap-4 p-8  flex flex-col">
            <h3 className="flex font-bold text-1xl">Teams</h3>
            <p className="font-semibold">
              Rugged protection for growing equipment.
            </p>
            <h2 className=" before:content-['$'] font-bold text-4xl">4</h2>
            <button className="flex justify-center items-center py-6 text-center bg-black size-full h-[30px]  rounded-md text-white">
              Try this plan <img className="size-5" src="vite.svg"></img>
            </button>
            <ul>
              <li>Proyected data transfer</li>
              <li>Activity log tracking</li>
              <li>Directory syncronization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
