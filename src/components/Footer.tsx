import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#a68272] text-white pt-12 pb-4 overflow-hidden">
      {/* SVG Background */}̉̉
      <div className="absolute inset-0 w-full h-[400px] z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="#e8ded4"
            fillOpacity="0.49"
            d="M0,64L30,64C60,64,120,64,180,69.3C240,75,300,85,360,101.3C420,117,480,139,540,138.7C600,139,660,117,720,90.7C780,64,840,32,900,26.7C960,21,1020,43,1080,74.7C1140,107,1200,149,1260,149.3C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="text-white text-sm space-y-2">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  #505/1/2, 2nd Floor, Beside Karishma Police Station, Karkhana,
                  Secunderabad, 500015 (Telangana)
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>79890 50069, 97004 54572</span>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <span>iahepl.secunderabad@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <Link key={i} href="#" className="text-white hover:text-[#a68272]">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d={
                          i === 0
                            ? 'M18.244 2.25h3.308l-7.227 8.26...'
                            : i === 1
                              ? 'M22 12c0-5.523-4.477-10-10-10...'
                              : 'M12 2C6.477 2 2 6.477 2 12...'
                        }
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Impact Academy Logo"
              width={100}
              height={40}
              className="brightness-0 invert"
            />
            <span className="text-sm text-gray-300">
              © {new Date().getFullYear()} Impact Academy. All Rights Reserved.
            </span>
          </div>
          <div className="flex gap-6 text-sm text-gray-300">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}