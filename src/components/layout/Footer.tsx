// components/layout/Footer.tsx
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-secondary-50 border-t border-pink-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-bold gradient-text mb-4">AURA</h3>
                        <p className="text-lg text-secondary-600 mb-6 max-w-md">
                            Your sanctuary of style and serenity. Experience the perfect blend of luxury and relaxation at our premier nail spa.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-rose-pink text-white p-3 rounded-full hover:bg-primary-600 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-rose-pink text-white p-3 rounded-full hover:bg-primary-600 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-secondary-800 mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services" className="text-secondary-600 hover:text-rose-pink transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/book" className="text-secondary-600 hover:text-rose-pink transition-colors">
                                    Book Appointment
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-secondary-600 hover:text-rose-pink transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-secondary-600 hover:text-rose-pink transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-secondary-800 mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-rose-pink mt-1 flex-shrink-0" />
                                <span className="text-secondary-600 text-sm">
                                    123 Luxury Lane<br />
                                    Ballenger Creek, MD 21703
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-rose-pink flex-shrink-0" />
                                <span className="text-secondary-600">(240) 555-0123</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-rose-pink flex-shrink-0" />
                                <span className="text-secondary-600">contact@auranails.com</span>
                            </li>
                        </ul>
                        
                        {/* Business Hours */}
                        <div className="mt-8">
                            <h4 className="font-semibold text-secondary-800 mb-3">Hours</h4>
                            <div className="text-sm text-secondary-600 space-y-1">
                                <div className="flex justify-between">
                                    <span>Tue-Fri</span>
                                    <span>9AM-7PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>9AM-5PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sun-Mon</span>
                                    <span className="text-rose-pink">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-pink-100">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-secondary-500 flex items-center">
                            © {new Date().getFullYear()} Aura Nails & Spa. Made with 
                            <Heart className="h-4 w-4 mx-1 text-rose-pink fill-current" />
                            for beautiful nails.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="text-sm text-secondary-500 hover:text-rose-pink transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-secondary-500 hover:text-rose-pink transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}