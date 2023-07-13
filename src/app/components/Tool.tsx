import React from "react";

const Tool = ({ data, idx }: any) => {
  return (
    <div className="border bg-black justify-center w-full h-full overflow-hidden rounded-lg border-slate-700 hover:border-green-400">
      <img
        alt={data.title}
        src={data.cover}
        className="h-44 w-full object-cover"
      />

      <div className="bg-black h-full p-4 sm:p-6">
        {/* <Link target="_blank" href={data?.link}>
        
        </Link> */}
        <div className="domain">{data.domain}</div>

        <h1 className="title mt-2">{data.title} </h1>
      </div>
    </div>
  );
};

export default Tool;
