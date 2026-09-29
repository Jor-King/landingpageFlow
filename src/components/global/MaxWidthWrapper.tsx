import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const MaxWidthWrapper: React.FC<Props> = ({ className, id, children }) => {
  return (
    <div
      id={id}
      className={cn(
        "h-full mx-auto w-full max-w-full md:max-w-7xl px-4 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
