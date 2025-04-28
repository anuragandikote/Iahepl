import Link from 'next/link'
import SectionTitle from './SectionTitle'

type Program = {
  title: string
  link: string
  bgColor: string
}

const programs: Program[] = [
  { title: 'SSB Coaching', link: '/programs/ssb-coaching', bgColor: 'bg-red-900' },
  { title: 'NDA Written Coaching', link: '/programs/nda-coaching', bgColor: 'bg-red-900' },
  { title: 'CDS Written Coaching', link: '/programs/cds-coaching', bgColor: 'bg-red-900' },
  { title: 'AFCAT Written Coaching', link: '/programs/afcat-coaching', bgColor: 'bg-red-900' },
  { title: 'CPF Written Coaching', link: '/programs/cpf-coaching', bgColor: 'bg-red-900' },
  { title: 'ACC Written Coaching', link: '/programs/acc-coaching', bgColor: 'bg-red-900' },
  { title: 'TA Written Coaching', link: '/programs/ta-coaching', bgColor: 'bg-red-900' },
  { title: 'Personality Development', link: '/programs/personality-development', bgColor: 'bg-red-900' },
  { title: 'Spoken English', link: '/programs/spoken-english', bgColor: 'bg-red-900' },
  { title: 'Career Guidance', link: '/programs/career-guidance', bgColor: 'bg-red-900' }
]

export default function TrainingPrograms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Training" highlightedWord="Programs" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {programs.map((program, index) => (
            <Link 
              href={program.link} 
              key={index}
              className={`${program.bgColor} p-8 text-white text-center rounded-lg 
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl 
                hover:bg-red-800 cursor-pointer flex items-center justify-center
                min-h-[200px]`}
            >
              <h3 className="text-xl font-semibold">{program.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}