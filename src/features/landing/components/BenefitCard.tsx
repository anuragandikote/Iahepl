type BenefitCardProps = {
  title: string;
  image: string;
};

const BenefitCard = ({ title, image }: BenefitCardProps) => (
  <div className="rounded-4xl card-with-gradient-border p-4 flex flex-col shadow-2xl min-h-[22rem]">
    <img
      src={image}
      alt={title}
      className="rounded-xl object-cover mb-4 w-full max-h-11/12"
    />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
  </div>
);

export default BenefitCard;