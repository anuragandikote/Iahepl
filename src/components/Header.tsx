import Image from 'next/image'
import ContactInfo from './ContactInfo'

export default function Header() {
  return (
    <header className="py-4 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
        <div className="w-40 md:mx-0 md:w-48 flex-shrink-0">
          <Image
            src="/impact_logo.png"
            alt="Impact Academy Logo"
            width={200}
            height={80}
            priority
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-8 text-black items-start sm:items-center sm:justify-start">
          <ContactInfo
            icon="phone"
            label="Get in touch with us"
            value="+91 7989050069"
          />
          <ContactInfo
            icon="email"
            label="Send us an e-mail"
            value="iahepl.secunderabad@gmail.com"
          />
        </div>
      </div>
    </header>
  )
}