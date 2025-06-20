// components/ui/ServiceCard.tsx

import Image from 'next/image';
import type { Service } from '@/components/shared/types'; // Import from our new shared types file

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Use a placeholder image, easy to replace
  const imageUrl = `https://placehold.co/600x400/DAB8B3/333333?text=${encodeURIComponent(service.name)}`;
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative h-56">
        {/* <Image src={imageUrl} alt={service.name} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110" /> */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal">{service.name}</h3>
        <p className="mt-2 text-stone text-sm">{service.description || 'A relaxing and beautifying experience.'}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-gold">${Number(service.price).toFixed(2)}</span>
          <span className="text-sm text-stone">{service.duration} min</span>
        </div>
      </div>
    </div>
  );
};
