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
    <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Courses We Offer</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                From written exams to physical training and SSB interviews — we prepare you for every step of your defence journey.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
                <CourseCard key={index} title={course.title} image={course.image} />
            ))}
        </div>
    </section>
);

export default CoursesOfferedSection;