'use client'
import React, { useState } from 'react'

const faqs = [
    {
        heading: "NDA",
        content: "Frequently asked questions about the National Defence Academy (NDA) exam.",
        points: [
            {
                heading: "What is the NDA exam, and who conducts it?",
                content: "The NDA exam is conducted by UPSC for entry into the National Defence Academy.",
                subpoints: [
                    "It is held twice a year.",
                    "Both written and SSB interview are part of the selection process."
                ]
            },
            {
                heading: "What is the eligibility for NDA?",
                content: "Candidates must have completed 10+2 and meet age and nationality requirements.",
                subpoints: [
                    "Only unmarried male and female candidates can apply.",
                    "Age should be between 16.5 and 19.5 years."
                ]
            },
            {
                heading: "How many times is NDA conducted in a year?",
                content: "NDA is conducted twice a year by UPSC.",
                subpoints: []
            },
            {
                heading: "How many times can I attempt the NDA exam?",
                content: "There is no fixed limit on the number of attempts as long as you meet the age and eligibility criteria.",
                subpoints: []
            },
            {
                heading: "What is the NDA exam syllabus and pattern?",
                content: "The NDA exam consists of Mathematics and General Ability Test (GAT).",
                subpoints: [
                    "Mathematics: 120 questions, 300 marks.",
                    "GAT: 150 questions, 600 marks."
                ]
            },
            {
                heading: "What is the NDA salary and benefits?",
                content: "NDA cadets receive a stipend during training and various benefits after commissioning.",
                subpoints: [
                    "Stipend during training: ₹56,100 per month.",
                    "Other allowances and benefits as per government norms."
                ]
            },
            {
                heading: "Can female candidates apply for NDA?",
                content: "Yes, female candidates can apply for the NDA exam.",
                subpoints: []
            },
            {
                heading: "How can I prepare for the NDA exam?",
                content: "Preparation involves studying the syllabus, practicing previous papers, and improving physical fitness.",
                subpoints: [
                    "Focus on Mathematics and English.",
                    "Practice time management."
                ]
            },
            {
                heading: "What is the NDA training duration and process?",
                content: "The NDA training lasts for three years, followed by pre-commission training at respective academies.",
                subpoints: [
                    "Academic and physical training at NDA.",
                    "Specialized training at IMA, INA, or AFA."
                ]
            },
        ]
    },
    {
        heading: "CDS",
        content: "Frequently asked questions about the Combined Defence Services (CDS) exam.",
        points: [
            {
                heading: "What is the CDS exam, and who conducts it?",
                content: "The CDS exam is conducted by UPSC for graduates who meet the age and nationality criteria.",
                subpoints: [
                    "It is held twice a year.",
                    "Both written exam and SSB interview are part of the selection process."
                ]
            },
            {
                heading: "What are the eligibility criteria for the CDS exam?",
                content: "Graduates who meet the age and nationality criteria can apply for CDS.",
                subpoints: [
                    "Candidates must be graduates from a recognized university.",
                    "Age and marital status requirements vary by academy."
                ]
            },
            {
                heading: "How many attempts are allowed for the CDS exam?",
                content: "There is no fixed limit on the number of attempts as long as you meet the eligibility criteria.",
                subpoints: []
            },
            {
                heading: "What is the selection process for the CDS exam?",
                content: "The selection process includes a written exam and SSB interview.",
                subpoints: [
                    "Written exam tests English, General Knowledge, and Mathematics.",
                    "Qualified candidates are called for SSB interview."
                ]
            },
            {
                heading: "What is SSC and PC?",
                content: "SSC stands for Short Service Commission and PC stands for Permanent Commission.",
                subpoints: [
                    "SSC officers serve for a limited period.",
                    "PC officers serve until retirement."
                ]
            },
            {
                heading: "What is the difference between CDS OTA and CDS IMA?",
                content: "CDS OTA is for Officers Training Academy (Short Service), CDS IMA is for Indian Military Academy (Permanent Commission).",
                subpoints: [
                    "OTA is for both men and women; IMA is for men only.",
                    "OTA has a shorter training duration."
                ]
            },
        ]
    },
    {
        heading: "AFCAT",
        content: "Frequently asked questions about the Air Force Common Admission Test (AFCAT).",
        points: [
            {
                heading: "What is the AFCAT exam, and who conducts it?",
                content: "AFCAT is the Air Force Common Admission Test for recruitment in the Indian Air Force.",
                subpoints: [
                    "Conducted by the Indian Air Force.",
                    "Held twice a year for various branches."
                ]
            },
            {
                heading: "What are the eligibility criteria for AFCAT?",
                content: "Eligibility criteria include educational qualifications, age, and nationality.",
                subpoints: [
                    "Graduation in any discipline for Flying Branch.",
                    "Engineering degree for Technical Branch.",
                    "Age limits vary by branch."
                ]
            },
            {
                heading: "What is the selection process for AFCAT?",
                content: "The selection process includes a written exam, AFSB interview, and medical examination.",
                subpoints: [
                    "Written exam tests General Awareness, Verbal Ability, Numerical Ability, Reasoning, and Military Aptitude.",
                    "Qualified candidates are called for AFSB interview."
                ]
            },
            {
                heading: "How many branches are there in Air Force?",
                content: "There are three main branches in the Indian Air Force.",
                subpoints: [
                    "Flying Branch",
                    "Technical Branch",
                    "Ground Duty Branch"
                ]
            },
            {
                heading: "What is AFSB, and how does it work?",
                content: "AFSB stands for Air Force Selection Board, which conducts interviews and tests for officer selection.",
                subpoints: [
                    "Includes psychological tests, group tasks, and personal interview.",
                    "Medical examination is also part of the process."
                ]
            },
        ]
    },
    {
        heading: "SSB",
        content: "Frequently asked questions about the Services Selection Board (SSB) interview.",
        points: [
            {
                heading: "What is the SSB interview, and why is it conducted?",
                content: "SSB Interview is a five-day selection process to assess candidates for officer posts.",
                subpoints: [
                    "Assesses intelligence, personality, and suitability for a career in the armed forces."
                ]
            },
            {
                heading: "What is the SSB interview process?",
                content: "The SSB interview process involves multiple stages over five days.",
                subpoints: [
                    "Screening Test",
                    "Psychological Tests",
                    "Group Testing Officer (GTO) Tasks",
                    "Personal Interview",
                    "Conference"
                ]
            },
            {
                heading: "What is the Officer Intelligence Rating (OIR) test in SSB?",
                content: "OIR test evaluates the candidate's intelligence and reasoning ability.",
                subpoints: [
                    "Consists of verbal and non-verbal reasoning questions."
                ]
            },
            {
                heading: "What happens in the Picture Perception & Discussion Test (PPDT)?",
                content: "PPDT involves writing a story based on a picture and discussing it in a group.",
                subpoints: [
                    "Tests imagination, communication, and group dynamics."
                ]
            },
            {
                heading: "What are the Psychological Tests in the SSB interview?",
                content: "Psychological tests assess the candidate's personality and suitability for a career in the armed forces.",
                subpoints: [
                    "Includes Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT), and Self-Description Test (SDT)."
                ]
            },
            {
                heading: "What are GTO tasks in the SSB interview?",
                content: "GTO tasks evaluate teamwork, leadership, and problem-solving skills.",
                subpoints: [
                    "Includes Group Discussion, Group Planning Exercise, Progressive Group Task, and more."
                ]
            },
            {
                heading: "What happens in the Personal Interview?",
                content: "Personal Interview assesses the candidate's background, interests, and suitability for the armed forces.",
                subpoints: [
                    "Conducted by an interviewing officer."
                ]
            },
            {
                heading: "What is the Conference Round in SSB?",
                content: "The Conference Round is the final assessment where all assessors discuss and decide the candidate's suitability.",
                subpoints: [
                    "Candidates may be asked a few questions before the final decision."
                ]
            },
            {
                heading: "How is the final selection decided in SSB?",
                content: "Final selection is based on performance in all tests and overall suitability.",
                subpoints: [
                    "Recommendations are made by consensus among assessors."
                ]
            },
            {
                heading: "How to prepare for the SSB interview?",
                content: "Preparation involves physical fitness, communication skills, and knowledge of current affairs.",
                subpoints: [
                    "Practice group discussions and psychological tests.",
                    "Stay updated with current events."
                ]
            },
        ]
    },
]

