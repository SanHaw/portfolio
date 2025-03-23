import clsx from "clsx";
import React from "react";

type SquareProps = {
  /** Tailwind class like 'bg-blue1' */
  color?: string;
  /** Optional children content */
  children?: React.ReactNode;
};

const Square: React.FC<SquareProps> = ({
  color = "bg-gray-300",
  children,
}) => {
  return (
    <div
      className={clsx(
        "w-full aspect-square rounded-lg flex items-center justify-center",
        color
      )}
    >
      <p className="text-center text-white text-sm font-medium">
        {children}
      </p>
    </div>
  );
};

export default Square;
