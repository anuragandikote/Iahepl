export type SSBServiceContent = {
    title: string;
    description: string;
    process: {
        stage: string;
        description: string;
    }[];
    // Add the day1 property to the type definition
    day1?: {
        title: string;
        description: string;
        oirTest: {
            title: string;
            points: string[];
        };
        ppdtTest: {
            title: string;
            points: string[];
        };
        results: {
            title: string;
            points: string[];
        };
    };
    day2?: {
        title: string;
        description: string;
        tat: {
            title: string;
            points: string[];
        };
        wat: {
            title: string;
            points: string[];
        };
        srt: {
            title: string;
            points: string[];
        };
        note: string[];
    };
    day3?: {
        title: string;
        description: string;
        gd: {
            title: string;
            points: string[];
        };
        gpe: {
            title: string;
            points: string[];
        };
        individualLecturette: {
            title: string;
            points: string[];
        };
        pgt: {
            title: string;
            points: string[];
        };
        gor: {
            title: string;
            points: string[];
        };
        hgt: {
            title: string;
            points: string[];
        };
    };
    day4?: {
        title: string;
        description: string;
        individualObstacles: {
            title: string;
            points: string[];
        };
        commandTask: {
            title: string;
            points: string[];
        };
        finalGroupTask: {
            title: string;
            points: string[];
        },
        note: string[]
    };

    day5?: {
        title: string;
        description: string;
        closingAdd: {
            title: string;
            points: string[];
        },
        boardConference: {
            title: string;
            points: string[];
        },
        announcementOfResults: {
            title: string;
            points: string[];
        }
    },

    preparationTips: {
        title: string;
        points: string[];
    };

    coachingDetails: {
        title: string;
        points: string[];
    };
    eligibility: string[];
    preparation: string[];
    features: string[];
    testimonials?: {
        name: string;
        rank: string;
        message: string;
    }[];
}

