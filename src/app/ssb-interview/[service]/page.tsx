'use client';

type Params = Promise<{ service: string }>;

type Props = {
    params: Promise<Params> | Params;
};

export const dynamic = 'force-dynamic';

import { ssbServiceData } from "@/data/ssbServiceData";
import Link from "next/link";
import { useState, use } from "react";
import React from "react";

function renderDaySection(dayData?: any, id?: string) {
    if (!dayData) return null;
    return (
        <div id={id} className="mt-10">
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

export default function SSBServicePage({
    params,
}: {
    params: Params;
}) {

    const serviceData = ssbServiceData[use(params).service];
    const [activeTab, setActiveTab] = useState('process');

    const scrollToSection = (tab: string) => {
        setActiveTab(tab);
        const element = document.getElementById(tab.toLowerCase().replace(' ', '-'));
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

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
            {/* <div className="bg-gray-100 sticky top-10 z-20 shadow-md">
                <div className="max-w-6xl mx-auto px-4">
                    <nav className="flex justify-center align-middle overflow-x-auto py-4">
                        {['What is SSB', 'DAY 1', 'DAY 2', 'DAY 3', 'DAY 4', 'DAY 5'].map((tab) => (
                            <a
                                key={tab}
                                href={`#${tab.toLowerCase().replace(' ', '-')}`}
                                className={`cursor-pointer px-4 py-2 font-medium whitespace-nowrap mx-2 first:ml-0 transition-colors relative
                                    ${activeTab === tab ? 'text-red-800' : 'text-gray-600 hover:text-red-800'}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(tab);
                                    const element = document.getElementById(tab.toLowerCase().replace(' ', '-'));
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-800 transform transition-transform
                                        ${activeTab === tab ? 'scale-x-100' : 'scale-x-0'}`}
                                ></span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div> */}

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Description */}
                <div id="what-is-ssb">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-4">What is SSB?</h2>
                    <div className="mb-10">
                        <p className="text-lg text-gray-700 leading-relaxed">{serviceData.description}</p>
                    </div>
                </div>

                {/* Day Tabs */}
                {renderDaySection(serviceData.day1, 'day-1')}
                {renderDaySection(serviceData.day2, 'day-2')}
                {renderDaySection(serviceData.day3, 'day-3')}
                {renderDaySection(serviceData.day4, 'day-4')}
                {renderDaySection(serviceData.day5, 'day-5')}

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
        </div>
    );
}