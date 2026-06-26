import { carouselContent } from './data/home-data'
import HeroCarousel from '@/components/HeroCarousel'
import VisionMission from '@/components/VisionMission'
import UpdatesList from '@/components/UpdatesList'
import Testimonials from '@/components/Testimonials'
import TrainingPrograms from '@/components/TrainingPrograms'
import AboutUsSection from '@/components/AboutUsSection'
import LocationOnMap from '@/components/locationOnMap'

const MainAboutUs = () => {
    return (
        <>
            <HeroCarousel items={carouselContent} />
            <AboutUsSection />
            <VisionMission />
            <UpdatesList />
            <Testimonials />
            <LocationOnMap />
            {/* <Gallery /> */}
            <TrainingPrograms />
        </>
    )
}

export default MainAboutUs