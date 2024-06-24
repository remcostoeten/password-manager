import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

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
    <div className="flex items-center px-1.5 border-b pb-4">
      <TooltipProvider>
        {items.map((item, index) => (
          <div key={index} className="mr-5 flex items-center">
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="w-5 h-5 rounded-full cursor-pointer"
                  style={{
                    backgroundColor: item.color,
                    border: '1px solid #  ',
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
      </TooltipProvider>
    </div>
  );
};

export default LegendBar;
