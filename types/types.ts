export type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
};

import type { ReactElement } from 'react';

export type SubmenuItem = {
  href: string;
  icon: ReactElement;
  label: string;
  desc: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  features: string[];
  allowedContentTypes: ContentType[];
  maxFileSize: string;
  priority: 'basic' | 'standard' | 'premium';
};

export type ContentType = 'photo' | 'video' | 'music';

export type AdPlacement = {
  id: string;
  date: string;
  isAvailable: boolean;
  bookedBy?: string;
  plan?: PricingPlan;
  contentType?: ContentType;
  status: 'available' | 'booked' | 'pending' | 'completed';
};

export type BookingOption = {
  id: string;
  name: string;
  description: string;
  additionalCost: number;
  icon: ReactElement;
};

export type UploadFile = {
  id: string;
  fileName: string;
  originalName: string;
  fileType: ContentType;
  fileSize: number;
  uploadDate: string;
  bookingId: string;
};

export type Booking = {
  id: string;
  userId: string;
  date: string;
  plan: PricingPlan;
  selectedOptions: BookingOption[];
  contentType: ContentType;
  uploadedFile?: UploadFile;
  totalAmount: number;
  paymentStatus: 'pending' | 'completed' | 'failed';
  bookingStatus: 'confirmed' | 'processing' | 'live' | 'completed';
  createdAt: string;
};

export type CalendarDay = {
  date: string;
  isAvailable: boolean;
  isToday: boolean;
  isPast: boolean;
  booking?: Booking;
  specialPricing?: number;
};
