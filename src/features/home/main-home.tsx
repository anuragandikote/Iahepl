import AnnouncementBar from '@/components/AnnouncementBar'
import { carouselContent } from './data/home-data'
import HeroCarousel from '@/components/HeroCarousel'
import VisionMission from '@/components/VisionMission'
import UpdatesList from '@/components/UpdatesList'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import TrainingPrograms from '@/components/TrainingPrograms'
import AboutUsSection from '@/components/AboutUsSection'

const MainAboutUs = () => {
    return (
        <>
            <AnnouncementBar />
            <HeroCarousel items={carouselContent} />
            <AboutUsSection />
            <VisionMission />
            <UpdatesList />
            <Testimonials />
            <Gallery />
            <TrainingPrograms />
        </>
    )
}

export default MainAboutUs