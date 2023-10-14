import Tags from "./Tags";
import Link from "next/link";
import Date from "./Date";

const Card = ({ data, idx }: any) => {
  return (
    <div className="border flex flex-col relative overflow-hidden h-full bg-black flex-wrap justify-between w-full rounded-lg border-slate-700 hover:border-green-400">
      {idx === 0 && data.important && (
        <img
          alt={data.title}
          src={data.cover}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        className={`space-y-4 h-full flex flex-col justify-around p-5 ${
          idx === 0 &&
          data.important &&
          "relative  bg-gradient-to-r from-gray-900 to-gray-900/50"
        }`}
      >
        <div className="flex justify-between">
          <h1 className="title">{data?.title}</h1>
          {data.important && idx !== 0 && (
            <span className="whitespace-nowrap text-red-500 p-1 text-xs rounded-md">
              must-read
            </span>
          )}
        </div>

        {true && (
          <Link target="_blank" href={data?.link}>
            <div className="domain">{data.domain}</div>
          </Link>
        )}

        {idx !== 0 && (
          <div className="hidden md:block">
            <p className="text-sm text-slate-400 my-1">
              {/* {data?.excerpt.slice(0, 120)}... */}
            </p>
          </div>
        )}

        <div className="flex justify-between my-4">
          <div>
            <Tags tags={data.tags} />
          </div>
          {idx !== 0 && <Date data={data.lastUpdate} />}{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
