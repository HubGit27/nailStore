
// components/layout/Footer.tsx
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-cream border-t border-stone/20 mt-24">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-charcoal">AURA</h3>
                        <p className="mt-2 text-base text-stone">Your Sanctuary of Style and Serenity.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-charcoal">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/services" className="hover:text-gold">Services</Link></li>
                            <li><Link href="/book" className="hover:text-gold">Book Appointment</Link></li>
                            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-charcoal">Contact Us</h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center"><MapPin className="h-5 w-5 mr-3 text-gold" /> 123 Luxury Lane, Ballenger Creek, MD</li>
                            <li className="flex items-center"><Phone className="h-5 w-5 mr-3 text-gold" /> (240) 555-0123</li>
                            <li className="flex items-center"><Mail className="h-5 w-5 mr-3 text-gold" /> contact@auranails.com</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-stone/20 pt-8 text-center text-sm text-stone">
                    <p>&copy; {new Date().getFullYear()} Aura Nails & Spa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
