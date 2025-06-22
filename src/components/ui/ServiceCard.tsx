// components/ui/ServiceCard.tsx

import type { Service } from '@/components/shared/types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden group card-hover border border-pink-50">
      <div className="relative h-48 bg-gradient-to-br from-soft-pink to-primary-100 flex items-center justify-center">
        {/* Placeholder for service image */}
        <div className="text-center">
          <div className="w-16 h-16 bg-rose-pink rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          <span className="text-rose-pink font-medium text-sm">{service.category || 'Service'}</span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-rose-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2 group-hover:text-rose-pink transition-colors">
          {service.name}
        </h3>
        <p className="text-secondary-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {service.description || 'A luxurious and relaxing treatment designed to leave you feeling refreshed and beautiful.'}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-pink-50">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-rose-pink">
              ${Number(service.price).toFixed(2)}
            </span>
          </div>
          <div className="flex items-center text-secondary-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {service.duration} min
          </div>
        </div>
        
        {/* Optional: Add to cart or book button */}
        <button className="w-full mt-4 bg-soft-pink text-rose-pink hover:bg-rose-pink hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
          Select Service
        </button>
      </div>
    </div>
  );
};