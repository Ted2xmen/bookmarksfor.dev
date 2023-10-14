import Link from "next/link";

const Book = ({ data, idx }: any) => {
  return (
    <div className="border h-full flex space-x-2  bg-black  w-full rounded-lg border-slate-700 hover:border-yellow-400">
      <div className="flex">
        {data.cover ? (
          <img
            alt={data.title}
            src={data.cover}
            className="object-cover w-72 m-1 rounded-lg"
          />
        ) : null}
      </div>

      <div className="p-2 flex flex-col justify-around mt-4 space-y-2">
        <div>
          <h1 className="title">{data?.title}</h1>
          <h2 className="text-end mt-5 text-xs"> {data?.domain} </h2>
        </div>

        <Link target="_blank" href={data?.link}>
          <div className="text-sm">
            Buy on <span className="text-yellow-500">Amazon</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Book;
