'use client';
import { useState } from 'react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-white text-black w-full py-2 px-4 mt-14 relative">
      <button
        onClick={() => setVisible(false)}
        className="cursor-pointer absolute top-6 -translate-y-1/2 right-2 text-white text-lg font-bold hover:text-red-200 focus:outline-none"
        aria-label="Dismiss announcement"
      >
        ✖️
      </button>
      <div className="max-w-6xl mx-auto text-center font-oswald font-semibold text-sm sm:text-base md:text-lg leading-relaxed mt-8">
        🚨 New batch for <span className="underline underline-offset-2">CDS / AFCAT / NDA</span> starts from <strong>18th August 2025</strong> & SSB batch starts <strong className='underline'>every Monday</strong> 🚨
      </div>
    </div>
  );
}