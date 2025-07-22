import Image from "next/image";

const HeroSection = () => (
  <section className="relative overflow-hidden  px-4 py-16 sm:py-20 text-center h-[500px] sm:h-[300px] lg:h-[550px]">
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
    </div>
  </section>
);

export default HeroSection;