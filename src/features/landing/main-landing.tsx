import HeroSection from "./components/HeroSection";
import DefenceSection from "./components/DefenceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CoursesOfferedSection from "./components/coursesOffered";

export default function LeadCapturePage() {
  return (
    <div className="py-16">
      <HeroSection />
      <DefenceSection />
      <CoursesOfferedSection/>
      {/* <TestimonialsSection /> */} {/* because it's taking too much consumption on vercel. */}
    </div>
  );
}