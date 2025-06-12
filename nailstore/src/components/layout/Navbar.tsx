import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-cream/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-charcoal tracking-wider">
              AURA
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-charcoal hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/services" className="text-charcoal hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="/about" className="text-charcoal hover:text-gold px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="/contact" className="text-charcoal hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="hidden md:block">
             <Link href="/book" className="bg-charcoal text-cream hover:bg-gold hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300">
                Book Now
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
