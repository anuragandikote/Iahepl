import DefenceCard from "./DefenceCards";

const defences = [
  {
    title: "Indian Army",
    image: "/images/army.jpg",
  },
  {
    title: "Indian Navy",
    image: "/images/navy.jpg",
  },
  {
    title: "Indian Air Force",
    image: "/images/air-force.jpg",
  },
];

const DefenceSection = () => (
  <section className="py-16 px-6">
    <h2 className="text-lg sm:text-4xl font-bold text-center mb-10 font-oswald text-[#870d07] tracking-widest">
      Choose Your Battlefield – Start Your Defence Career Today.   
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {defences.map((item, i) => (
        <DefenceCard key={i} title={item.title} image={item.image} />
      ))}
    </div>
  </section>
);

export default DefenceSection;