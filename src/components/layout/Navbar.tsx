import Link from 'next/link';
import { MobileMenu } from './MobileMenu';
export const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-pink-100 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold gradient-text tracking-wider">
              AURA
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-secondary-700 hover:text-rose-pink px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/services" className="text-secondary-700 hover:text-rose-pink px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Services
              </Link>
              <Link href="/about" className="text-secondary-700 hover:text-rose-pink px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="text-secondary-700 hover:text-rose-pink px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
             <Link href="/book" className="bg-rose-pink text-white hover:bg-primary-600 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 btn-hover shadow-pink">
                Book Now
              </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};