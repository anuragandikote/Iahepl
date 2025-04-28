type ContactInfoProps = {
  icon: 'phone' | 'email'
  label: string
  value: string
}

export default function ContactInfo({ icon, label, value }: ContactInfoProps) {
  const iconPath = icon === 'phone' 
    ? "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    : "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-red-800 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <div>
        <p className="text-sm">{label}</p>
        <p className="text-red-800 font-semibold">{value}</p>
      </div>
    </div>
  )
}