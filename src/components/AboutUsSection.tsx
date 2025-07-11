import SectionTitle from './SectionTitle'

export default function AboutUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="About" highlightedWord="Us" />
        <p className="text-gray-600 text-center">
          Impact Academy of Human Excellence (IAHE) is an Academy which specialized in Coaching aspirants of Defence Career by conducting regular courses for NDA, CDS, AFCAT, ACC, CPSS, Coast Guard ETC... We have the Highest Success rate of selection by SSB compared to any similar Academies in INDIA.Our Faculty are Senior Most Defence Officers who have long experience as selectors in the SSBs. Our approach is specific to each candidates needs as the level of candidates is different when they seek coaching. We provide free career counseling to the aspirants at our Academy every day by our experienced Faculty.
        </p>
      </div>
    </section>
  )
}