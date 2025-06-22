// components/layout/AnnouncementManager.tsx

import { AnnouncementBanner } from './AnnouncementBanner';

interface Announcement {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'closure';
  active: boolean;
  priority: number;
  startDate?: string; // ISO date string
  endDate?: string;   // ISO date string
}

// Define your announcements here
const announcements: Announcement[] = [
  {
    id: 'holiday-closure-2024',
    message: '🎄 Holiday Hours: We will be closed December 24th-26th. Happy Holidays!',
    type: 'closure',
    active: true,
    priority: 1,
    startDate: '2024-12-20',
    endDate: '2024-12-27'
  },
  {
    id: 'new-services-2024',
    message: '✨ Now offering gel extensions and nail art! Book your appointment today.',
    type: 'info',
    active: true,
    priority: 2
  },
  {
    id: 'maintenance-notice',
    message: '⚠️ Temporary water disruption expected this Friday 2-4 PM. Appointments may be rescheduled.',
    type: 'warning',
    active: false, // Set to true when needed
    priority: 0
  }
];

// Server-side function to get current announcement
function getCurrentAnnouncement(): Announcement | null {
  const now = new Date();
  const today = now.toISOString().split('T')[0];

  // Filter active announcements that are within date range (if specified)
  const validAnnouncements = announcements.filter(announcement => {
    if (!announcement.active) return false;
    
    // Check date range if specified
    if (announcement.startDate && today < announcement.startDate) return false;
    if (announcement.endDate && today > announcement.endDate) return false;
    
    return true;
  });

  // Sort by priority and return the highest priority one
  const sortedAnnouncements = validAnnouncements.sort((a, b) => a.priority - b.priority);
  return sortedAnnouncements[0] || null;
}

export const AnnouncementManager = () => {
  const currentAnnouncement = getCurrentAnnouncement();

  if (!currentAnnouncement) return null;

  return (
    <AnnouncementBanner
      message={currentAnnouncement.message}
      type={currentAnnouncement.type}
    />
  );
};