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

export const ssbServiceData = {
    'ssb-procedure': {
        title: 'SSB (Service Selection Board) – Recruitment for Army, Navy & Air Force',
        description: `The Service Selection Board (SSB) is set up by the Ministry of Defence to recruit officers
for the Indian Army, Navy, and Air Force. It’s a comprehensive 5-day selection process
conducted by senior defence officers...`,

        sections: [
            {
                title: 'SSB Procedure',
                content: [
                    {
                        label: '1. Written Exam Shortlisting:',
                        text: ['Candidates who pass the written exam (CDS/AFCAT/NDA/NA) and are called for the SSB interview.']
                    },
                    {
                        label: '2. Direct Entry Schemes:',
                        text: ['Candidates can apply for the SSB Interview through direct entry schemes like TES10+2 (Army, Navy), TGC, SSC(T) Male & Female (Army/Navy), NCC special entry , UES entry']
                    },
                    {
                        label: '3. Reporting:',
                        text: ['If reporting at 2:00 PM, test starts the next day' ,' If reporting at 6:00 AM, test starts the same day.']
                    },
                    {
                        label: '4. Reporting Venue:',
                        text: ['As per the call letter, often at the Moment Control Office (MCO)']
                    }
                ]
            },
            {
                title: 'Day 1: Screening Test (Stage I)',
                content: [
                    {
                        label: "1. Officer's Intelligence Rating (OIR) Test",
                        text: [
                            'A logical and analytical aptitude test.',
                            'Candidates are scored based on the number of correct answers.',
                            'A higher rating increases chances of progressing.'
                        ]
                    },
                    {
                        label: '2. Picture Perception and Discussion Test (PPDT)',
                        text: [
                            'Picture Perception: View a picture for 30 seconds.',
                            'Story Writing: 4-min to write a story based on perception.',
                            'Group Discussion: Narrate and discuss as a group.'
                        ]
                    },
                    {
                        label: '3. Results',
                        text: [
                            'After a 2–3 hour break, screening results are announced.',
                            'Selected candidates get new chest numbers.',
                            'Others are dropped back to the railway station.'
                        ]
                    }
                ]
            },
            {
                title: 'Day 2: Psychological Test (Stage II)',
                content: [
                    {
                        label: '1. Thematic Appreciation Test (TAT)',
                        text: ['Write 11 stories based on shown pictures.', '12th picture will be blank, student has to imagine his/her own picture and write the story']
                    },
                    {
                        label: '2. Word Association Test (WAT)',
                        text: ['60 words shown for 15 seconds each. Student has to write a sentence for each word.']
                    },
                    {
                        label: '3. Situation Reaction Test (SRT)',
                        text: ['60 hypothetical situations in 30 seconds each. student has to write a reaction for each situation.']
                    },
                    {
                        label: 'Note',
                        text: ['Your personal interview may begin on Day 2.']
                    }
                ]
            },
            {
                title: 'Day 3: GTO Day 1',
                content: [
                    {
                        label: '1. Group Discussion',
                        text: ['Group Size: 8–12', 'Discuss two topics.']
                    },
                    {
                        label: '2. Group Planning Exercise (GPE)',
                        text: ['Solve critical scenarios with a group.']
                    },
                    {
                        label: '3. Lecturette',
                        text: ['3-minute individual speech.']
                    },
                    {
                        label: '4. Progressive Group Task (PGT)',
                        text: ['Outdoor obstacle course with materials.']
                    },
                    {
                        label: '5. Group Obstacle Race (GOR)',
                        text: ['Cross obstacles with coordination.']
                    },
                    {
                        label: '6. Half Group Task (HGT)',
                        text: ['Smaller group version of PGT.']
                    }
                ]
            },
            {
                title: 'Day 4: GTO Day 2',
                content: [
                    {
                        label: '1. Individual Obstacles',
                        text: [
                            'Complete 10 obstacles in 3 minutes.',
                            'Assesses stamina and courage.'
                        ]
                    },
                    {
                        label: '2. Command Task',
                        text: [
                            'You lead a team through obstacles.',
                            'Choose capable subordinates.'
                        ]
                    },
                    {
                        label: '3. Final Group Task',
                        text: ['One last obstacle task for the team.']
                    },
                    {
                        label: 'Note',
                        text: ['You’ll be informed in advance about your personal interview.']
                    }
                ]
            },
            {
                title: 'Day 5: Conference & Result',
                content: [
                    {
                        label: '1. Closing Add',
                        text: ['Overview of process, OLQs, Q&A session.']
                    },
                    {
                        label: '2. Board Conference',
                        text: ['Panel discussion with every candidate.']
                    },
                    {
                        label: '3. Results Announcement',
                        text: ['Recommended candidates go for medicals.']
                    }
                ]
            },
            {
                title: 'Preparation Tips',
                content: [
                    {text: ['Improve General Knowledge']},
                    {text: ['Practice communication & leadership']},
                    {text: ['Stay physically fit']},
                    {text: ['Join mock interviews']},
                    {text: ['Work on OLQs']}
                ]
            },
            {
                title: 'Coaching Details',
                content: [
                    {text: ['Fees: ₹13000/-']},
                    {text: ['Duration: 15 days (Excl. Sundays/Govt. Holidays)']},
                    {text: ['Hostel (Optional): ₹2000/- (Without Food)']}
                ]
            },
            {
                title: 'Eligibility',
                content: [
                    {text: ['Educational qualification as per entry']},
                    {text: ['Age limits as per entry']},
                    {text: ['Army physical & medical standards']},
                    {text: ['Cleared written exam (if applicable)']}
                ]
            },
            {
                title: 'Preparation Inclusions',
                content: [
                    {text: ['Personality development']},
                    {text: ['Physical training & mock interviews']},
                    {text: ['Psychological & GTO task preparation']}
                ]
            },
            {
                title: 'Features',
                content: [
                    {text: ['Experienced ex-military trainers']},
                    {text: ['Mock tests, study material, simulations']},
                    {text: ['Personalized feedback & physical training']}
                ]
            }
        ]
    }
}

export default ssbServiceData;


