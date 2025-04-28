import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import Image from "next/image";



export default function GalleryPage() {
    return (
        <div className="flex justify-center bg-white px-4 py-8">
            <div className="w-full max-w-6xl">
                <h1 className="text-4xl font-extrabold text-red-900 mb-10 text-center tracking-tight">Gallery</h1>

                {/* Faculty Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Faculty</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Image src={photo1} alt="Faculty 1" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo2} alt="Faculty 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo3} alt="Faculty 3" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section>

                {/* Facility Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Facility</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Image src={photo4} alt="Facility 1" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Facility 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Facility 3" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section>

                {/* Outdoor Training Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outdoor Training</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Image src={photo4} alt="Outdoor Training 1" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Outdoor Training 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Outdoor Training 3" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section>

                {/* Coaching Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coaching</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Image src={photo4} alt="Coaching 1" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Coaching 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Coaching 3" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section>

                {/* Flying Stars Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Flying Stars of Impact Academy</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Image src={photo4} alt="Flying Star 1" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Flying Star 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Flying Star 3" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section>
            </div>
        </div>
    )
}