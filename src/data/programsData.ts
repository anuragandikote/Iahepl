export type ProgramSection = {
    heading?: string;
    subHeading?: string;
    content?: string;
    points?: (string | ProgramSection)[];
    subPoints?: {
        title: string;
        content: string;
    }[];
    link?: string;
};

export type ProgramContent = {
    title?: string;
    sections: ProgramSection[];
    syllabus?: string[];
    eligibility?: string[];
    coachingDetails?: {
        coachingFees: {
            title: string;
            description: string;
        }[];
        coachingDuration: {
            title: string;
            description: string;
        }[];
        coachingHostel: {
            title: string;
            description: string;
        }[];
    }
    examPattern?: {
        subject: string;
        topics: string;
        duration: string;
    }[];
};

export const programsData: { [key: string]: ProgramContent } = {
    'nda-written-coaching': {
        title: `NDA/NA`,
        sections: [
            {
                heading: "NDA WRITTEN COURSE",
                subHeading: "What is the NDA Exam? Complete Guide for Aspirants",
            },
            {
                heading: "Introduction",
                content: "Are you passionate about serving your country? The National Defence Academy (NDA) offers a prestigious path to become a leader in the Indian Armed Forces. This guide will cover everything you need to know about joining the NDA, including career benefits, adventure opportunities, pay, and more.",
                points: [
                    {
                        subHeading: "Description:",
                        content: "Discover everything about the NDA Exam—conducted by UPSC for Indian Army, Navy, and Air Force. Learn about eligibility, exam pattern, important dates, and preparation tips for male & female candidates."
                    }
                ]
            },
            {
                heading: "What is the NDA Exam?",
                content: "The NDA (National Defence Academy) Exam is a prestigious national-level entrance exam conducted by the Union Public Service Commission (UPSC). It recruits young, dynamic individuals for the Indian Army, Navy, and Air Force.",
                points: [
                    {
                        subHeading: "Purpose:",
                        content: "To select candidates for admission to the NDA and Indian Naval Academy (INA) for a career as officers in the Armed Forces."
                    },
                    {
                        subHeading: "Mode:",
                        content: "Written exam followed by the SSB Interview and medical examination."
                    },
                    {
                        subHeading: "Duration of Training:",
                        content: "3 years at NDA, Pune, followed by specialized training at respective academies."
                    }
                ]
            },
            {
                heading: "Who Conducts the NDA Exam?",
                content: "The NDA Exam is conducted by the Union Public Service Commission (UPSC), which organizes various competitive exams like IAS, IPS, and CDS.",
                points: [
                    {
                        subHeading: "Frequency:",
                        content: "Twice a year (NDA I and NDA II)"
                    },
                    {
                        subHeading: "Official Website:",
                        content: "www.upsc.gov.in",
                        link: "https://www.upsc.gov.in"
                    }
                ]
            },
            {
                heading: "When is the NDA Exam Held?",
                content: "The NDA Exam is conducted by the Union Public Service Commission (UPSC), which organizes various competitive exams like IAS, IPS, and CDS.",
                points: [
                    {
                        subHeading: "NDA I:",
                        content: "Held in April"
                    },
                    {
                        subHeading: "NDA II:",
                        content: "Held in September",
                    },
                    {
                        subHeading: "Exam Notification:",
                        content: "Released 4–5 months before the exam date",
                    }
                ]
            },
            {
                heading: "Eligibility Criteria for the NDA Exam",
                content: "The NDA Exam is conducted by the Union Public Service Commission (UPSC), which organizes various competitive exams like IAS, IPS, and CDS.",
                points: [
                    {
                        subHeading: "For Male Candidates:",
                        content: "",
                        points: [
                            {
                                subHeading: "Age Limit:",
                                content: "16.5–19.5 years (as of the year of admission)"
                            },
                            {
                                subHeading: "Educational Qualification:",
                                content: "Must have passed 12th grade with Physics and Mathematics | For the Army wing, candidates from any stream are eligible"
                            },
                            {
                                subHeading: "Marital Status:",
                                content: "Unmarried"
                            },
                        ]
                    },
                    {
                        subHeading: "For Female Candidates:",
                        content: "Eligibility:",
                        points: [
                            {
                                // subHeading: "Age Limit:",
                                content: `Female candidates can apply for the NDA I and NDA II exams through the NDA
                                    (Women’s Entry Scheme), as announced by the government.`
                            },
                            {
                                subHeading: "Age Limit:",
                                content: "16.5–19.5 years"
                            },
                            {
                                subHeading: "Educational Qualification:",
                                content: "Same as male candidates"
                            }
                        ]
                    },
                    {
                        subHeading: "Note: Female candidates are eligible for both Army and Air Force wings.",
                    },
                ]
            },
            {
                heading: "NDA Exam Pattern (Keyword: NDA Exam Pattern)",
                content: "The exam consists of two papers:",
                points: [
                    {
                        subHeading: "Mathematics (300 marks):",
                        content: "",
                        points: [
                            {
                                subHeading: "Topics:",
                                content: "Algebra, Calculus, Geometry, Statistics, Trigonometry"
                            },
                            {
                                subHeading: "Duration:",
                                content: "2.5 hours"
                            },
                        ]
                    },
                    {
                        subHeading: "General Ability Test (600 marks):",
                        content: "",
                        points: [
                            {
                                subHeading: "English (200 marks):",
                                content: "Grammar, comprehension, vocabulary"
                            },
                            {
                                subHeading: "General Knowledge (400 marks):",
                                content: "Physics, Chemistry, General Science, History, Geography, and Current Affairs"
                            },
                            {
                                subHeading: "Duration:",
                                content: "2.5 hours"
                            },
                        ]
                    },
                    {
                        subHeading: "Mode:",
                        content: "Offline (pen-and-paper)",
                    },
                    {
                        subHeading: "Negative Marking:",
                        content: "1/3rd mark deducted for incorrect answers",
                    },
                ]
            },
            {
                heading: "NDA Selection Process",
                content: "The exam consists of two papers:",
                points: [
                    {
                        subHeading: "Written Exam:",
                        content: "Based on the pattern above",
                    },
                    {
                        subHeading: "SSB Interview:",
                        content: "Conducted for shortlisted candidates (psychological tests, GTO tasks, personal interview)",
                    },
                    {
                        subHeading: "Medical Examination:",
                        content: "Conducted at military hospitals",
                    },
                    {
                        subHeading: "Merit List:",
                        content: "Final selection based on written exam, SSB, and medical fitness",
                    },
                ]
            },
            {
                heading: "NDA Training Details",
                content: "The exam consists of two papers:",
                points: [
                    {
                        subHeading: "Duration:",
                        content: "3 years at NDA, Pune",
                    },
                    {
                        subHeading: "Academies:",
                        content: "",
                        points: [
                            {
                                subHeading: "Army:",
                                content: "Indian Military Academy (IMA)"
                            },
                            {
                                subHeading: "Navy:",
                                content: "Indian Naval Academy (INA)"
                            },
                            {
                                subHeading: "Air Force:",
                                content: "Air Force Academy (AFA)"
                            },
                        ]
                    },
                    {
                        subHeading: "Post-NDA:",
                        content: "Specialized training at respective academies before joining as commissioned officers",
                    },
                ]
            },
            {
                heading: "NDA Exam Preparation Tips",
                content: "",
                points: [
                    {
                        subHeading: "Master the Basics:",
                        content: "Strong foundation in Mathematics and English",
                    },
                    {
                        subHeading: "Current Affairs:",
                        content: "Read newspapers like The Hindu and defence magazines",
                    },
                    {
                        subHeading: "Practice Mock Tests:",
                        content: "Improve speed and accuracy",
                    },
                    {
                        subHeading: "Physical Fitness:",
                        content: "Regular exercise for SSB and medical readiness",
                    },
                ]
            },
            {
                heading: "Why Should You Join the NDA?",
                content: "",
                points: [
                    {
                        subHeading: "1. Serve the Nation with Honour",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Contribute directly to India&#39;s security and global standing."
                            },
                            {
                                subHeading: "",
                                content: "Be part of an elite group of officers dedicated to national defence."
                            },
                        ]
                    },
                    {
                        subHeading: "2. World-Class Education",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Get a balanced curriculum in academics, leadership, and military training."
                            },
                            {
                                subHeading: "",
                                content: "Earn a Bachelor’s degree while undergoing training."
                            },
                        ]
                    },
                    {
                        subHeading: "3. Physical Fitness and Discipline",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Transform into a disciplined, physically fit individual."
                            },
                            {
                                subHeading: "",
                                content: "Training includes rigorous physical activities, leadership exercises, and strategic learning."
                            },
                        ]
                    },
                    {
                        subHeading: "4. Rewarding Career Opportunities",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Serve in the Army, Navy, or Air Force with dynamic roles."
                            },
                            {
                                subHeading: "",
                                content: "Opportunities in combat, technical, logistics, and strategic planning."
                            },
                        ]
                    },
                    {
                        subHeading: "5. International Exposure",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Participate in joint military exercises with global forces."
                            },
                            {
                                subHeading: "",
                                content: "Travel opportunities for training missions and peacekeeping operations."
                            },
                        ]
                    },
                    {
                        subHeading: "6. Brotherhood and Camaraderie",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Build lifelong friendships with fellow cadets and officers."
                            },
                            {
                                subHeading: "",
                                content: "Experience the spirit of teamwork and leadership."
                            },
                        ]
                    },
                    {
                        subHeading: "7. Personal Growth and Leadership Development",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Develop leadership, problem-solving, and decision-making skills."
                            },
                            {
                                subHeading: "",
                                content: "Grow into a confident, responsible individual ready for any challenge."
                            },
                        ]
                    },
                    {
                        subHeading: "8. Adventure and Thrill",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Engage in exciting activities like skydiving, mountaineering, and trekking."
                            },
                            {
                                subHeading: "",
                                content: "Live a life filled with adventure, even in routine training."
                            },
                        ]
                    },
                    {
                        subHeading: "9. Travel Opportunities",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Explore diverse regions of India and abroad while serving."
                            },
                            {
                                subHeading: "",
                                content: "Cultural exposure and personal development through global experiences."
                            },
                        ]
                    },
                    {
                        subHeading: "10. Attractive Pay and Perks",
                        content: "",
                        points: [
                            {
                                subHeading: "",
                                content: "Competitive salary with various allowances (DA, HRA, risk, etc.)."
                            },
                            {
                                subHeading: "",
                                content: "Comprehensive medical benefits, pension schemes, and welfare plans for families."
                            },
                        ]
                    },
                ]
            },
            {
                heading: "Final Thoughts",
                content: `The NDA Exam is not just an entrance test; it’s the first step towards a life of honour, adventure, and leadership. Whether you’re male or female, the NDA offers an incredible opportunity to serve your country.`,
            },
        ],
        coachingDetails: {
            coachingFees: [
                {
                    title: "NDA/NA coaching fees:",
                    description: "₹ 26,000/-(Including Material)"
                }
            ],
            coachingDuration: [
                {
                    title: "Duration:",
                    description: "3-4 Months course"
                }
            ],
            coachingHostel: [
                {
                    title: "Hostel Fees(optional):",
                    description: "₹ 3500/- (Without Food)"
                }
            ]
        }
    },
    'cds-written-coaching': {
        title: `CDS `,
        sections: [
            {
                heading: "CDS WRITTEN COURSE",
                subHeading: "What is the CDS Exam? Complete Guide for Aspirants",
            },
            {
                heading: "Introduction",
                content: `Learn everything about the CDS Exam—conducted by UPSC for Indian Army, Navy, and Air Force.
                    Discover eligibility criteria for male & female candidates, exam dates, and preparation tips.`,
            },
            {
                heading: "What is the CDS Exam?",
                content: `The CDS (Combined Defence Services) Exam is a national-level competitive exam conducted by the
                    Union Public Service Commission (UPSC). It selects candidates for admission into the Indian Army,
                    Navy, and Air Force.`,
                points: [
                    {
                        subHeading: "Purpose:",
                        content: "To recruit young, dynamic individuals as officers in the Indian Armed Forces."
                    },
                    {
                        subHeading: "Mode:",
                        content: "Written exam followed by SSB Interview and medical examination."
                    },
                    {
                        subHeading: "Entry Types:",
                        content: `For Indian Military Academy (IMA), Officers Training Academy (OTA), Indian
                            Naval Academy (INA), and Air Force Academy (AFA).`
                    }
                ]
            },
            {
                heading: "Who Conducts the CDS Exam?",
                content: `The CDS Exam is conducted by the Union Public Service Commission (UPSC), which is responsible
                    for organizing several prestigious exams in India, including IAS, IPS, and NDA.`,
                points: [
                    {
                        subHeading: "Frequency:",
                        content: "Twice a year (CDS I and CDS II)"
                    },
                    {
                        subHeading: "Official Website:",
                        content: "for notifications and updates",
                        link: "https://www.upsc.gov.in"
                    },
                ]
            },
            {
                heading: "When is the CDS Exam Held?",
                content: ``,
                points: [
                    {
                        subHeading: "CDS I:",
                        content: "Usually held in February"
                    },
                    {
                        subHeading: "CDS II:",
                        content: "Held in September",
                    },
                    {
                        subHeading: "Exam Notification:",
                        content: "Released 4-5 months before the exam date",
                    },
                ]
            },
            {
                heading: "Pro Tip:",
                content: `Regularly check the UPSC website for the latest updates and exam schedules.`,
            },
            {
                heading: "Eligibility Criteria for the CDS Exam",
                content: `For Male Candidates:`,
                points: [
                    {
                        subHeading: "",
                        content: "Age Limit:",
                        points: [
                            {
                                subHeading: "IMA (Indian Military Academy):",
                                content: "19–24 years"
                            },
                        ]
                    },
                    {
                        subHeading: "",
                        content: "OTA (Officers Training Academy):",
                        points: [
                            {
                                subHeading: "INA (Indian Naval Academy):",
                                content: "19–24 years"
                            },
                            {
                                subHeading: "AFA (Air Force Academy):",
                                content: "19–24 years"
                            },
                        ]
                    },
                    {
                        subHeading: "Educational Qualification:",
                        content: "",
                        points: [
                            {
                                subHeading: "IMA & INA:",
                                content: "Bachelor’s degree from a recognized university"
                            },
                            {
                                subHeading: "AFA:",
                                content: "Engineering degree or Bachelor’s degree with Physics and Mathematics"
                            },
                        ]
                    },
                    {
                        subHeading: "Marital Status:",
                        content: "Unmarried",
                    },
                ]
            },
            {
                heading: "",
                content: `For Female Candidates:`,
                points: [
                    {
                        subHeading: "",
                        content: "OTA (Officers Training Academy):",
                        points: [
                            {
                                subHeading: "Age Limit:",
                                content: "19–25 years (for both CDS I & II)"
                            },
                            {
                                subHeading: "Educational Qualification:",
                                content: "Bachelor’s degree in any discipline"
                            },
                            {
                                subHeading: "Marital Status:",
                                content: "Unmarried, widows, and divorcees (without children) are eligible"
                            },
                        ]
                    },
                ]
            },
            {
                heading: "Important:",
                content: `Female candidates are eligible for OTA only in CDS.`,
            },
            {
                heading: "CDS Exam Pattern",
                content: `The exam consists of three papers:`,
                points: [
                    {
                        subHeading: "",
                        content: "OTA (Officers Training Academy):",
                        points: [
                            {
                                subHeading: "English (100 marks)",
                                content: "Objective type, tests grammar and vocabulary"
                            },
                            {
                                subHeading: "General Knowledge (100 marks)",
                                content: "Includes current affairs, history, geography, etc."
                            },
                            {
                                subHeading: "Elementary Mathematics (100 marks)",
                                content: "Arithmetic, algebra, geometry, etc."
                            },
                        ]
                    },
                    {
                        subHeading: "",
                        content: "",
                        points: [
                            {
                                subHeading: "Duration:",
                                content: "2 hours for each paper"
                            },
                            {
                                subHeading: "Mode:",
                                content: "Offline (pen-and-paper)"
                            },
                            {
                                subHeading: "Negative Marking:",
                                content: "1/3rd mark deducted for incorrect answers"
                            },
                        ]
                    },
                ]
            },
            {
                heading: "CDS Selection Process",
                content: ``,
                points: [
                    {
                        subHeading: "",
                        content: "",
                        points: [
                            {
                                subHeading: "Written Exam:",
                                content: "Based on the pattern above"
                            },
                            {
                                subHeading: "SSB Interview:",
                                content: "For shortlisted candidates (psychological tests, GTO tasks, personal interview)"
                            },
                            {
                                subHeading: "Medical Examination:",
                                content: "Physical and medical fitness assessment"
                            },
                            {
                                subHeading: "Merit List:",
                                content: "Final selection based on combined performance"
                            },
                        ]
                    },
                ]
            },
            {
                heading: "CDS Exam Preparation Tips",
                content: ``,
                points: [
                    {
                        subHeading: "",
                        content: "",
                        points: [
                            {
                                subHeading: "Time Management:",
                                content: "Allocate specific time blocks for each subject"
                            },
                            {
                                subHeading: "Current Affairs:",
                                content: "Read newspapers like The Hindu and follow defence magazines"
                            },
                            {
                                subHeading: "Practice Mock Tests:",
                                content: "Regular practice to improve speed and accuracy"
                            },
                            {
                                subHeading: "Physical Fitness:",
                                content: "Stay fit as it helps in the SSB Interview and medical tests"
                            },
                        ]
                    },
                ]
            },
            {
                heading: "Why Choose CDS?",
                content: ``,
                points: [
                    {
                        subHeading: "",
                        content: "",
                        points: [
                            {
                                subHeading: "Serve the Nation:",
                                content: "Be a part of India’s prestigious Armed Forces"
                            },
                            {
                                subHeading: "Career Growth:",
                                content: "Excellent pay, perks, and leadership opportunities"
                            },
                            {
                                subHeading: "Adventure & Travel:",
                                content: "Explore new places and live a disciplined, adventurous life"
                            },
                            {
                                subHeading: "Job Security:",
                                content: "Strong career with pension benefits and lifelong respect"
                            },
                        ]
                    },
                ]
            },
            {
                heading: "Final Thoughts",
                content: `The CDS Exam is more than just an entry test; it’s the gateway to a fulfilling career
                    in the Indian Armed Forces. Whether you’re a male or female aspirant, the CDS
                    provides an opportunity to serve the nation with pride.`,
            },
        ],
        coachingDetails: {
            coachingFees: [
                {
                    title: "CDS IMA coaching fees:",
                    description: "₹ 26,000/-(Including Material)"
                },
                {
                    title: "CDS OTA Coaching Fees",
                    description: "₹ 22,000/-(Including Material)"
                }
            ],
            coachingDuration: [
                {
                    title: "Duration:",
                    description: "3-4 Months course"
                }
            ],
            coachingHostel: [
                {
                    title: "Hostel Fees(optional):",
                    description: "₹ 3500/- (Without Food)"
                }
            ]
        }

    },
    'afcat-written-coaching': {
        title: `NDA/NA`,

        sections: [
            {
                heading: "AFCAT WRITTEN COURSE",
                subHeading: "What is the AFCAT Exam? Complete Guide for Aspirants",
            },
            {
                heading: "Introduction",
                content: `Discover everything about the AFCAT Exam—conducted by IAF for Indian Air
                    Force recruitment. Learn about eligibility, exam pattern, important dates, and
                    preparation tips for male &; female candidates.`,
            },
            {
                heading: "What is the AFCAT Exam?",
                content: `The AFCAT (Air Force Common Admission Test) is a national-level entrance exam conducted by the
                    Indian Air Force (IAF). It selects candidates for various branches like Flying, Ground Duty (Technical
                    & Non-Technical), and Meteorology.`,
                points: [
                    {
                        subHeading: "Purpose:",
                        content: `To recruit officers in the Indian Air Force for a fulfilling career in aviation and
                            defence.`
                    },
                    {
                        subHeading: "Mode:",
                        content: "Written exam followed by the SSB Interview and medical examination."
                    },
                    {
                        subHeading: "Entry Types:",
                        content: "For both male and female candidates across different branches."
                    }
                ]
            },
            {
                heading: "Who Conducts the AFCAT Exam? (Keyword: Who Conducts AFCAT Exam?)",
                content: `The AFCAT Exam is conducted by the Indian Air Force (IAF) under the supervision of the Air Force
                        Recruitment Board.`,
                points: [
                    {
                        subHeading: "Frequency:",
                        content: "Twice a year (AFCAT I and AFCAT II)"
                    },
                    {
                        subHeading: "Official Website:",
                        content: "indianairforce.nic.in for notifications and updates"
                    },
                ]
            },
            {
                heading: "When is the AFCAT Exam Held? (Keyword: AFCAT Exam Dates)",
                content: ``,
                points: [
                    {
                        subHeading: "AFCAT I:",
                        content: "Held in February"
                    },
                    {
                        subHeading: "AFCAT II:",
                        content: "Held in August"
                    },
                    {
                        subHeading: "Exam Notification:",
                        content: "Released 4–5 months before the exam date"
                    },
                ]
            },
            {
                heading: "Pro Tip:",
                content: `Keep an eye on the official IAF website and notifications for the latest updates.`,
            },
            {
                heading: "Eligibility Criteria for the AFCAT Exam",
                content: `For Male Candidates:`,
                points: [
                    {
                        subHeading: "",
                        content: "Age Limit:",
                        points: [
                            {
                                subHeading: "Flying Branch:",
                                content: `20–24 years (must be between 20 to 24 years as of the date of
                                    commencement of training)`,
                            },
                            {
                                subHeading: "Ground Duty (Technical & Non-Technical):",
                                content: `20–26 years`,
                            },
                        ]
                    },
                    {
                        subHeading: "",
                        content: "Educational Qualification:",
                        points: [
                            {
                                subHeading: "Flying Branch:",
                                content: "Graduate in any discipline with 10+2 level Physics and Mathematics"
                            },
                            {
                                subHeading: "Ground Duty:",
                                content: `Graduate in any stream (for Non-Technical) or Engineering degree (for
                                    Technical)`
                            },
                        ]
                    },
                    {
                        subHeading: "Marital Status:",
                        content: "Unmarried",
                    },
                ]
            },
            {
                heading: "",
                content: `For Female Candidates:`,
                points: [
                    {
                        subHeading: "",
                        content: "Eligibility:",
                        points: [
                            {
                                subHeading: "Flying Branch:",
                                content: "20–24 years"
                            },
                            {
                                subHeading: "Ground Duty (Technical & Non-Technical):",
                                content: "20–26 years"
                            },
                            {
                                subHeading: "Marital Status:",
                                content: "Unmarried, widows, and divorcees (without children) are eligible"
                            },
                        ]
                    },
                    {
                        subHeading: "Educational Qualification:",
                        content: "Same as male candidates",
                    },
                    {
                        subHeading: "Marital Status:",
                        content: "Unmarried (for Flying Branch) and can be married for Ground Duty Branches",
                    },
                ]
            },
            {
                heading: "AFCAT Exam Pattern",
                content: `The exam consists of four sections:`,
                points: [
                    {
                        subHeading: "",
                        content: "",
                        points: [
                            {
                                subHeading: "General Awareness (25 marks):",
                                content: "History, Geography, Current Affairs, Defence, etc."
                            },
                            {
                                subHeading: "Verbal Ability in English (25 marks):",
                                content: "Vocabulary, Grammar, Comprehension"
                            },
                            {
                                subHeading: "Numerical Ability (25 marks):",
                                content: "Arithmetic, Algebra, Data Interpretation"
                            },
                            {
                                subHeading: "Reasoning and Military Aptitude (25 marks):",
                                content: "Logical reasoning, Spatial ability, Problem-solving"
                            },
                        ]
                    },
                    {
                        subHeading: "Total Marks:",
                        content: `300`,
                    },
                    {
                        subHeading: "Duration:",
                        content: "2 hours",
                    },
                    {
                        subHeading: "Mode:",
                        content: `Online (Computer-Based Test)`,
                    },
                    {
                        subHeading: "Negative Marking:",
                        content: "1/3rd mark deducted for incorrect answers",
                    },
                ]
            },
            {
                heading: "AFCAT Selection Process",
                content: ``,
                points: [
                    {
                        subHeading: "Written Exam:",
                        content: "Based on the pattern above"
                    },
                    {
                        subHeading: "SSB Interview:",
                        content: "Conducted for shortlisted candidates (psychological tests, GTO tasks, personal interview)"
                    },
                    {
                        subHeading: "Medical Examination:",
                        content: "Conducted at Air Force medical centres"
                    },
                    {
                        subHeading: "Merit List:",
                        content: "Final selection based on written exam, SSB, and medical fitness"
                    },
                ]
            },
            {
                heading: "AFCAT Training and Career Opportunities",
                content: ``,
                points: [
                    {
                        subHeading: "Training:",
                        content: "At Air Force Academy (AFA), Hyderabad"
                    },
                    {
                        subHeading: "Branches:",
                        content: "",
                        points: [
                            {
                                subHeading: "Flying Branch:",
                                content: "Pilot, Co-pilot"
                            },
                            {
                                subHeading: "Ground Duty (Technical):",
                                content: "Engineering, IT, Electronics"
                            },
                            {
                                subHeading: "Ground Duty (Non-Technical):",
                                content: "Administration, Logistics, Accounts, Education, Meteorology"
                            },
                        ]
                    },
                ]
            },
            {
                heading: "AFCAT Exam Preparation Tips",
                content: ``,
                points: [
                    {
                        subHeading: "Strong Foundation:",
                        content: "Focus on General Awareness and English comprehension"
                    },
                    {
                        subHeading: "Practice Mock Tests:",
                        content: "Improve speed and accuracy",
                    },
                    {
                        subHeading: "Current Affairs:",
                        content: "Read newspapers like The Hindu and follow defence magazines"
                    },
                    {
                        subHeading: "Physical Fitness:",
                        content: "Prepare for SSB and medical fitness requirements",
                    },
                ]
            },
            {
                heading: "Why Choose AFCAT?",
                content: ``,
                points: [
                    {
                        subHeading: "Serve the Nation:",
                        content: "Join the elite Indian Air Force"
                    },
                    {
                        subHeading: "Career Growth:",
                        content: "Leadership roles with opportunities for advanced training",
                    },
                    {
                        subHeading: "Adventure & Travel:",
                        content: "Experience the thrill of flying and serving in different terrains"
                    },
                    {
                        subHeading: "Prestige & Pride:",
                        content: "A career filled with respect, honour, and lifelong memories",
                    },
                ]
            },
            {
                heading: "Final Thoughts",
                content: `The AFCAT Exam is more than just an entrance test; it’s the gateway to a career filled with
                    adventure, leadership, and national service. Whether you’re male or female, AFCAT offers
                    incredible opportunities to soar high in the skies and serve with pride.`,
            },
        ],
        coachingDetails: {
            coachingFees: [
                {
                    title: "AFCAT coaching fees:",
                    description: "₹ 24,000/-(Including Material)"
                },
            ],
            coachingDuration: [
                {
                    title: "Duration:",
                    description: "3 Months course"
                }   
            ],
            coachingHostel: [
                {
                    title: "Hostel Fees(optional):",
                    description: "₹ 3500/- (Without Food)"
                }
            ]
        }
        
    },
    'capf-written-coaching': {
        title: `CAPF`,
        sections: [
            {
                heading: "CAPF WRITTEN COURSE",
                subHeading: "What is the CAPF Exam? Complete Guide for Aspirants",
            },
            {
                heading: "Introduction",
                content: `Discover everything about the CAPF Exam—conducted by UPSC for recruitment into the Central
                    Armed Police Forces (BSF, CISF, CRPF, ITBP, SSB). Learn about eligibility, exam pattern, important
                    dates, and preparation tips for male & female candidates.`,
            },
            {
                heading: "What is the CAPF Exam?",
                content: `The CAPF (Central Armed Police Forces) Exam is a national-level competitive exam conducted by the
                    Union Public Service Commission (UPSC). It recruits candidates for the post of Assistant
                    Commandant (AC) in the following forces:`,
                points: [
                    {
                        subHeading: `BSF (Border Security Force)`,
                    },
                    {
                        subHeading: "CRPF (Central Reserve Police Force)",
                    },
                    {
                        subHeading: "CISF (Central Industrial Security Force)",
                    },
                    {
                        subHeading: "ITBP (Indo-Tibetan Border Police)",
                    },
                    {
                        subHeading: "SSB (Sashastra Seema Bal)",
                    },
                    {
                        subHeading: `Purpose:`,
                        content: `To select officers for leadership roles in maintaining internal security, border
                            control, and counter-terrorism operations.`
                    },
                    {
                        subHeading: `Mode:`,
                        content: `Written exam, followed by SSB Interview and medical examination.`
                    },

                ]
            },
            {
                heading: "Who Conducts the CAPF Exam?",
                content: `The CAPF Exam is conducted by the Union Public Service Commission (UPSC), which also conducts
                        prestigious exams like IAS, IPS, and NDA.`,
                points: [
                    {
                        subHeading: "Frequency:",
                        content: "Annually (usually in August)"
                    },
                    {
                        subHeading: "Official Website:",
                        content: "www.upsc.gov.in for notifications and updates",
                    },
                ]
            },
            {
                heading: "When is the CAPF Exam Held?",
                content: ``,
                points: [
                    {
                        subHeading: "Exam Notification:",
                        content: "Released in April"
                    },
                    {
                        subHeading: "Written Exam:",
                        content: "Held in August",
                    },
                    {
                        subHeading: "SSB Interview & Medical:",
                        content: "Conducted after the written exam",
                    },
                ]
            },
            {
                heading: "Pro Tip:",
                content: `Regularly check the official UPSC website for updates and notifications.`,
            },
            {
                heading: "Eligibility Criteria for the CAPF Exam",
                content: "For Male Candidates:",
                points: [
                    {
                        subHeading: "Age Limit:",
                        content: "20–25 years (as of August of the exam year)"
                    },
                    {
                        subHeading: "Educational Qualification:",
                        content: "Bachelor’s degree from a recognized university"
                    },
                    {
                        subHeading: "Marital Status:",
                        content: `Unmarried candidates preferred (married candidates can apply for certain
                        forces like CISF)`
                    }
                ]
            },
            {
                heading: "",
                content: "For Female Candidates:",
                points: [
                    {
                        subHeading: "Eligibility:",
                        content: "Same as male candidates"
                    },
                    {
                        content: `Female candidates can apply for all CAPF forces except BSF (Combat roles), but can
                            join CISF, CRPF, ITBP, and SSB`
                    },
                ]
            },
            {
                heading: "CAPF Exam Pattern",
                content: "FThe CAPF exam consists of three stages:",
                points: [
                    {
                        subHeading: "Written Exam: (Paper I + Paper II)",
                        content: "",
                        points: [
                            {
                                subHeading: "Paper I (General Ability and Intelligence): 250 marks (Objective Type)",
                                content: `Subjects: General Mental Ability, General Science, Current Events, Indian
                                    Polity, History, Geography, etc.`
                            },
                            {
                                subHeading: "Paper II (Essay & Comprehension): 200 marks (Descriptive Type)",
                                content: "Essay writing, comprehension, and précis writing"
                            },
                        ]
                    },
                    {
                        subHeading: "SSB Interview: 150 marks",
                        content: "Psychological tests, Group Discussion, and Personal Interview",
                    },
                    {
                        subHeading: "Medical Examination:",
                        content: "Conducted at designated medical centres",
                    },
                    {
                        subHeading: "Negative Marking:",
                        content: "1/3rd mark deducted for incorrect answers in Paper I",
                    },
                ]
            },
            {
                heading: "CAPF Selection Process",
                points: [
                    {
                        subHeading: "Written Exam:",
                        content: "Objective and descriptive papers",
                    },
                    {
                        subHeading: "SSB Interview:",
                        content: "Psychological tests, Group Task Exercises, and personal interview",
                    },
                    {
                        subHeading: "Medical Examination:",
                        content: "Physical and medical fitness assessment",
                    },
                    {
                        subHeading: "Merit List:",
                        content: "Final selection based on performance in all stages",
                    },
                ]
            },
            {
                heading: "Career Opportunities After CAPF",
                points: [
                    {
                        subHeading: "Post:",
                        content: "Assistant Commandant (AC)",
                    },
                    {
                        subHeading: "Forces:",
                        content: "BSF, CRPF, CISF, ITBP, SSB",
                    },
                    {
                        subHeading: "Role:",
                        content: `Leadership, administration, border management, internal security, counter-terrorism,
                            disaster management`,
                    },
                ]
            },
            {
                heading: "CAPF Exam Preparation Tips",
                points: [
                    {
                        subHeading: "Understand the Syllabus:",
                        content: "Focus on General Knowledge, Current Affairs, and Mental Ability",
                    },
                    {
                        subHeading: "Practice Essay Writing:",
                        content: "Enhance your writing skills for Paper II",
                    },
                    {
                        subHeading: "Mock Tests:",
                        content: `Regular practice for Paper I and descriptive tests`,
                    },
                    {
                        subHeading: "Current Affairs:",
                        content: `Read newspapers like The Hindu and follow defence-related updates`,
                    },
                    {
                        subHeading: "Physical Fitness:",
                        content: `Maintain fitness for the medical test and SSB interview`,
                    },
                ]
            },
            {
                heading: "Why Choose CAPF?",
                points: [
                    {
                        subHeading: "Serve the Nation:",
                        content: "Play a vital role in maintaining internal security",
                    },
                    {
                        subHeading: "Career Growth:",
                        content: `Opportunities for promotion to higher ranks like Deputy Commandant,
                            Commandant, etc.`,
                    },
                    {
                        subHeading: "Adventure & Leadership:",
                        content: `Leadership roles with responsibilities in diverse environments`,
                    },
                    {
                        subHeading: "Prestige & Pride:",
                        content: `A career filled with honour, respect, and national service`,
                    },
                ]
            },
            {
                heading: "Final Thoughts",
                content: `The CAPF Exam is not just a test. it’s the gateway to a career filled with challenge, adventure, and
                    national pride. Whether you’re male or female, CAPF offers a chance to serve your country while
                    enjoying a fulfilling career.`,
            }
        ],
        coachingDetails: {
            coachingFees: [
                {
                    title: "CAPF coaching fees:",
                    description: "₹ 30,000/-(Including Material)"
                },
            ],
            coachingDuration: [
                {
                    title: "Duration:",
                    description: "3 Months course"
                }
            ],
            coachingHostel: [
                {
                    title: "Hostel Fees(optional):",
                    description: "₹ 3500/- (Without Food)"
                }
            ]
        }
    },
}
