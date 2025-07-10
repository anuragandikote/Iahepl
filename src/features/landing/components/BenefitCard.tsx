import Image from "next/image";

type BenefitCardProps = {
  title: string;
  image: string;
};

const BenefitCard = ({ title, image }: BenefitCardProps) => (
  <div className="rounded-3xl p-4 flex flex-col shadow-2xl bg-white overflow-hidden min-h-[15rem] md:min-h-[24rem] transition-transform hover:scale-[1.015]">
    <div className="relative w-full h-48 sm:h-32 md:h-64 mb-4 rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        unoptimized
        priority
        className="object-cover"
      />
    </div>
    
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center px-2">
      {title}
    </h3>
  </div>
);

export default BenefitCard;