import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="bg-gradient-to-r p-5 py-16 m-2 rounded-lg from-green-100 via-slate-100 to-slate-300">
        <h1 className="text-center text-4xl font-extrabold tracking-normal font-sans text-slate-900 lg:text-7xl">
          bookmarksfor.dev
        </h1>
      </div>

      <div>
        <h3 className="text-center text-md md:text-lg font-bold tracking-normal font-sans text-slate-100 lg:text-2xl">
          articles and tools for javascript developers!
        </h3>
      </div>
    </div>
  );
};

export default Hero;
