import Image from 'next/image'
import SectionTitle from './SectionTitle'

type Student = {
  name: string
  course: string
  image: string
}

const students: Student[] = [
  { name: 'ANGAD PREETRAJ', course: 'CDS(OTA)', image: '/gallery/student1.jpg' },
  { name: 'DEEPTH REDDY', course: 'SSC(NT)', image: '/gallery/student2.jpg' },
  { name: 'MANISHA BOHRA', course: 'CDS(OTA)', image: '/gallery/student3.jpg' },
  { name: 'SHUBHAM', course: 'CDS(IMA)', image: '/gallery/student4.jpg' },
  { name: 'S RAJA SEKHAR', course: 'NDA', image: '/gallery/student5.jpg' },
  { name: 'V SNAMINDRA NAIDU', course: 'TES-38', image: '/gallery/student6.jpg' }
]

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
        <SectionTitle title="Flying Stars of" highlightedWord="Impact Academy Of Human Excellence (HYD)" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 container mx-auto px-4">
          {students.map((student, index) => (
            <div key={index} className="relative group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={200}
                  height={200}
                  unoptimized
                  priority
                  className="object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-sm font-medium text-gray-900">{student.name}</h3>
                <p className="text-sm text-red-800">{student.course}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}