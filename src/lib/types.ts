export type ProjectCategory = 
  | 'Interior Design'
  | 'Student Projects'
  | 'Working Drawing'
  | '3D Visualization'
  | 'Furniture Design'
  | 'Residential Interior'
  | 'Commercial Interior'
  | 'Outdoor & Hospitality';

export interface ProjectMaterial {
  name: string;
  category: string;
  description: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide';
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  clientType: string;
  location: string;
  year: string;
  area: string;
  heroImage: string;
  thumbnail: string;
  tagline: string;
  concept: string;
  approach: string;
  challengeAndSolution: {
    challenge: string;
    solution: string;
  };
  materials: ProjectMaterial[];
  gallery: ProjectImage[];
  featured: boolean;
  gridSpan?: 'full' | 'half' | 'offset-left' | 'offset-right';
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  location: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface MaterialShowcase {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  textureImage: string;
  palette: string[];
}
