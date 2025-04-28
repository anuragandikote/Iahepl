import React from 'react';

type ProgramHeaderProps = {
  title: string;
};

export default function ProgramHeader({ title }: ProgramHeaderProps) {
  return (
    <div className="bg-black px-29 h-25 flex flex-col">
      <div className="py-2 mt-2">
        <h1 className="text-sm flex items-center gap-2">
          <span className="text-red-800">Home</span>
          <span className="text-white">›</span>
          <span className="text-gray-400 text-md">{title}</span>
        </h1>
      </div>
      <div className="text-3xl text-white">{title}</div>
      <div className="h-[5px] bg-red-800 mt-2 w-80"></div>
    </div>
  );
}