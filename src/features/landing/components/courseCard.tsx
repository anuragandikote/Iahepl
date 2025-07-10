type CourseCardProps = {
    title: string;
    image: string;
};

const CourseCard = ({ title, image }: CourseCardProps) => (
    <div className="rounded-xl cursor-pointer card-with-gradient-border shadow-lg bg-[#dcdedc] overflow-hidden hover:scale-105 transition-transform">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
    </div>
);

export default CourseCard;