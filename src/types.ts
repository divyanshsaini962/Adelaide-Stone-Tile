export type Page = 'home' | 'about' | 'projects' | 'services' | 'contact';

export type ServiceId = 'pools' | 'stone' | 'residential' | 'commercial' | 'concrete' | 'landscaping';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  benefits: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  gallery: string[];
}

export interface Project {
  id: string;
  title: string;
  category: ServiceId;
  location: string;
  description: string;
  image: string;
  tag: string;
  year: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  quote: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ProcessPhase {
  number: string;
  title: string;
  description: string;
  details: string[];
}
