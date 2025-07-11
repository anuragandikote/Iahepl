import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    href: "#",
    label: "Instagram",
    iconPath:
      "M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.5A4.5 4.5 0 1112 16.5a4.5 4.5 0 010-9zm6.25-.75a1 1 0 110 2 1 1 0 010-2zM12 9a3 3 0 100 6 3 3 0 000-6z",
  },
  {
    href: "#",
    label: "YouTube",
    iconPath:
      "M21.8 8s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9-2.9-.2-7.3-.2-7.3-.2s-4.4 0-7.3.2c-.5 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2 9.6 2 11.3v1.3c0 1.7.2 3.3.2 3.3s.2 1.5.8 2.1c.8.8 1.8.8 2.2.9 1.6.1 6.9.2 6.9.2s4.4 0 7.3-.2c.5 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.3v-1.3c0-1.7-.2-3.3-.2-3.3zM10 15V9l5 3-5 3z",
  },
  {
    href: "#",
    label: "Facebook",
    iconPath:
      "M13 3h4a1 1 0 011 1v4h-2.5A1.5 1.5 0 0014 9.5V11h4v3h-4v7h-3v-7H9v-3h2V9a4 4 0 014-4z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#a68272] text-white pt-16 pb-6 overflow-hidden border border-x-black">
      {/* Content */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-between gap-10 mb-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2">
                <span>📍</span>
                <span>
                  #505/1/2, 2nd Floor, Beside Karkhana Police Station, Secunderabad, Telangana - 500015
                </span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>79890 50069, 97004 54572</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <span>iahepl.secunderabad@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, iconPath }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group transition-transform hover:scale-110"
                >
                  <div className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={iconPath} />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* More sections (like About or Quick Links) can go here */}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/30 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-white/80 gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Impact Academy Logo"
              width={100}
              height={40}
              unoptimized
              priority
              className="invert brightness-0"
            />
            <span>© {new Date().getFullYear()} Impact Academy. All Rights Reserved.</span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}