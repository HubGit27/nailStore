// app/services/page.tsx
import { ServiceCard } from '@/components/ui/ServiceCard';
import type { Service } from '@/components/shared/types';

// Define the fallback data in case the API call fails
const fallbackServices: Service[] = [
  {
    id: 'fallback-1',
    name: 'Basic Manicure',
    description: 'Includes nail shaping, cuticle care, hand massage, and regular polish.',
    duration: 30,
    price: 25,
    category: 'Manicure'
  },
  {
    id: 'fallback-2',
    name: 'Gel Manicure',
    description: 'A long-lasting manicure with gel polish that cures under a UV light.',
    duration: 45,
    price: 35,
    category: 'Manicure'
  },
  {
    id: 'fallback-3',
    name: 'Deluxe Pedicure',
    description: 'Includes an exfoliating scrub, a hydrating mask, and an extended massage.',
    duration: 60,
    price: 50,
    category: 'Pedicure'
  },
  {
    id: 'fallback-4',
    name: 'Acrylic Full Set',
    description: 'Application of a full set of durable and beautiful acrylic nails.',
    duration: 75,
    price: 60,
    category: 'Extensions'
  },
  {
    id: 'fallback-5',
    name: 'Nail Art',
    description: 'Add a custom design to any manicure or pedicure service. Price is per nail.',
    duration: 15,
    price: 10,
    category: 'Add-ons'
  },
  {
    id: 'fallback-6',
    name: 'Mani-Pedi Combo',
    description: 'Basic manicure and pedicure package for a complete treatment.',
    duration: 75,
    price: 55,
    category: 'Packages'
  },
];

async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/server-api/services`, {
      next: { revalidate: 3600 } // Re-fetch every hour
    });

    if (!res.ok) {
      console.error('❌ API response not ok, returning fallback data.');
      return fallbackServices;
    }
    
    const responseJson = await res.json();
    
    // Check if the response has a 'data' property and it's an array
    if (responseJson && Array.isArray(responseJson.data)) {
        console.log('✅ Successfully fetched and parsed services.');
        return responseJson.data;
    }
    
    // Fallback for unexpected JSON structure
    console.warn('⚠️ Unexpected API response structure, returning fallback data.');
    return fallbackServices;

  } catch (error) {
    console.error("❌ Failed to fetch services, returning fallback data:", error);
    return fallbackServices;
  }
}

// Helper to group services by category
const groupByCategory = (services: Service[]) => {
  return services.reduce((acc, service) => {
    const category = service.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);
};

export default async function ServicesPage() {
  const services = await getServices();
  const groupedServices = groupByCategory(services);

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-charcoal tracking-tight">Our Menu of Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-stone">
            Choose from our wide array of services to find the perfect treatment for you.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {Object.entries(groupedServices).map(([category, services]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold text-charcoal border-b-2 border-dusty-rose pb-2 mb-8">
                {category}
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}