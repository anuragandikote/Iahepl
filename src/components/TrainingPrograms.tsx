import Link from 'next/link'
import SectionTitle from './SectionTitle'

type Program = {
  title: string
  link: string
  bgColor: string
}

const programs: Program[] = [
  { title: 'NDA Written Coaching', link: 'written-exam-coaching/nda-written-coaching', bgColor: 'bg-red-900' },
  { title: 'CDS Written Coaching', link: 'written-exam-coaching/cds-written-coaching', bgColor: 'bg-red-900' },
  { title: 'AFCAT Written Coaching', link: 'written-exam-coaching/afcat-written-coaching', bgColor: 'bg-red-900' },
  { title: 'CAPF Written Coaching', link: 'written-exam-coaching/capf-written-coaching', bgColor: 'bg-red-900' },
  // { title: 'SSB Coaching', link: '/programs/ssb-coaching', bgColor: 'bg-red-900' },
  // { title: 'ACC Written Coaching', link: '/programs/acc-coaching', bgColor: 'bg-red-900' },
  // { title: 'TA Written Coaching', link: '/programs/ta-coaching', bgColor: 'bg-red-900' },
  // { title: 'Personality Development', link: '/programs/personality-development', bgColor: 'bg-red-900' },
  // { title: 'Spoken English', link: '/programs/spoken-english', bgColor: 'bg-red-900' },
  // { title: 'Career Guidance', link: '/programs/career-guidance', bgColor: 'bg-red-900' }
]

export default function TrainingPrograms() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Training" highlightedWord="Programs" />
        <div className="grid grid-cols-2 md:flex gap-6">
          {programs.map((program, index) => (
            <Link
              href={program.link}
              key={index}
              className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 w-full flex flex-col items-start space-y-4"
            >
              {/* Icon or Image */}
              <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-lg group-hover:bg-red-200 transition-colors duration-300">
                {/* You can replace this with an icon */}
                <span className="text-2xl font-bold">'🎯'</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-800 transition-colors duration-300">
                {program.title}
              </h3>

              {/* Call-to-action (optional) */}
              <div className="mt-auto text-sm font-medium text-red-700 group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}