const Faq = () => {
    const [openIndexes, setOpenIndexes] = useState<{ [sectionIdx: number]: number | null }>({});

    const toggleFaq = (sectionIdx: number, faqIdx: number) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [sectionIdx]: prev[sectionIdx] === faqIdx ? null : faqIdx,
        }));
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-red-800 mb-10">Frequently Asked Questions</h1>
            <div className="flex justify-center">
                <div className="space-y-5 max-w-6xl w-full">
                    {faqs.map((section, sectionIdx) => (
                        <div key={section.heading}>
                            <h2 className="text-xl md:text-3xl font-semibold text-red-800 mb-4">{section.heading}</h2>
                            {section.content && (
                                <p className="mb-2 text-gray-700 text-base md:text-lg">{section.content}</p>
                            )}
                            <div className="space-y-4">
                                {section.points.map((point, pointIdx) => (
                                    <div key={point.heading} className="border rounded-lg shadow-md bg-white">
                                        <button
                                            className="cursor-pointer w-full flex justify-between items-center px-6 py-4 text-base md:text-lg font-medium text-left text-gray-800 focus:outline-none"
                                            onClick={() => toggleFaq(sectionIdx, pointIdx)}
                                        >
                                            {point.heading}
                                            <span className={`transform transition-transform duration-300 ${openIndexes[sectionIdx] === pointIdx ? 'rotate-180' : ''}`}>
                                                ▼
                                            </span>
                                        </button>
                                        {openIndexes[sectionIdx] === pointIdx && (
                                            <div className="px-6 pb-4 text-gray-600 animate-fade-in text-base md:text-lg">
                                                <div>{point.content}</div>
                                                {point.subpoints && point.subpoints.length > 0 && (
                                                    <ul className="list-disc pl-5 mt-2">
                                                        {point.subpoints.map((sub, subIdx) => (
                                                            <li key={subIdx}>{sub}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq