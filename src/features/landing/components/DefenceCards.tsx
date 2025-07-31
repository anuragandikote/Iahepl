import Image from "next/image";

type DefenceCardProps = {
  title: string;
  image: string;
};

const DefenceCard = ({ title, image }: DefenceCardProps) => {
  return (
    <div className="relative group w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg transform transition duration-100 hover:scale-105 hover:shadow-[0_10px_40px_rgba(135,13,7,0.5)]">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      {/* Floating Title */}
      <div className="absolute top-6 left-6 z-20">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-oswald drop-shadow-lg">
          {title}
        </h3>
      </div>

      {/* Glass Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/10 backdrop-blur-md rounded-t-2xl z-20">
        <p className="text-white text-sm sm:text-base text-center">
          Discover powerful resources and coaching for your Defence journey.
        </p>

        {/* <div className="mt-4 flex justify-center">
          <button className="px-5 py-2 text-sm font-semibold text-white bg-[#870d07] hover:bg-[#6f0a05] rounded-full transition-all duration-300 shadow-md hover:shadow-xl">
            Explore →
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DefenceCard;