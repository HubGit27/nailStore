// app/contact/page.tsx

import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Aura Nails & Spa',
  description: 'Get in touch with Aura Nails & Spa. Find our address, phone number, and opening hours. We are located at 123 Luxury Lane, Ballenger Creek, MD.',
};

export default function ContactPage() {
  return (
    <div className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-charcoal">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-stone">
            We'd love to hear from you. Whether you have a question or want to book over the phone, we're here to help.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-lg">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-charcoal">Contact Information</h2>
              <ul className="mt-4 space-y-4 text-charcoal">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-gold mt-1 flex-shrink-0" />
                  <span>123 Luxury Lane<br />Ballenger Creek, MD 21703</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-gold mt-1 flex-shrink-0" />
                  <span>(240) 555-0123</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-gold mt-1 flex-shrink-0" />
                  <span>contact@auranails.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-charcoal">Business Hours</h2>
               <ul className="mt-4 space-y-2 text-charcoal">
                <li className="flex justify-between"><span>Tuesday - Friday</span> <span>9:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday & Monday</span> <span className="text-dusty-rose">Closed</span></li>
              </ul>
            </div>
          </div>
          
          {/* Map */}
          <div>
             <div className="h-96 w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198150.7533031092!2d-77.62537409453124!3d39.3908381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9c0f9bee4a65d%3A0x7472c1c686121834!2sBallenger%20Creek%2C%20MD!5e0!3m2!1sen!2sus!4v1718157833502!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
