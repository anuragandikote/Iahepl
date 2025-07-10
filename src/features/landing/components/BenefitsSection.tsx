import BenefitCard from "./BenefitCard";

const benefits = [
  {
    title: "Combined Defence Services (CDS)",
    image: "/images/cds.jpeg",
  },
  {
    title: "National Defence Academy (NDA)",
    image: "/images/nda.jpeg",
  },
  {
    title: "Air Force Common Admission Test (AFCAT)",
    image: "/images/air-force.jpeg",
  },
];

const BenefitsSection = () => (
  <section className="py-16 px-6">
    <h2 className="text-lg sm:text-4xl font-bold text-center mb-10">
      Choose Your Battlefield – Start Your Defence Career Today.   
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {benefits.map((item, i) => (
        <BenefitCard key={i} title={item.title} image={item.image} />
      ))}
    </div>
  </section>
);

export default BenefitsSection;