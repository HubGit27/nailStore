// app/about/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';
import { Leaf, Gem, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Aura Nails & Spa | Our Story & Philosophy',
  description: 'Learn about the story behind Aura Nails & Spa. Our mission is to provide a serene escape with a focus on quality, hygiene, and mindful beauty.',
};

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2940&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Our Story, Your Sanctuary</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">Discover the heart and soul behind Aura Nails & Spa.</p>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal">Our Philosophy</h2>
          <p className="mt-4 text-lg text-stone leading-relaxed">
            Aura was born from a simple idea: that beauty and wellness are intertwined. We believe that a manicure is more than just a cosmetic treatment—it's a ritual of self-care. Our salon is designed to be a peaceful escape from the everyday, where you can relax, rejuvenate, and leave feeling more beautiful and balanced than when you arrived.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 mt-16 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-dusty-rose/20 p-4 rounded-full">
              <Leaf className="h-8 w-8 text-gold" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-charcoal">Quality Products</h3>
            <p className="mt-2 text-stone">We exclusively use high-quality, non-toxic, and cruelty-free products to ensure the health and beauty of your nails.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-dusty-rose/20 p-4 rounded-full">
              <Gem className="h-8 w-8 text-gold" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-charcoal">Expert Artistry</h3>
            <p className="mt-2 text-stone">Our technicians are licensed professionals and true artists, passionate about creating stunning, long-lasting results.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-dusty-rose/20 p-4 rounded-full">
              <HeartHandshake className="h-8 w-8 text-gold" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-charcoal">Impeccable Hygiene</h3>
            <p className="mt-2 text-stone">Your safety is our top priority. We adhere to the strictest hospital-grade sterilization protocols for all our tools and equipment.</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
             {/* <Image 
              src="https://images.unsplash.com/photo-1596701062353-833d76e3c1aa?q=80&w=2787&auto=format&fit=crop"
              alt="Jessica Minh, founder of Aura Nails & Spa"
              layout="fill"
              objectFit="cover"
            /> */}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-charcoal">Meet Our Founder</h2>
            <h3 className="text-xl font-semibold text-gold mt-1">Jessica Minh</h3>
            <p className="mt-4 text-charcoal leading-relaxed">
              "After years in the fast-paced corporate world, I realized the profound impact that small moments of peace and self-care could have on overall well-being. I created Aura not just as a nail salon, but as a community space where anyone can come to pause, breathe, and feel cared for. My passion is blending artistry with a mindful approach to beauty, and I'm so grateful to share that with the Ballenger Creek community."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

