import React from 'react'
import moment from 'moment';

const Date = ({data}: any) => {
  return (
    <div className="text-xs whitespace-nowrap hidden md:flex text-slate-600">
      {moment(data?.lastUpdate).format("DD MMM YYYY")}
    </div>
  );
}

export default Date