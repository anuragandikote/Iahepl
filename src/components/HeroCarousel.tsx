'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

// Dynamically import Slider with no SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false })

// Import CSS only on the client side
function SlickCSS() {
  useEffect(() => {
    require("slick-carousel/slick/slick.css")
    require("slick-carousel/slick/slick-theme.css")
    require("slick-carousel/slick/slick.min.js")
  }, [])
  return null
}

type CarouselItem = {
  title: string
  subtitle: string
  image: any
}

type HeroCarouselProps = {
  items: CarouselItem[]
}

export default function HeroCarousel({ items }: HeroCarouselProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  }

  if (!isClient) {
    return (
      <div className="relative h-[400px] md:h-[600px] bg-gray-800">
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-8 md:py-16 text-white h-full flex flex-col justify-center items-start">
          <div className="w-16 h-1 bg-yellow-400 rounded mb-4"></div>
          <h2 className="font-serif text-2xl md:text-4xl font-extrabold italic mb-4 drop-shadow-lg leading-snug tracking-tight">Loading...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <SlickCSS />
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="relative h-[400px] md:h-[600px]">
            <div className="absolute inset-0">
              <Image
                width={1920}
                height={1080}
                src={item.image}
                alt={item.title}
                className={index === 0 ? "object-cover object-center w-full h-full" : "object-top w-full "}
                style={{ zIndex: 0 }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent z-10"></div>
            </div>
            <div className="relative z-20 max-w-6xl mx-auto px-4 py-8 md:py-16 text-white h-full flex flex-col justify-center items-start backdrop-blur-xxs mt-16 md:mt-32">
              <div className="w-16 h-1 bg-yellow-400 rounded mb-4"></div>
              <h2 className="font-serif text-2xl md:text-4xl font-extrabold italic mb-4 drop-shadow-lg leading-snug tracking-tight">
                {item.title}
              </h2>
              <h1 className="font-sans text-lg md:text-2xl font-semibold text-yellow-200 drop-shadow-sm">
                {item.subtitle}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}