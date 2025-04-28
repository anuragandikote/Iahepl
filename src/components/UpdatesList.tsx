import SectionTitle from './SectionTitle'

const updates = [
  '24th April 2025 - Last batch for the month (APRIL 2025)',
  '1st & 12th May 2025 - Batch for the month (MAY 2025)',
  'NDA/NA, CDS, CAPF, AFCAT - New batches from 28th April 2025',
]

export default function UpdatesList() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Upcoming" highlightedWord="Updates" />
        <ul className="space-y-4 max-w-2xl mx-auto text-black">
          {updates.map((update, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-800 rounded-full"></span>
              <span>{update}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}