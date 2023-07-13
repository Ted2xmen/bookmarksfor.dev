import moment from "moment";

const Card = ({ data, idx }: any) => {
  return (
    <div className="border p-6 bg-black  flex-wrap justify-center w-full h-full overflow-hidden rounded-lg border-slate-700 hover:border-green-400">
      <div className="space-y-4">
        <h1 className="title">{data?.title}</h1>
        <div className="domain">{data.domain}</div>
        {/* <Link target="_blank" href={data?.link}>
        
        </Link> */}

        {idx !== 0 && (
          <div className="hidden md:block">
            <p className="text-sm text-slate-400 my-1">
              {data.excerpt.slice(0, 120)}...
            </p>
          </div>
        )}

        <div className="flex justify-between my-4">
          <div>
            {data.tags.map((tag: string, key: number) => {
              return (
                <span
                  className="border border-green-500  text-slate-300 cursor-pointer text-xs p-2 rounded-md m-1"
                  key={key}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <div className="text-xs text-slate-500">
            {moment(data.lastUpdate).format("dddd / DD MMMM YYYY ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
