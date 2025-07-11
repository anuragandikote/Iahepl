'use client';
import Image from 'next/image';
import React from 'react';

interface ImageData {
    src: string;
    alt: string;
}

interface SectionProps {
    title: string;
    images: ImageData[];
    gridCols: string;
    isLarge?: boolean;
}

const galleryData: SectionProps[] = [
    {
        title: 'Faculty',
        images: [
            { src: '/images/group_1.webp', alt: 'Faculty 1' },
            { src: '/images/photo2.webp', alt: 'Faculty 2' },
            { src: '/images/photo3.webp', alt: 'Faculty 3' },
        ],
        gridCols: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    },
    {
        title: 'Facility',
        images: [
            { src: '/images/group_1.webp', alt: 'Facility 1' },
            { src: '/images/photo4.webp', alt: 'Facility 2' },
            { src: '/images/photo4.webp', alt: 'Facility 3' },
        ],
        gridCols: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    },
    {
        title: 'Outdoor Training',
        images: [
            { src: '/images/outdoor_1.webp', alt: 'Outdoor Training 1' },
            { src: '/images/outdoor_2.webp', alt: 'Outdoor Training 2' },
            { src: '/images/outdoor_3.webp', alt: 'Outdoor Training 3' },
        ],
        gridCols: 'rid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    },
    {
        title: 'Coaching',
        images: [
            { src: '/images/coaching_1.webp', alt: 'Coaching 1' },
            { src: '/images/coaching_2.webp', alt: 'Coaching 2' },
            { src: '/images/coaching_3.webp', alt: 'Coaching 3' },
        ],
        gridCols: 'rid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    },
    {
        title: 'Flying Stars of Impact Academy',
        images: [
            { src: '/images/group_1.webp', alt: 'Flying Star 1' },
            { src: '/images/photo4.webp', alt: 'Flying Star 2' },
            { src: '/images/photo4.webp', alt: 'Flying Star 3' },
        ],
        gridCols: 'rid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    },
];

const Section: React.FC<SectionProps> = ({ title, images, gridCols }) => (
    <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 font-oswald mb-4">{title}</h2>
        <div className={`grid ${gridCols} gap-6`}>
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className="w-full h-auto rounded-lg shadow-lg overflow-hidden"
                >
                    <div className="overflow-hidden">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={500}
                            height={500}
                            unoptimized
                            priority
                            className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const MainGallery: React.FC = () => {
    return (
        <div className="container mx-auto px-16 py-28">
            {galleryData.map((section, idx) => (
                <Section key={idx} {...section} />
            ))}
        </div>
    );
};

export default MainGallery;
