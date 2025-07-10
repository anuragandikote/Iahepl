import AnnouncementBar from '@/components/AnnouncementBar'
import React from 'react'
import { carouselContent } from './data/home-data'
import HeroCarousel from '@/components/HeroCarousel'
import AboutUs from '@/components/AboutUs'
import VisionMission from '@/components/VisionMission'
import UpdatesList from '@/components/UpdatesList'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import TrainingPrograms from '@/components/TrainingPrograms'

const MainHome = () => {
    return (
        <>
            <AnnouncementBar />
            <HeroCarousel items={carouselContent} />
            <AboutUs />
            <VisionMission />
            <UpdatesList />
            <Testimonials />
            <Gallery />
            <TrainingPrograms />
        </>
    )
}

export default MainHome