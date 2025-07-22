import HeroSection from "./components/HeroSection";
import DefenceSection from "./components/DefenceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CoursesOfferedSection from "./components/coursesOffered";

export default function LeadCapturePage() {
  return (
    <div className="py-32">
      <HeroSection />
      <DefenceSection />
      <CoursesOfferedSection/>
      <TestimonialsSection />
    </div>
  );
}

// bg-gradient-to-b from-[#fffffa] to-[#a68272]