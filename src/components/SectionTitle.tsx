type SectionTitleProps = {
  title: string
  highlightedWord: string
  textColor?: string
}

export default function SectionTitle({ title, highlightedWord, textColor = "text-gray-900" }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-bold font-[var(--font-oswald)] text-center mb-8 ${textColor}`}>
      {title} <span className="text-red-800">{highlightedWord}</span>
    </h2>
  )
}