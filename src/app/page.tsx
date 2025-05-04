import Image from "next/image";
import AboutUs from '@/components/AboutUs'
import UpdatesList from '@/components/UpdatesList'
import Gallery from '@/components/Gallery'
import HeroCarousel from "@/components/HeroCarousel";
import Testimonials from "@/components/Testimonials";
import TrainingPrograms from "@/components/TrainingPrograms";
import VisionMission from "@/components/VisionMission";
import photo1 from '@/assets/photo1.jpg'
import photo2 from '@/assets/photo2.jpg'
import photo4 from '@/assets/photo4.jpg'

const carouselItems = [
  {
    title: `"If death strikes before I prove my blood, I swear I’ll kill death."`,
    subtitle: "The uniform isn’t given. It’s earned. Will you earn it?",
    image: photo1
  },
  {
    title: `"We are the men in white. We rule the oceans, we protect the coasts, we strike from the deep."`,
    subtitle: "Think you’re tough? Prove it where it counts.",
    image: photo2
  },
  {
    title: `"The ground trembles when we take off. So does the enemy."`,
    subtitle: "“Can you stand where others hesitate?”",
    image: photo4
  } 
]

const appendText = 'Written Coaching'

export const menuItems = {
  'HOME': [],
  'WRITTEN EXAM COACHING': [
    `NDA ${appendText}`, `CDS ${appendText}`, `AFCAT ${appendText}`, `CAPF ${appendText}`
  ],
  'SSB INTERVIEW': [
    'SSB Procedure',/*  'Screening Coaching', '14 Days Schedule', 'Fee Structure', 'GTO Ground', 'Selected Candidates' */
  ],
  /* 'OUR BRANCHES': [
    'Secunderabad', 'Hyderabad', 'Vizag', 'Bangalore'
  ], */
  'GALLERY': [],
  'FAQ': [],
  /* 'SSB HELP': [
    'SSB Procedure', 'SSB Experience', 'Success Stories', 'Downloads'
  ], */
  'CONTACT US': []
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <AnnouncementBar /> */}
      <HeroCarousel items={carouselItems} />
      <AboutUs />
      <VisionMission />
      <UpdatesList />
      <Testimonials />
      <Gallery />
      <TrainingPrograms />
    </div>
  )
}
