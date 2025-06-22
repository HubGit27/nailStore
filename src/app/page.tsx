// app/page.tsx
import Link from 'next/link';
import { ServiceCard } from '@/components/ui/ServiceCard';
import type { Service } from '@/components/shared/types';
import Image from 'next/image';

// Helper function to fetch data
async function getFeaturedServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    const services = await res.json();
    return services.slice(0, 3);
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return [];
  }
}

export default async function HomePage() {
  const featuredServices = await getFeaturedServices();

  return (
    <div>
      {/* Hero Section */}
      
      <section className="relative h-[75vh] min-h-[600px] bg-[url('/cucumberHand.png')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r"></div>
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Experience Tranquility & 
            <span className="block text-pink-100">Style</span>
          </h1>
          {/* <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
            Indulge in our luxurious nail care services and let our expert technicians pamper you in pure elegance.
          </p> */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-white text-pink-600 hover:bg-pink-50 hover:text-pink-700 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Book Your Escape
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section
      <section className="py-24 bg-gradient-to-b from-white to-soft-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-4">
              Our Signature Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Crafted with care, designed for you. Experience the perfect blend of relaxation and beauty.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center text-rose-pink font-semibold text-lg hover:text-primary-700 transition-colors group">
              View All Services 
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section> */}

      {/* About Teaser Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 leading-tight">
                Welcome to 
                <span className="block gradient-text">Aura</span>
              </h2>
              <p className="mt-6 text-lg text-secondary-600 leading-relaxed">
                Founded on the belief that self-care is a necessity, not a luxury, Aura Nails & Spa is a haven of peace in the heart of the city. Our mission is to provide an unparalleled experience of relaxation and beauty.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-rose-pink rounded-full mr-4"></div>
                  <span className="text-secondary-700">Premium, non-toxic products</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-rose-pink rounded-full mr-4"></div>
                  <span className="text-secondary-700">Expert licensed technicians</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-rose-pink rounded-full mr-4"></div>
                  <span className="text-secondary-700">Hospital-grade sterilization</span>
                </div>
              </div>
              <Link href="/about" className="inline-block mt-8 text-rose-pink font-semibold text-lg border-b-2 border-rose-pink hover:border-primary-700 hover:text-primary-700 transition-colors pb-1">
                Our Story
              </Link>
            </div>
            <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/interior.jpg"
                    alt="Aura Nails & Spa luxurious interior"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={false} // Set to true if this image is above the fold
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-50 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-20 bg-gradient-pink">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Treat Yourself?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why Aura is the premier destination for nail care and relaxation.
          </p>
          <Link href="/book" className="bg-white text-rose-pink hover:bg-pink-50 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 btn-hover shadow-lg">
            Schedule Your Visit
          </Link>
        </div>
      </section> */}
    </div>
  );
}