export const ssbServiceData: { [key: string]: SSBServiceContent } = {
    'ssb-procedure': {
        title: 'SSB (Service Selection Board) – Recruitment for Army, Navy & Air Force',
        description: `The Service Selection Board (SSB) is set up by the Ministry of Defence to recruit officers
        for the Indian Army, Navy, and Air Force. It’s a comprehensive 5-day selection process
        conducted by senior defence officers (Major, Colonel, Lt Colonel), along with psychologists
        and Group Testing Officers (GTOs), to evaluate candidates's leadership skills, mental
        agility, and personality traits.`,
        process: [
            {
                stage: '1. Written Exam Shortlisting:',
                description: 'Candidates who pass the written exam (CDS/AFCAT/NDA/NA) and are called for the SSB interview.'
            },
            {
                stage: '2. Direct Entry for SSB Interview',
                description: ''
            },
            {
                stage: `3. Candidates can apply for the SSB Interview through direct entry schemes like
            TES10+2 (Army, Navy)/TGC/SSC TECH (Male and Female) Army, SSC Tech
            (male and Female) Navy, NCC special entry, ACC entry, SCO entry, PS/SL entry,
            JAG, etc... which are designed for those who meet the eligibility criteria without
            needing to clear a written exam first`,
                description: ''
            },
            {
                stage: '4. Reporting:',
                description: 'Candidates must report one day before the interview for document verification and form filling. \n• If reporting at 2:00 PM, testing starts the next day\n• If reporting at 6:00 AM, document verification and screening happen on the same day\n• Bring all original documents and required number of photocopies\n• Dress formally for reporting day'
            },
            {
                stage: '5. Reporting Venue:',
                description: 'As per the call letter, often at the Moment Control Office (MCO)'
            }
        ],


        // Add the day1 content based on the image
        day1: {
            title: 'Day 1: Screening Test (Stage I) – SSB Interview Process',
            description: 'The Screening Test is the first step in the SSB Interview Process, designed to shortlist candidates for Stage II testing. It includes two key assessments:',
            oirTest: {
                title: "1. Officer's Intelligence Rating (OIR) Test",
                points: [
                    'A logical and analytical aptitude test.',
                    'Candidates are scored based on the number of correct answers, with an intelligence rating from I to V.',
                    'A higher rating increases the chances of progressing through the SSB stages.'
                ]
            },
            ppdtTest: {
                title: '2. Picture Perception and Discussion Test (PPDT)',
                points: [
                    "Picture Perception: You'll view a picture for 30 seconds, then describe the scene—characters, their emotions, and the situation.",
                    'Story Writing: Write a story based on your perception.',
                    'Group Discussion: In groups of 14–15, candidates narrate their stories. The group discusses and forms a consensus story, selecting a leader to present it.'
                ]
            },
            results: {
                title: '3. Results:',
                points: [
                    'After a 2–3 hour break, screening results are announced.',
                    'Selected candidates receive new chest numbers for the next stage.',
                    'Non-selected candidates are provided their Travel Allowance (TA) (if applicable) and dropped back to the railway station.'
                ]
            }
        },

        // DAY 2
        day2: {
            title: 'Day 2: Psychological Test (Stage II) – SSB Interview Process',
            description: `On Day 2 of the SSB Interview, candidates undergo the Psychological Test, designed to evaluate
                mental strength, problem-solving abilities, and personality traits. The test includes three key
                components:`,
            tat: {
                title: "1. Thematic Appreciation Test (TAT)",
                points: [
                    'A logical and analytical aptitude test.',
                    'Candidates are scored based on the number of correct answers, with an intelligence rating from I to V.',
                    'A higher rating increases the chances of progressing through the SSB stages.'
                ]
            },
            wat: {
                title: '2. Word Association Test (WAT)',
                points: [
                    "Picture Perception: You'll view a picture for 30 seconds, then describe the scene—characters, their emotions, and the situation.",
                    'Story Writing: Write a story based on your perception.',
                    'Group Discussion: In groups of 14–15, candidates narrate their stories. The group discusses and forms a consensus story, selecting a leader to present it.'
                ]
            },
            srt: {
                title: '3. Situation Reaction Test (SRT):',
                points: [
                    'After a 2–3 hour break, screening results are announced.',
                    'Selected candidates receive new chest numbers for the next stage.',
                    'Non-selected candidates are provided their Travel Allowance (TA) (if applicable) and dropped back to the railway station.'
                ]
            },
            note: [
                'On Day 2, your Personal Interview may also begin. You’ll be informed in advance about the schedule.'
            ]
        },


        // DAY 3
        day3: {
            title: 'Day 3: GTO 1 (Group Testing Officer Tasks) – SSB Interview Process',
            description: `Day 3 focuses on Group Testing Officer (GTO) tasks, designed to evaluate your leadership,
                teamwork, problem-solving, and communication skills. Remember, these are group tasks, so the
                focus is on collaboration, not competition.`,
            gd: {
                title: "1. Group Discussion (GD)",
                points: [
                    'Group Size: 8–12 candidates based on chest numbers.',
                    'First Topic: Choose from two options, 3 minutes to think, then discuss.',
                    'Second Topic: Compulsory topic for discussion.',
                    'Key Skills Assessed: Communication, leadership, coordination, listening, knowledge, and confidence.'
                ]
            },
            gpe: {
                title: '2. Group Planning Exercise (GPE) / Military Planning Exercise (MPE)',
                points: [
                    "GPE: Solve critical situations as a team, providing individual solutions followed by a group discussion.",
                    'MPE: Face tougher scenarios, allocating tasks based on priority, showcasing leadership and problem-solving abilities.',
                    'Observation: The GTO assesses your Officer-Like Qualities (OLQs).'
                ]
            },
            individualLecturette: {
                title: '3. Individual Lecturette',
                points: [
                    'Task: Deliver a 3-minute talk on a chosen topic from four options provided.',
                    'Purpose: Assess clarity of thought, expression, and public speaking skills.',
                ]
            },
            pgt: {
                title: '4. Progressive Group Task (PGT) (Outdoor Task):',
                points: [
                    'Objective: Overcome obstacles as a team using available materials (wooden logs, planks, ropes).',
                    'Duration: 40–60 minutes with increasing difficulty.',
                    'Note: Teamwork is key to success.'
                ]
            },
            gor: {
                title: '5. Group Obstacle Race:',
                points: [
                    'Challenge: Navigate six obstacles with a “snake-like” load to carry, emphasizing coordination and endurance.',
                ]
            },
            hgt: {
                title: '6. Half Group Task:',
                points: [
                    'Structure: Group divided into smaller teams (5–6 members).',
                    'Task: Similar to PGT but with fewer members, allowing for more individual input.',
                    'Rules: Strict adherence to guidelines; violations are not tolerated.'
                ]
            },
        },

        // DAY 4 
        day4: {
            title: 'Day 4: GTO 2 – SSB Interview Process',
            description: `Day 4 focuses on the final set of Group Testing Officer (GTO) tasks, designed to assess your physical endurance, leadership, decision-making, and teamwork.`,
            individualObstacles: {
                title: '1. Individual Obstacles',
                points: [
                    'Purpose: Evaluate stamina, endurance, courage, and boldness.',
                    'Structure:',
                    '  10 Obstacles (e.g., Commando Walk, Double Ditch Jump, Tarzan Swing, Burma Bridge, Rope Climbing).',
                    '  Time Limit: 3 minutes per obstacle.',
                    '  Process:',
                    '    – The first candidate starts when the GTO blows the whistle.',
                    '    – At 2:30 minutes, a second whistle signals the candidate to wrap up and the next to get ready.',
                    'Preparation Tips: Build physical fitness with exercises like running, pull-ups, and push-ups. Confidence and courage are key—fear is not a soldier’s trait!'
                ]
            },
            commandTask: {
                title: '2. Command Task',
                points: [
                    `Role: You act as the leader, selecting two subordinates from your group.`,
                    `Selection Criteria:
                        o Choose candidates who can think critically, find multiple solutions, and execute
                        plans effectively.
                        o Opt for individuals skilled in handling ropes, planks, and heavy loads.`,
                    `Objective: Lead the team to cross obstacles using available materials.`
                ]
            },
            finalGroupTask: {
                title: '3. Final Group Task',
                points: [
                    `Overview: The last task to showcase your leadership and problem-solving skills.`,
                    `Key Features:
                        o One major obstacle to cross, requiring quick decision-making and coordination.
                        o Out-of-Bounds Areas: Marked with black, white, and red colors—these areas must
                        be avoided.
                        o Materials Provided: Wooden planks, logs, and ropes to devise solutions.
                        o Techniques: Apply methods like cantilever and fulcrum to solve the task.`,
                    `Note: Violating rules requires task repetition.`
                ]
            },
            note: [`NOTE : "You will be Infor in advance about your Personal Interview`]
        },

        // DAY 5
        day5: {
            title: 'Day 5: Conference Day – SSB Interview Process',
            description: `Day 5 marks the final day of the SSB Interview Process, focusing on the Board Conference and the
                announcement of results. This day is crucial as it determines your future in the armed forces.`,
            closingAdd: {
                title: '1. Closing Add:',
                points: [
                    `Purpose: To provide a final overview of the SSB process.
                         Highlights:
                        o Explanation of the selection system and key qualities sought in candidates.
                        o Insights into the Officer-Like Qualities (OLQs) valued in the armed forces.
                        o An interactive session for candidates to voice any concerns, suggestions, or
                        feedback regarding their SSB experience.`
                ]
            },
            boardConference: {
                title: '2. Board Conference:',
                points: [
                    `Structure:
                        o Chaired by the President and Deputy President, with GTOs, Psychologists, and
                        Interviewing Officers in attendance.
                        o Each candidate’s performance is reviewed in detail by the assessors.
                        o A consensus is reached based on the candidate’s demonstrated abilities across all
                        SSB stages.
                         Key Points:
                        o Candidates appear individually before the board.
                        o Questions are asked to assess final impressions and clarity.
                        o Final decisions on recommendations and marks are made.`
                ]
            },
            announcementOfResults: {
                title: '3. Announcement of Results:',
                points: [
                    `The Technical Officer announces the final results after evaluating all candidates.
                     Recommended Candidates: Proceed to the medical examination, which can take up to a
                    week.
                     Non-Recommended Candidates: Provided with Travel Allowance (TA) (if applicable) and
                    dropped back to the railway station.`
                ]
            }
        },

        preparationTips: {
            title: 'Preparation Tips to Crack the SSB Interview',
            points: [
                `Improve General Knowledge: Stay updated on current affairs, defence news, and national
                    issues.`,
                `Develop Leadership Skills: Participate in group activities, sports, and leadership roles.`,
                `Practice Communication: Work on clarity, confidence, and articulation.`,
                `Stay Physically Fit: Regular exercise to improve stamina and endurance.`,
                `Mock Interviews: Practice with peers or mentors to get feedback.`
            ]
        },

        coachingDetails: {
            title: 'Coaching Details',
            points: [
                'SSB coaching fees : ₹ 12000/-',
                'Duration : 15days (Except Sunday and Govt Holidays)',
                'Hostel Fees(optional): ₹ 2000/- (Without Food)',
            ]
        },


        eligibility: [
            'Educational qualification as per the specific entry',
            'Age limits as per the specific entry',
            'Physical and medical standards as per Army requirements',
            'Must have cleared the written examination (if applicable)'
        ],
        preparation: [
            'Personality development',
            'Communication skills enhancement',
            'Physical fitness training',
            'Mock interviews and feedback sessions',
            'GTO task practice and strategies',
            'Psychological test preparation'
        ],
        features: [
            'Experienced trainers with military background',
            'Realistic SSB environment simulation',
            'Comprehensive study materials',
            'Individual attention and personalized feedback',
            'Regular mock tests and evaluations',
            'Physical training facilities'
        ],
        testimonials: [
            {
                name: 'Lt. Rahul Sharma',
                rank: 'IMA, Dehradun',
                message: 'The coaching provided by Impact Academy was instrumental in my success at the SSB. The mock interviews and GTO tasks prepared me thoroughly.'
            },
            {
                name: 'Capt. Priya Singh',
                rank: 'OTA, Chennai',
                message: 'The psychological test preparation and personality development sessions helped me understand my strengths and areas of improvement.'
            }
        ]
    }
};

export default ssbServiceData;


        