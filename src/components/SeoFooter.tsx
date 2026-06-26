import Link from 'next/link';

export default function SeoFooter() {
  return (
    <footer className="bg-[#870F07] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Main Pages */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-oswald text-[#D6CDA4]">Main Pages</h3>
            <ul className="space-y-2 text-sm font-league-spartan">
              <li><Link href="/" className="hover:text-[#D6CDA4] transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-[#D6CDA4] transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#D6CDA4] transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-[#D6CDA4] transition-colors">FAQ</Link></li>
              <li><Link href="/gallery" className="hover:text-[#D6CDA4] transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-[#D6CDA4] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Written Exam Coaching */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-oswald text-[#D6CDA4]">Written Exam Coaching</h3>
            <ul className="space-y-2 text-sm font-league-spartan">
              <li>
                <Link href="/written-exam-coaching/nda-written-coaching" className="hover:text-[#D6CDA4] transition-colors">
                  NDA Written Coaching
                </Link>
              </li>
              <li>
                <Link href="/written-exam-coaching/cds-written-coaching" className="hover:text-[#D6CDA4] transition-colors">
                  CDS Written Coaching
                </Link>
              </li>
              <li>
                <Link href="/written-exam-coaching/afcat-written-coaching" className="hover:text-[#D6CDA4] transition-colors">
                  AFCAT Written Coaching
                </Link>
              </li>
              <li>
                <Link href="/written-exam-coaching/capf-written-coaching" className="hover:text-[#D6CDA4] transition-colors">
                  CAPF Written Coaching
                </Link>
              </li>
              <li>
                <Link href="/written-exam-coaching/career-counselling" className="hover:text-[#D6CDA4] transition-colors">
                  Career Counselling
                </Link>
              </li>
            </ul>
          </div>

          {/* SSB Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-oswald text-[#D6CDA4]">SSB Services</h3>
            <ul className="space-y-2 text-sm font-league-spartan">
              <li>
                <Link href="/ssb-interview/ssb-procedure" className="hover:text-[#D6CDA4] transition-colors">
                  SSB Procedure
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-oswald text-[#D6CDA4]">Legal & Information</h3>
            <ul className="space-y-2 text-sm font-league-spartan">
              <li><Link href="/privacy-policy" className="hover:text-[#D6CDA4] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#D6CDA4] transition-colors">Terms & Conditions</Link></li>
            </ul>

            <h3 className="text-lg font-bold mb-4 mt-6 font-oswald text-[#D6CDA4]">Contact Info</h3>
            <ul className="space-y-2 text-sm font-league-spartan">
              <li className="text-white">
                📍 59/1/2, 2nd floor, beside Karkhana traffic police station, karkhana, Secunderabad-500009
              </li>
              <li className="text-white">
                📞 79890 50069, 97004 54572
              </li>
              <li className="text-white">
                ✉️ iahepl.secunderabad@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 font-league-spartan">
          <p>© {new Date().getFullYear()} Impact Academy of Human Excellence. All Rights Reserved.</p>
          <p className="mt-2">
            Best Defence Coaching Academy in Hyderabad | NDA | CDS | AFCAT | CAPF | SSB Interview Preparation
          </p>
        </div>
      </div>
    </footer>
  );
}
