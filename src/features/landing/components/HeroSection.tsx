"use client";
import Image from "next/image";

const HeroSection = () => (
  <section className="relative overflow-hidden rounded-4xl mx-40 py-20 sm:px-8 text-center h-[300px] rounded-b-4xl">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/india-gate-parade.jpg"
        alt="India Gate Parade"
        fill
        className="object-cover w-full h-full"
      />
    </div>
    <div className="relative z-10">
      <h1 className="text-4xl sm:text-5xl font-oswald font-bold text-gray-900">
        NDA, CDS, AFCAT, SSB Coaching in Bharat
      </h1>
      <p className="text-lg font-bold mt-4 text-black mx-auto max-w-2xl">
        Real Army Officers as Mentors · Hostel Facility · Physical & Written Prep
      </p>
    </div>
  </section>
);

export default HeroSection;