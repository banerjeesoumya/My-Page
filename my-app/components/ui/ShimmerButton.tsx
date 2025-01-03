/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick, // Handle the click event
  others
}: {
  title: string;
  icon: React.ReactElement | React.ReactNode;
  position: string;
  handleClick?: () => void; // Optional prop to handle click
  others?: string;
}) => {
  return (
    <button
      onClick={handleClick} // Attach handleClick function here
      className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      {position === 'left' && icon}
      {title}
      {position === 'right' && icon}
    </button>
  );
};
