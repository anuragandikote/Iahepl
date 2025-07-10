import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

const avatarImages = [
  "/images/portraits/portrait-1.webp",
  "/images/portraits/portrait-2.webp",
  "/images/portraits/portrait-3.webp",
];

const TestimonialsSection = () => (
  <section className="py-20 px-6">
    <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4">Student Testimonials</h2>
    <p className="text-center text-black mb-12 max-w-xl mx-auto">
      See how our members have reduced stress and enhanced well-being with our support and guidance.
    </p>

    <div className="flex flex-wrap justify-center items-center gap-6">
      {avatarImages.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          fill
          unoptimized
          priority
          alt={`Student ${idx + 1}`}
          className="w-32 h-32 rounded-full border-1 shadow-md object-cover"
        />
      ))}
    </div>

    <TestimonialCard />
  </section>
);

export default TestimonialsSection;