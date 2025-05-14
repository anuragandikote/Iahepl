
import coaching1 from "@/assets/coaching_1.jpeg";
import coaching2 from "@/assets/coaching_2.jpeg";
import coaching3 from "@/assets/coaching_3.jpeg";
import outdoor1 from "@/assets/outdoor_1.jpeg";
import outdoor2 from "@/assets/outdoor_2.jpeg";
import outdoor3 from "@/assets/outdoor_3.jpeg";
import Image from "next/image";


export default function GalleryPage() {
    return (
        <div className="flex justify-center bg-white px-4 py-8">
            <div className="w-full max-w-6xl">
                <h1 className="text-4xl font-extrabold text-red-900 mb-10 text-center tracking-tight">Gallery</h1>

                {/* Faculty Section */}
                {/* <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Faculty</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Image src={group1} alt="Faculty 1" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo2} alt="Faculty 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo3} alt="Faculty 3" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section> */}

                {/* Facility Section */}
                {/* <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Facility</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Image src={group1} alt="Facility 1" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Facility 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Facility 3" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section> */}

                {/* Outdoor Training Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outdoor Training</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <Image src={'/outdoor_1.jpg'} alt="Outdoor Training 1" width={800} height={600} className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={'/outdoor_2.jpg'} alt="Outdoor Training 2" width={800} height={600} className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={'/outdoor_3.jpg'} alt="Outdoor Training 3" width={800} height={600} className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section>

                {/* Coaching Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coaching</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <Image src={'/coaching_1.jpg'} alt="Coaching 1" width={800} height={600} className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={'/coaching_2.jpg'} alt="Coaching 2" width={800} height={600} className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={'/coaching_3.jpg'} alt="Coaching 3" width={800} height={600} className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section>

                {/* Flying Stars Section */}
                {/* <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Flying Stars of Impact Academy</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Image src={group1} alt="Flying Star 1" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Flying Star 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                        <Image src={photo4} alt="Flying Star 3" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                </section> */}
            </div>
        </div>
    )
}