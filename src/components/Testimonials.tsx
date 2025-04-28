'use client'
import { useState } from 'react'
import Slider from "react-slick"
import SectionTitle from './SectionTitle'

type Testimonial = {
    name: string
    course: string
    message: string
}

const testimonials: Testimonial[] = [
    {
        name: "Capt. Shubham",
        course: "CDS(IMA)",
        message: "Impact Academy provided me with the perfect platform to achieve my dream of joining the Indian Army. The mentorship and guidance were exceptional."
    },
    {
        name: "Lt. Manisha Bohra",
        course: "CDS(OTA)",
        message: "The structured approach and personalized attention at Impact Academy were key to my success. The faculty's experience made a huge difference."
    },
    {
        name: "S Raja Sekhar",
        course: "NDA",
        message: "The mock tests and interview preparations were incredibly helpful. Impact Academy's comprehensive training helped me crack the SSB interview."
    }
]

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    }

    return (
        <section className="py-16 bg-red-800">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="Testimonials" highlightedWord="" textColor="text-white" />
                <div className="relative">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="px-4">
                                <div className="rounded-lg p-8 relative">
                                    {/* Opening quote SVG */}
                                    <div className="absolute -top-4 -left-4">
                                        <svg
                                            width="48"
                                            height="48"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="text-red-300"
                                        >
                                            <path
                                                d="M10 11.2h-4l2-4H4v12h8v-8zm10 0h-4l2-4h-4v12h8v-8z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>



                                    <div className="relative z-10 mb-10">
                                        <p className="text-white text-lg mb-6 italic">
                                            {testimonial.message}
                                        </p>

                                        <div className="flex flex-col justify-center items-center">
                                            <span className="font-semibold text-white">{testimonial.name}</span>
                                            <span className="text-sm text-white">{testimonial.course}</span>
                                        </div>
                                        {/* Closing quote SVG */}
                                        <div className="absolute -bottom-4 -right-4">
                                            <svg
                                                width="48"
                                                height="48"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-red-300 rotate-180"
                                            >
                                                <path
                                                    d="M10 11.2h-4l2-4H4v12h8v-8zm10 0h-4l2-4h-4v12h8v-8z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}