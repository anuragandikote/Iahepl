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
        title: "NDA / NA – Officer Entry Exam after 10+2",
        sections: [
            {
                heading: "NDA Written Course",
                subHeading: "Complete Guide for Aspirants",
                content: "Learn everything about joining the NDA – from benefits, career growth, pay, and more."
            },
            {
                heading: "Introduction",
                content: "The NDA offers an exciting opportunity to serve in the Indian Armed Forces. This guide covers eligibility, exam process, training, and preparation tips."
            },
            {
                heading: "What is the NDA Exam?",
                content: "A national-level exam by UPSC to recruit candidates for the Army, Navy, and Air Force.",
                points: [
                    { subHeading: "Purpose", content: "The National Defence Academy (NDA) is India’s premier joint services academy where candidates are trained to become officers in the Army, Navy, and Air Force at young age" },
                    { subHeading: "Steps", content: "Written test + SSB Interview + Medical exam + All India Merit List" },
                    { subHeading: "Training", content: "3 years at NDA, then training at respective academies (IMA/AFA/INA)" }
                ]
            },
            {
                heading: "Who Conducts the Exam?",
                content: "Conducted by UPSC twice a year (NDA I & II).",
                points: [
                    { subHeading: "Official Website", content: "www.upsc.gov.in", link: "https://www.upsc.gov.in" }
                ]
            },
            {
                heading: "Exam Dates",
                content: "Held twice annually with notifications 4–5 months in advance.",
                points: [
                    { subHeading: "NDA I", content: "April" },
                    { subHeading: "NDA II", content: "September" }
                ]
            },
            {
                heading: "Eligibility",
                content: "Eligibility is same for male and female candidates.",
                points: [
                    {
                        subHeading: "Male Candidates",
                        points: [
                            { subHeading: "Age", content: "16.5–19.5 years" },
                            { subHeading: "Education", content: "10+2 with any stream for Army/Navy/Air Force" },
                            {subHeading: '', content: 'Flying branch / Technical entry PCM is mandatory'},
                            { subHeading: "Marital Status", content: "Unmarried" }
                        ]
                    },
                    {
                        subHeading: "Female Candidates",
                        points: [
                            { subHeading: "Age", content: "16.5–19.5 years" },
                            { subHeading: "Education", content: "10+2 with any stream for Army/Navy/Air Force" },
                            {subHeading: '', content: 'Flying branch / Technical entry PCM is mandatory'},                            { subHeading: "Marital Status", content: "Unmarried" }
                        ]
                    },
                    {
                        content: "Note: Female candidates can apply for Army and Air Force wings."
                    }
                ]
            },
            {
                heading: "Exam Pattern",
                content: "Two papers – Mathematics and General Ability Test.",
                points: [
                    {
                        subHeading: "Mathematics (300 marks)",
                        points: [
                            { subHeading: "Topics", content: "Algebra, Calculus, Geometry, Statistics, Trigonometry, etc..." },
                            { subHeading: "Duration", content: "2.5 hours" }
                        ]
                    },
                    {
                        subHeading: "General Ability Test (600 marks)",
                        points: [
                            { subHeading: "English", content: "Grammar, vocabulary, comprehension" },
                            { subHeading: "General Knowledge", content: "Physics, Chemistry, History, Geography, etc." },
                            { subHeading: "Duration", content: "2.5 hours" }
                        ]
                    },
                    { subHeading: "Mode", content: "Offline (pen and paper)" },
                    { subHeading: "Negative Marking", content: "1/3rd mark deducted for wrong answers" }
                ]
            },
            {
                heading: "Selection Process",
                content: "4-stage process for selection.",
                points: [
                    { subHeading: "Written Exam", content: "As per the exam pattern above" },
                    { subHeading: "SSB Interview", content: "Navigate to SSB Interview screen for detailed info"},
                    { subHeading: "Medical Exam", content: "Conducted at Military hospitals" },
                    { subHeading: "Merit List", content: "Based on written, SSB, and medical performance" }
                ]
            },
            {
                heading: "Training Details",
                points: [
                    { subHeading: "Duration", content: "3 years at NDA - Khadakwasla,Pune" },
                    {
                        subHeading: "Post-NDA Academies",
                        content: 'Advanced training before commissioning',
                        points: [
                            { subHeading: "Army", content: "Indian Military Academy (IMA)" },
                            { subHeading: "Navy", content: "Indian Naval Academy (INA)" },
                            { subHeading: "Air Force", content: "Air Force Academy (AFA)" }
                        ]
                    }
                ]
            },
            {
                heading: "Preparation Tips",
                points: [
                    { subHeading: "Master the Basics", content: "Focus on Maths, English fundamentals & NCERT books" },
                    { subHeading: "Stay Updated", content: "Read newspapers & defence magazines" },
                    { subHeading: "Mock Tests", content: "Build speed and accuracy" },
                    { subHeading: "Fitness", content: "Stay physically fit for SSB and medical rounds" }
                ]
            },
            {
                heading: "Why Join NDA?",
                points: [
                    {
                        subHeading: "Serve the Nation",
                        content: "Directly contribute to national security"
                    },
                    {
                        subHeading: "Top Education",
                        content: "Balanced academics and military training"
                    },
                    {
                        subHeading: "Fitness & Discipline",
                        content: "Develop physical and mental strength"
                    },
                    {
                        subHeading: "Career Growth",
                        content: "Opportunities in various military roles"
                    },
                    {
                        subHeading: "International Exposure",
                        content: "Joint exercises and global missions"
                    },
                    {
                        subHeading: "Camaraderie",
                        content: "Lifelong friendships and teamwork"
                    },
                    {
                        subHeading: "Leadership Skills",
                        content: "Grow as a confident leader"
                    },
                    {
                        subHeading: "Adventure",
                        content: "Skydiving, trekking, and more"
                    },
                    {
                        subHeading: "Travel",
                        content: "Explore India and abroad"
                    },
                    {
                        subHeading: "Attractive Pay",
                        content: "High salary + allowances + benefits"
                    }
                ]
            },
            {
                heading: "Final Thoughts",
                content: "NDA is not just an exam—it’s the first step toward an honourable and adventurous career in the Armed Forces."
            }
        ],
        coachingDetails: {
            coachingFees: [
                {
                    title: "Coaching Fees",
                    description: "₹26,000 (Includes Study Material)"
                }
            ],
            coachingDuration: [
                {
                    title: "Duration",
                    description: "3–4 Months"
                }
            ],
            coachingHostel: [
                {
                    title: "Hostel (Optional)",
                    description: "₹4,000 (Without Food)"
                }
            ],
        }
    },
    'cds-written-coaching': {
        title: `Crack CDS – Join the Elite `,
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
                        content: "Written exam followed by SSB Interview, medical examination & All India Rank"
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
                        content: "for notifications and updates - https://www.upsc.gov.in",
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
                                content: "19–23 years"
                            },
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
                        subHeading: "",
                        content: "OTA (Officers Training Academy):",
                        points: [
                            {
                                subHeading: "",
                                content: "19–25 years"
                            },
                        ]
                    },
                    {
                        subHeading: "",
                        content: "Educational Qualification:",
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
                        content: "IMA (Indian Military Academy):",
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
                        content: "OTA (Officers Training Academy):",
                        points: [
                            {
                                subHeading: "English (100 marks)",
                                content: "Objective type, tests grammar and vocabulary"
                            },
                            {
                                subHeading: "General Knowledge (100 marks)",
                                content: "Includes current affairs, history, geography, etc."
                            }
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
                                content: "For shortlisted candidates (stage-I, psychological tests, GTO tasks, personal interview)"
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
                    description: "₹ 4,000/- (Without Food)"
                }
            ]
        }

    },
    'afcat-written-coaching': {
        title: `AFCAT: Your Wings to the Indian Air Force`,
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
                        content: "Written exam followed by the SSB Interview, medical examination & All India Rank"
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
                        content: "https://afcat.cdac.in - for notifications and updates"
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
                        content: "Released 2-3 months before the exam date"
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
                    {
                        subHeading: "",
                        content: "",
                        points: [
                            {
                                subHeading: "General Awareness (20Q's - 60 marks):",
                                content: "History, Geography, Current Affairs, Defence, etc."
                            },
                            {
                                subHeading: "Verbal Ability in English (30Q's - 90 marks):",
                                content: "Vocabulary, Grammar, Comprehension"
                            },
                            {
                                subHeading: "Numerical Ability (15Q's - 45 marks):",
                                content: "Arithmetic, Algebra, Data Interpretation"
                            },
                            {
                                subHeading: "Reasoning and Military Aptitude (35Q's - 105 marks):",
                                content: "Logical reasoning, Spatial ability, Problem-solving"
                            },
                            {
                                subHeading: "What is EKT in AFCAT?",
                                content: "EKT (Engineering Knowledge Test) is an additional paper in AFCAT, only for candidates applying to the Ground Duty (Technical) branch of the Indian Air Force."
                            },
                            {
                                subHeading: "Eligible Candidates For EKT:",
                                content: "B.E. / B.Tech graduates applying for Ground Duty (Technical Branch) &  Candidates selecting Aeronautical Engineering (Mechanical or Electronics) as their preference during AFCAT"
                            },
                        ]
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
        title: `CAPF Preparation – Your Path to Central Armed Police Forces`,
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
