import CourseCard from "./courseCard";

const courses = [
  {
    title: "NDA – National Defence Academy",
    image: "/images/nda.jpeg",
  },
  {
    title: "CDS – Combined Defence Services",
    image: "/images/cds.jpeg",
  },
  {
    title: "AFCAT – Air Force Common Admission Test",
    image: "/images/air-force.jpeg",
  },
  {
    title: "SSB Interview Preparation",
    image: "/images/air-force.jpeg",
  },
  {
    title: "Territorial Army (TA)",
    image: "/images/cds.jpeg",
  },
  {
    title: "Agniveer Entry Scheme",
    image: "/images/nda.jpeg",
  },
];

const CoursesOfferedSection = () => (
  <section className="py-20 bg-[#870d07]">
    {/* Heading */}
    <div className="max-w-6xl mx-auto text-center mb-2 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white font-oswald tracking-widest">
        Pick Your Mission. Begin Your Journey.
      </h2>
      <p className="text-white mt-4 mx-auto text-base sm:text-lg font-league-spartan">
        From written exams to physical training and SSB interviews — we prepare you for every step of your defence journey.
      </p>
    </div>

       <div className="relative">
      {/* Scrollable Container */}
      <div className="flex overflow-x-auto space-x-6 px-4 scrollbar-hide py-16">
        {courses.map((course, index) => (
          <div key={index} className="flex-shrink-0 w-[300px]">
            <CourseCard title={course.title}/>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesOfferedSection;