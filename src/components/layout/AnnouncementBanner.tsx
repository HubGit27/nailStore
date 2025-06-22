// components/layout/AnnouncementBanner.tsx

import { Info, AlertTriangle, Calendar } from 'lucide-react';

interface AnnouncementBannerProps {
  message: string;
  type?: 'info' | 'warning' | 'closure';
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  message,
  type = 'info'
}) => {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-amber-50 border-amber-200',
          text: 'text-amber-800',
          icon: AlertTriangle,
          iconColor: 'text-amber-600'
        };
      case 'closure':
        return {
          bg: 'bg-red-50 border-red-200',
          text: 'text-red-800',
          icon: Calendar,
          iconColor: 'text-red-600'
        };
      default:
        return {
          bg: 'bg-pink-50 border-pink-200',
          text: 'text-pink-800',
          icon: Info,
          iconColor: 'text-pink-600'
        };
    }
  };

  const styles = getStyles();
  const Icon = styles.icon;

  return (
    <div className={`${styles.bg} border-b ${styles.text} px-4 py-3`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3">
        <Icon className={`h-5 w-5 ${styles.iconColor} flex-shrink-0`} />
        <p className="text-sm font-medium text-center">
          {message}
        </p>
      </div>
    </div>
  );
};