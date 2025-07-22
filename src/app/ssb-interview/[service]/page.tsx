"use client";

import { useState, use } from "react";
import Link from "next/link";
import { ssbServiceData } from "@/data/ssbServiceData";

interface Params {
  service: string;
}

type Section = {
  title: string;
  content:
    | {
        label: string;
        text: string | string[];
      }[];
};

export default function SSBServicePage({ params }: { params: Promise<Params> }) {
  const { service } = use(params);

  if (!(service in ssbServiceData)) return <div>Invalid service</div>;

  const serviceKey = service as keyof typeof ssbServiceData;
  const serviceData = ssbServiceData[serviceKey];

  return (
    <div className="min-h-screen mt-14">
      {/* Header */}
      <header className="px-4 md:px-6 py-8">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-wide font-oswald text-[#870e08] mt-4">
            {serviceData.title}
          </h1>
        </div>
      </header>

      {/* What is SSB */}
      <main className="container mx-auto px-4 py-10">
        <section
          id="what-is-ssb"
          className="relative bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] py-12 px-6 md:px-20 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0" />
          <div className="relative z-10 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-oswald mb-6">
              What is SSB?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              {serviceData.description}
            </p>
          </div>
        </section>

        {/* Render Sections from serviceData.sections */}
        {serviceData.sections?.map((section, sectionIdx) => (
          <section
            key={sectionIdx}
            className="mt-16 bg-white rounded-xl p-6 md:p-10 shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-oswald border-l-4 border-black pl-4 mb-6">
              {section.title}
            </h2>

            {section.content.map((item, i) => (
              <div key={i} className="mb-6">
                {item?.label && (
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {item?.label}
                  </h3>
                )}

                {Array.isArray(item?.text) ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {item?.text?.map((point: any, idx: number) => (
                      <li key={idx} className="text-gray-700">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{item.text}</p>
                )}
              </div>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}