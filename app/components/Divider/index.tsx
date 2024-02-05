import clsx from "clsx";
import React from "react";

const Divider = ({ center }: { center?: boolean }) => {
  return (
    <div
      className={clsx(
        "flex items-center mt-2 mb-4",
        center && "justify-center"
      )}
    >
      <div className={clsx(`w-3 h-3 bg-slate-700 rounded-full`)}></div>
      <div className="w-1/4 h-1 bg-slate-700"></div>
    </div>
  );
};

export default Divider;
