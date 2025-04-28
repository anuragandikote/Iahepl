'use client'
import { ssbServiceData } from "@/data/ssbServiceData";
import Link from "next/link";
import { useState } from "react";

function renderDaySection(dayData?: any) {
    if (!dayData) return null;
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-4">{dayData.title}</h2>
            <section className="text-black">{dayData.description}</section>
            {Object.entries(dayData)
                .filter(([key]) => !['title', 'description'].includes(key))
                .map(([key, value]: any, idx) => (
                    value?.title && value?.points ? (
                        <div key={key}>
                            <section className="mt-5 text-xl font-bold text-red-800">{value.title}</section>
                            <ul className="list-disc pl-5 space-y-3 mt-2">
                                {value.points.map((item: string, i: number) => (
                                    <li key={i} className="text-gray-700">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null
                ))}
        </div>
    );
}

export default function SSBServicePage({ params }: { params: { service: string } }) {
    const serviceData = ssbServiceData[params.service];
    const [activeTab, setActiveTab] = useState('process');

    if (!serviceData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                    <h1 className="text-3xl font-bold text-red-900 mb-4">Service Not Found</h1>
                    <p className="text-gray-600 mb-6">The requested SSB service does not exist.</p>
                    <Link href="/ssb-interview" className="text-red-900 hover:text-red-800">
                        Back to SSB Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black px-6 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="py-2">
                        <h1 className="text-sm flex items-center gap-2">
                            <Link href="/" className="text-red-800 hover:text-red-700">Home</Link>
                            <span className="text-white">›</span>
                            <Link href="/ssb-interview" className="text-red-800 hover:text-red-700">SSB Interview</Link>
                            <span className="text-white">›</span>
                            <span className="text-gray-400">{serviceData.title}</span>
                        </h1>
                    </div>
                    <h1 className="text-3xl text-white mt-4">{serviceData.title}</h1>
                    <div className="h-[5px] bg-red-800 mt-2 w-80"></div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-gray-100 sticky top-10 z-20 shadow-md">
                <div className="max-w-6xl mx-auto px-4">
                    <nav className="flex justify-center align-middle overflow-x-auto py-4">
                        {['What is SSB', 'DAY 1', 'DAY 2', 'DAY 3', 'DAY 4', 'DAY 5'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`cursor-pointer px-4 py-2 font-medium whitespace-nowrap mx-2 first:ml-0 transition-colors relative
                                    ${activeTab === tab ? 'text-red-800' : 'text-gray-600 hover:text-red-800'}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-800 transform transition-transform
                                        ${activeTab === tab ? 'scale-x-100' : 'scale-x-0'}`}
                                ></span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Description */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-4">What is SSB?</h2>
                <div className="mb-10">
                    <p className="text-lg text-gray-700 leading-relaxed">{serviceData.description}</p>
                </div>

                {/* Tab Content */}
                <div className="mt-8">
                    {/* Process Tab */}
                    {activeTab === 'process' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-4">How It Works?</h2>
                            <div className="space-y-8">
                                {serviceData.process.map((stage: any, index: number) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                        <h3 className="font-semibold text-lg mb-3 text-red-800">{stage.stage}</h3>
                                        <p className="text-gray-700">{stage.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Day Tabs */}
                    { renderDaySection(serviceData.day1)}
                    { renderDaySection(serviceData.day2)}
                    { renderDaySection(serviceData.day3)}
                    { renderDaySection(serviceData.day4)}
                    { renderDaySection(serviceData.day5)}

                    {/* Preparation Tab */}
                    {activeTab === 'preparation' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-4">Preparation Focus Areas</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {serviceData.preparation.map((item: string, index: number) => (
                                    <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-sm flex items-start">
                                        <div className="text-red-800 mr-3 mt-1">•</div>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Features Tab */}
                    {activeTab === 'features' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-4">Program Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {serviceData.features.map((feature: string, index: number) => (
                                    <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-sm flex items-start">
                                        <div className="text-red-800 mr-3 mt-1">✓</div>
                                        <p className="text-gray-700">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-sm text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Prepare for Your SSB Interview?</h2>
                    <p className="text-gray-700 mb-6 max-w-2xl mx-auto">Join our specialized coaching program and increase your chances of success in the SSB interview process.</p>
                    <button className="bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
}