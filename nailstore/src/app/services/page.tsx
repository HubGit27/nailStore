// app/services/page.tsx
import { ServiceCard } from '@/components/ui/ServiceCard';
import type { Service } from '@/components/shared/types'; // Import from our new shared types file

async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return [];
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
