"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import Link from "next/link";
import { use } from "react";
import {
    Box,
    Container,
    Typography,
} from "@mui/material";
import { programsData } from "@/data/programsData";

type Params = Promise<{ program: string }>;

export interface ProgramSubPoint {
    subHeading?: string;
    content: string;
}

export interface ProgramPoint {
    subHeading?: string;
    content?: string;
    points?: ProgramSubPoint[];
}

export interface ProgramSection {
    heading: string;
    subHeading?: string;
    content?: string;
    points?: ProgramPoint[];
}

export interface CoachingDetailItem {
    title: string;
    description: string;
}

export interface CoachingDetails {
    coachingFees: CoachingDetailItem[];
    coachingDuration: CoachingDetailItem[];
    coachingHostel: CoachingDetailItem[];
}

export interface ProgramContent {
    title: string;
    sections: ProgramSection[];
    coachingDetails: CoachingDetails;
}

const colorPalette = ['#fff0f0', '#f0faff', '#f9f9f0', '#f3f0ff'];

export default function ProgramPage({ params }: { params: Params }) {
    const { program: programKey } = use(params);
    const program = programsData[programKey];
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
        );
    }

    return (
        <div className="bg-white mt-14">
            <Container maxWidth="lg" sx={{ py: 10 }}>
                {/* Title */}
                <Typography
                    fontWeight={800}
                    textAlign="center"
                    sx={{
                        fontSize: {
                            xs: "1.75rem",
                            sm: "2.25rem",
                            md: "2.75rem",
                        },
                        mb: 6,
                        color: "#a68272",
                    }}
                >
                    {program.title}
                </Typography>

                {/* Sections */}
                {program.sections.map((sectionData, sectionIdx) => {
                    const section = sectionData as ProgramSection; // 👈 Assert the type

                    return (
                        <Box key={sectionIdx} sx={{ mt: 6, pb: 4, borderBottom: "1px solid #eee" }}>
                            {section.heading && (
                                <Typography
                                    variant="h5"
                                    fontWeight={700}
                                    gutterBottom
                                    color="text.primary"
                                >
                                    {section.heading}
                                </Typography>
                            )}

                            {section.subHeading && (
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={500}
                                    color="text.secondary"
                                    sx={{ mb: 1 }}
                                >
                                    {section.subHeading}
                                </Typography>
                            )}

                            {section.content && (
                                <Typography sx={{ mb: 3, color: "#555" }}>
                                    {section.content}
                                </Typography>
                            )}

                            {Array.isArray(section.points) && section.points.length > 0 && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 3,
                                        justifyContent: { xs: "center", sm: "flex-start" },
                                    }}
                                >
                                    {section.points.map((point, pointIdx) => (
                                        <Box
                                            key={pointIdx}
                                            sx={{
                                                flex: {
                                                    xs: "1 1 100%",
                                                    sm: "1 1 calc(50% - 24px)",
                                                    md: "1 1 calc(33.333% - 24px)",
                                                },
                                                maxWidth: {
                                                    xs: "100%",
                                                    sm: "calc(50% - 24px)",
                                                    md: "calc(33.333% - 24px)",
                                                },
                                                border: "1px solid #eee",
                                                p: { xs: 2, sm: 3 },
                                                mt: 2,
                                                borderRadius: 3,
                                                backgroundColor: colorPalette[sectionIdx % colorPalette.length],
                                                transition: "transform 0.2s",
                                                "&:hover": {
                                                    transform: "translateY(-4px)",
                                                },
                                            }}
                                        >
                                            {point?.subHeading && (
                                                <Typography
                                                    variant="subtitle1"
                                                    fontWeight={700}
                                                    sx={{ mb: 1, color: "#7a4e3b" }}
                                                >
                                                    {point.subHeading}
                                                </Typography>
                                            )}

                                            {point?.content && (
                                                <Typography variant="body2" sx={{ color: "#444", mb: 1 }}>
                                                    {point.content}
                                                </Typography>
                                            )}

                                            {Array.isArray(point.points) && point.points.length > 0 && (
                                                <Box sx={{ mt: 1 }}>
                                                    {point.points.map((sub, subIdx) => (
                                                        <Box
                                                            key={subIdx}
                                                            sx={{
                                                                mb: 1.2,
                                                                borderLeft: "3px solid #d19270",
                                                                pl: 2,
                                                            }}
                                                        >
                                                            {sub.subHeading && (
                                                                <Typography
                                                                    variant="subtitle2"
                                                                    fontWeight={600}
                                                                    sx={{ color: "#6a4e3b" }}
                                                                >
                                                                    {sub.subHeading}
                                                                </Typography>
                                                            )}
                                                            <Typography variant="body2" sx={{ color: "#333" }}>
                                                                {sub.content}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            )}
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    );
                })}

                {/* Coaching Details */}
                <Box sx={{ mt: 10 }}>
                    <Typography
                        variant="h5"
                        fontWeight={700}
                        gutterBottom
                        sx={{ color: "#a68272" }}
                    >
                        Coaching Details
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 3,
                            mt: 2,
                        }}
                    >
                        {[...(program?.coachingDetails?.coachingFees || []),
                        ...(program?.coachingDetails?.coachingDuration || []),
                        ...(program?.coachingDetails?.coachingHostel || [])
                        ].map((detail, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    flex: {
                                        xs: "1 1 100%",
                                        sm: "1 1 calc(50% - 24px)",
                                        md: "1 1 calc(33.333% - 24px)",
                                    },
                                    maxWidth: {
                                        xs: "100%",
                                        sm: "calc(50% - 24px)",
                                        md: "calc(33.333% - 24px)",
                                    },
                                    border: "1px solid #eee",
                                    borderRadius: 2,
                                    p: { xs: 2, sm: 3 },
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    color="#7a4e3b"
                                >
                                    {detail.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {detail.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Contact Section */}
                <Box id="contact" sx={{ mt: 12 }}>
                    <Typography
                        variant="h5"
                        fontWeight={700}
                        gutterBottom
                        sx={{ color: "#a68272", borderLeft: "4px solid #a68272", pl: 1 }}
                    >
                        Contact Us
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1" sx={{ mb: 2, color: 'black' }}>
                            Have questions about this program? Reach out to us for more information.
                        </Typography>
                        <button className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors duration-300 font-semibold">
                            Enroll Now
                        </button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}