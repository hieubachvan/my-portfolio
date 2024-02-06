import clsx from "clsx";
import React from "react";

interface BoxInfomationsProps {
  title: string;
  arrayContent: {
    content: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}

const BoxInfomations: React.FC<BoxInfomationsProps> = ({
  title,
  arrayContent,
  className,
}) => {
  return (
    <div>
      <p className={clsx("font-bold text-2xl text-white ", className)}>
        {title}
      </p>
      {arrayContent.map((content, index) => (
        <div className="flex gap-2 items-center max-w-60" key={index}>
          {content.icon}
          <p className="text-gray-400">{content.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxInfomations;
