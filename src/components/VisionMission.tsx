import React from "react";

export default function VisionMission() {
    return (
        <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#f7f3f2] via-[#fff] to-[#fbeee6]">
            <div className="container mx-auto px-4">
                {/* Vision */}
                <div className="mb-10 sm:mb-12">
                    <div className="flex items-center mb-4">
                        <span className="text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-3" role="img" aria-label="vision">👁️</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7c1d1d] tracking-tight">
                            Vision
                        </h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg border-l-4 sm:border-l-8 border-[#fbbf24] p-4 sm:p-6 md:p-8">
                        <ul className="space-y-4 list-none">
                            <li className="flex items-start">
                                <span className="text-[#fbbf24] text-xl sm:text-2xl mr-2 sm:mr-3">★</span>
                                <span className="text-gray-800 text-base sm:text-lg">
                                    To forge warriors of character, courage, and conviction—empowering individuals to rise above challenges, lead with purpose, and serve the nation with honor and integrity.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Mission */}
                <div>
                    <div className="flex items-center mb-4">
                        <span className="text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-3" role="img" aria-label="mission">⚔️</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7c1d1d] tracking-tight">
                            Mission
                        </h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg border-l-4 sm:border-l-8 border-[#7c1d1d] p-4 sm:p-6 md:p-8">
                        <ul className="space-y-4 list-none">
                            <li className="flex items-start">
                                <span className="text-[#7c1d1d] text-xl sm:text-2xl mr-2 sm:mr-3">✓</span>
                                <span className="text-gray-800 text-base sm:text-lg">
                                    At <span className="font-semibold text-[#7c1d1d]">IMPACT Academy of Human Excellence</span>, our mission is to transform aspiring individuals into disciplined leaders and defenders of the nation. Through rigorous training, strategic mentorship, and character-building programs, we cultivate resilience, sharpness, and a relentless pursuit of excellence to prepare our cadets for the toughest challenges in defense and life.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}