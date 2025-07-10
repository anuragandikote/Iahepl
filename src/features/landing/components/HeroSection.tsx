import Image from "next/image";

const HeroSection = () => (
  <section className="relative overflow-hidden rounded-none sm:rounded-3xl sm:rounded-b-4xl mx-4 sm:mx-10 lg:mx-40 py-16 sm:py-20 text-center h-[250px] sm:h-[300px] lg:h-[400px]">
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
    <div className="relative z-10">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gray-900 px-4">
        NDA, CDS, AFCAT, SSB Coaching in Bharat
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-4 text-black mx-auto max-w-xl px-4">
        Real Army Officers as Mentors · Hostel Facility · Physical & Written Prep
      </p>
    </div>
  </section>
);

export default HeroSection;