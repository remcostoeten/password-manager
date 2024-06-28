import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type LegendItem = {
  color: string;
  label: string;
  description: string;
};

type LegendBarProps = {
  items: LegendItem[];
};

const LegendBar = ({ items }: LegendBarProps) => {
  if (!items) {
    return null;
  }

  return (
    <div className="space-y-2 flex flex-wrap items-center px-1.5 border-b pb-4">
      <TooltipProvider>
        {items.map((item, index) => (
          <div key={index} className="mr-5 flex items-center">
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="w-5 h-5 rounded-full cursor-pointer"
                  style={{
                    backgroundColor: item.color,
                    border: "1px solid #  ",
                  }}
                ></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.description}</p>
              </TooltipContent>
            </Tooltip>
            <span className="ml-2">{item.label}</span>
          </div>
        ))}
        <Tooltip>
          <div className="border border-1 text-xl text-center rounded-full w-8 h-8 grid place-items-center bg-zinc-200 shadow-xl">
            <TooltipTrigger>❓</TooltipTrigger>
            <TooltipContent>
              <p>
                These are "clients" fetched from an API.
                <br /> The origin of this project is a coding assignment for a
                job interview.
                <br /> This Legend bar has nothing to do with the tool itself
                and can be removed.
              </p>
            </TooltipContent>
          </div>{" "}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default LegendBar;
