'use client';
export const dynamic = 'force-dynamic';
import Link from "next/link";
import { use } from 'react';
import { programsData, type ProgramContent } from "@/data/programsData";
import { useState } from "react";
import React from "react";

type Params = Promise<{ program: string }>;

export default function ProgramPage({
    params,
}: {
    params: Params;
}) {

    const program = programsData[use(params).program];
    const [activeSection, setActiveSection] = useState<string>('examination');

    if (!program) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                    <h1 className="text-3xl font-bold text-red-900 mb-4">Program Not Found</h1>
                    <p className="text-gray-600 mb-6">The requested program does not exist.</p>
                    <Link href="/" className="text-red-900 hover:text-red-800">
                        Return to Home
                    </Link>
                </div>
            </div>
        )
    }


    function renderSection(section: any) {
        return (
            <div>
                {section.heading && (
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-red-800 pl-4">{section.heading}</h2>
                )}
                {section.subHeading && (
                    <h3 className="text-lg font-semibold text-red-800 mb-2">{section.subHeading}</h3>
                )}
                {section.content && (
                    <p className="text-gray-700 mb-2">{section.content}</p>
                )}
                {section.points && (
                    <ul className="text-red-800 list-disc pl-5 space-y-2">
                        {section.points.map((point: any, idx: number) =>
                            typeof point === "string" ? (
                                <li key={idx} className="text-gray-300">{point}</li>
                            ) : (
                                <li key={idx}>{renderSection(point)}</li>
                            )
                        )}
                    </ul>
                )}
                {section.link && (
                    <a href={section.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{section.content}</a>
                )}
            </div>
        );
    }

    return (
        <div className='bg-white mt-14'>
            {/* <ProgramHeader title={program.title} /> */}
            {/* <div className="px-29 py-2 bg-gray-100 sticky top-[130px] z-30 shadow-md h-12">
                <nav className="max-w-7xl mx-auto flex justify-center items-center relative">
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-8 z-50" style={{ background: 'linear-gradient(to right, #f7f3f2 0%, transparent)' }} />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-8 z-50" style={{ background: 'linear-gradient(to left, #f7f3f2 0%, transparent)' }} />
                    <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar relative z-20">
                        {program.sections?.map((section, idx) => (
                            section.heading && (
                                <a
                                    key={section.heading + idx}
                                    href={`#section-${idx}`}
                                    className={`ml-10 text-xs inline-block px-4 py-2 font-bold transition-colors relative group
                                        ${activeSection === `section-${idx}` ? 'text-red-800' : 'text-gray-600 hover:text-red-800'}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveSection(`section-${idx}`);
                                        const element = document.getElementById(`section-${idx}`);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }}
                                >
                                    {section.heading}
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-800 transform transition-transform
                                            ${activeSection === `section-${idx}` ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                                    ></span>
                                </a>
                            )
                        ))}
                    </div>
                </nav>
            </div> */}

            <div className="container mx-auto px-16 py-8">
                {program.sections?.map((section, idx) => (
                    <section
                        key={idx}
                        id={`section-${idx}`}
                        className="mb-16 scroll-mt-32"
                    >
                        {renderSection(section)}
                    </section>
                ))}
            </div>

            {/* Examination Section */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Coaching Details */}
                <section id="coaching" className="mb-16 scroll-mt-32">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-4">Coaching Details</h2>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        {program.coachingDetails ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {program.coachingDetails.coachingFees?.map((item, idx) => (
                                    <div key={`fees-${idx}`}>
                                        <h3 className="font-semibold mb-3 text-black">{item.title}</h3>
                                        <p className="text-black">{item.description}</p>
                                    </div>
                                ))}
                                {program.coachingDetails.coachingDuration?.map((item, idx) => (
                                    <div key={`duration-${idx}`}>
                                        <h3 className="font-semibold mb-3 text-black">{item.title}</h3>
                                        <p className="text-black">{item.description}</p>
                                    </div>
                                ))}
                                {program.coachingDetails.coachingHostel?.map((item, idx) => (
                                    <div key={`hostel-${idx}`}>
                                        <h3 className="font-semibold mb-3 text-black">{item.title}</h3>
                                        <p className="text-black">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">Coaching details are not available.</p>
                        )}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-16 scroll-mt-32">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-4">Contact Us</h2>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <p className="text-gray-600 mb-4">Have questions about this program? Reach out to us for more information.</p>
                        <div className="mt-6">
                            <button className="bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}