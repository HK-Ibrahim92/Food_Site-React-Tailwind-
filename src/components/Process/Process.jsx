import React from "react";
import Heading from "../Heading/Heading";
import stepsList from "./ProcessList";
const Process = () => {
  
  const stepRender = stepsList.map((steps) => {
    const NumberIcon = steps?.number;
    const Icon = steps?.icon;
    return (
      <div key={steps.id} className={`flex-1 px-5 ${steps.id % 2===0 ? "-mt-40": ""}`}>
        <span className=" flex justify-center items-center h-16 w-16 rounded-full bg-zinc-800 text-white outline-[3px] outline-offset-[6px] outline-zinc-800 outline-dashed">
          <NumberIcon className="text-5xl " />
        </span>
        <div className=" flex items-center justify-center gap-5 mt-5">
          {/* Icon Circle */}
          <div className="h-12 w-12 flex-shrink-0 bg-amber-600 text-white flex justify-center items-center rounded-full">
            <Icon className="text-2xl" />
          </div>
          <div>
            <h3 className=" text-2xl font-bold">{steps.title}</h3>
            <p className=" mt-2">{steps.para}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="max-w-350 m-auto px-10 mt-16">
      <div className=" w-fit">
        <Heading highlight="Our" text="Process" />
        <div className=" flex mt-50">{stepRender}</div>
      </div>
    </section>
  );
};

export default Process;
