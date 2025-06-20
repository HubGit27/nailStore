// app/page.tsx
import Link from 'next/link';
import { ServiceCard } from '@/components/ui/ServiceCard';
import type { Service } from '@/components/shared/types'; // Import from our new shared types file

// Helper function to fetch data. In a real app, this might be in a separate file.
async function getFeaturedServices(): Promise<Service[]> {
  // In a real app, you would fetch from your API and might have a specific endpoint or logic
  // to determine which services are "featured".
  // For now, we'll fetch all and take the first few.
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (!res.ok) return [];
    console.log(res)
    const services = await res.json();
    return services.slice(0, 3); // Return only 3 featured services
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
      <section className="relative h-[70vh] min-h-[500px] bg-hero-pattern bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Experience Tranquility & Style
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            Indulge in our luxurious nail care services and let our expert technicians pamper you.
          </p>
          <Link href="/book" className="mt-8 inline-block bg-dusty-rose text-charcoal hover:bg-white px-10 py-4 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105">
            Book Your Escape
          </Link>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">Our Signature Services</h2>
            <p className="mt-2 text-lg text-stone">Crafted with care, designed for you.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-gold font-semibold hover:underline">
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-charcoal">Welcome to Aura</h2>
          <p className="mt-4 text-lg text-charcoal leading-relaxed">
            Founded on the belief that self-care is a necessity, not a luxury, Aura Nails & Spa is a haven of peace in the heart of the city. Our mission is to provide an unparalleled experience of relaxation and beauty, using only the highest quality products and sterilization practices.
          </p>
          <Link href="/about" className="mt-6 inline-block text-gold font-semibold border-b-2 border-gold hover:border-charcoal transition">
            Our Story
          </Link>
        </div>
      </section>
    </div>
  );
}