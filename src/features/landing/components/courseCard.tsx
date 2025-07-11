import Image from "next/image";

type CourseCardProps = {
    title: string;
    image: string;
};

const CourseCard = ({ title, image }: CourseCardProps) => (
    <div className="p-4 rounded-xl cursor-pointer card-with-gradient-border shadow-lg bg-white overflow-hidden hover:scale-105 transition-transform">
        <Image src={image} alt={title} width={120} height={120} unoptimized priority className="w-full h-52 object-cover rounded-2xl" />
        <div className="p-4">
            <h3 className="text-lg font-semibold text-black">{title}</h3>
        </div>
    </div>
);

export default CourseCard;