'use client'
import Image from "next/image";
import DelayedModal, { DelayedModalHandle } from "@/components/delayedModal";
import { useRef } from "react";

const HeroSection = () => {

  const modalRef = useRef<DelayedModalHandle | null>(null);

  const handleJoinClick = () => {
    modalRef.current?.openModal();
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 text-center h-[500px] sm:h-[300px] lg:h-[550px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/india-gate-parade.jpg"
          alt="India Gate Parade"
          fill
          unoptimized
          priority
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 -mt-16 md:-mt-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#870d07] px-4 font-oswald">
          NDA, CDS, AFCAT, SSB Coaching in Bharat
        </h1>
        <p className="text-sm md:text-2xl mt-5 font-bold text-[#870d07] mx-auto px-4 font-league-spartan">
          Real Army Officers as Mentors · Hostel Facility · Physical & Written Prep
        </p>
        <button onClick={handleJoinClick} className="mt-6 mx-4 bg-black hover:bg-[#870d07] text-white text-sm md:text-lg font-oswald font-bold px-6 py-3 rounded-md uppercase shadow-lg tracking-wider border-b-4 border-[#870d07] duration-100 transition cursor-pointer">
          Got the Guts to Wear the Uniform? <br /> Join Us Now!
        </button>
        <DelayedModal ref={modalRef} />
      </div>
    </section>
  )
};

export default HeroSection;