type CourseCardProps = {
  title: string;
};

const CourseCard = ({ title }: CourseCardProps) => (
  <div className="h-48 w-full sm:h-52 md:h-56 lg:h-60 xl:h-64 rounded-2xl text-white shadow-2xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer p-6 flex items-center justify-center text-center">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide font-oswald leading-snug">
      {title}
    </h3>
  </div>
);

export default CourseCard;