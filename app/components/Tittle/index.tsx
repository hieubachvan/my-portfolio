import React from "react";
import Divider from "../Divider";

const Title = ({ content }: { content: string }) => {
  return (
    <div>
      <p className="text-6xl font-extrabold">{content}</p>
      <Divider />
    </div>
  );
};

export default Title;
