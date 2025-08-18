import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
          {/* Footer Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <Link
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#goals"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Goals
              </Link>
            </li>
            <li>
              <Link
                href="#details"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SKILLEM SERVICES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
