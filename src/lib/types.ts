export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

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
  nameAr?: string;
  category: string;
  categoryAr?: string;
  description: string;
  descriptionAr?: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  altAr?: string;
  caption?: string;
  captionAr?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide';
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  titleAr?: string;
  category: ProjectCategory;
  categoryAr?: string;
  clientType: string;
  clientTypeAr?: string;
  location: string;
  locationAr?: string;
  year: string;
  area: string;
  areaAr?: string;
  heroImage: string;
  thumbnail: string;
  tagline: string;
  taglineAr?: string;
  concept: string;
  conceptAr?: string;
  approach: string;
  approachAr?: string;
  challengeAndSolution: {
    challenge: string;
    challengeAr?: string;
    solution: string;
    solutionAr?: string;
  };
  materials: ProjectMaterial[];
  gallery: ProjectImage[];
  downloadableFiles?: {
    name: string;
    nameAr?: string;
    url: string;
    fileType: string;
    size?: string;
  }[];
  featured: boolean;
  gridSpan?: 'full' | 'half' | 'offset-left' | 'offset-right';
}

export interface ExperienceItem {
  period: string;
  periodAr?: string;
  company: string;
  companyAr?: string;
  role: string;
  roleAr?: string;
  location: string;
  locationAr?: string;
  responsibilities: string[];
  responsibilitiesAr?: string[];
}

export interface EducationItem {
  degree: string;
  degreeAr?: string;
  institution: string;
  institutionAr?: string;
  location: string;
  locationAr?: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  titleAr?: string;
  subtitle: string;
  subtitleAr?: string;
  description: string;
  descriptionAr?: string;
  tags: string[];
  tagsAr?: string[];
}

export interface ProcessStage {
  number: string;
  title: string;
  titleAr?: string;
  subtitle: string;
  subtitleAr?: string;
  description: string;
  descriptionAr?: string;
  deliverables: string[];
  deliverablesAr?: string[];
}

export interface MaterialShowcase {
  id: string;
  name: string;
  nameAr?: string;
  subtitle: string;
  subtitleAr?: string;
  description: string;
  descriptionAr?: string;
  textureImage: string;
  palette: string[];
}
