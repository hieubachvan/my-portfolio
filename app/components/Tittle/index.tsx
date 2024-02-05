import React from "react";
import Divider from "../Divider";

const Title = ({ content, center }: { content: string; center?: boolean }) => {
  return (
    <div className={center ? "text-center" : ""}>
      <div>
        <p className="text-6xl font-extrabold">{content}</p>
        <Divider center={center} />
      </div>
    </div>
  );
};

export default Title;
