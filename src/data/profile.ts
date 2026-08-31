import { EducationItem, ExperienceItem, ExpertiseItem, ProcessStage, MaterialShowcase } from "@/lib/types";

export const designerProfile = {
  name: "Walaa Khalil Al-Adrah",
  arabicName: "ولاء خليل العدرة",
  title: "Interior Designer",
  specialties: ["Interior Architecture", "3D Visualization", "Space Planning", "Outdoor Furniture Design", "Material Selection"],
  experienceYears: "3+",
  location: "Amman — Marj Al Hammam, Jordan",
  phone: "+962 791080038",
  email: "walaa1998aladrah@gmail.com",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  hero: {
    badge: "INTERIOR DESIGNER · 3D VISUALIZATION · SPACE PLANNING",
    heading: "Designing spaces\nwith intention.",
    supportingText: "Interior environments shaped by light, material, function, and emotion.",
  },
  philosophy: {
    quote: "I create interiors where architecture, material, and everyday life come together.",
    description: "With more than three years of experience across interior design and outdoor furniture design, Walaa develops spaces that balance aesthetics, functionality, and thoughtful material selection.",
  },
  about: {
    title: "About Walaa",
    lead: "Walaa Khalil Al-Adrah is an Interior Designer with professional experience spanning residential, commercial, and outdoor furniture design.",
    body: "Her approach combines creative design thinking with technical visualization, spatial planning, material selection, and close project coordination. Having developed projects across Jordan's leading interior and outdoor design studios, she translates ambitious client visions into functional, refined, and emotionally resonant spaces.",
    pillars: [
      { label: "Spatial Planning", desc: "Crafting intuitive circulation, optimized volume, and natural light harmony." },
      { label: "3D Visualization", desc: "Translating concepts into photo-realistic renders with precise lighting & materials." },
      { label: "Materiality & Detailing", desc: "Selecting authentic stones, tactile woods, and durable finishes tailored to context." },
      { label: "Project Execution", desc: "Seamless coordination with site contractors and artisans from drawing to delivery." },
    ],
  },
};

export const experiences: ExperienceItem[] = [
  {
    period: "2024 — 2025",
    company: "Roza — Outdoor Furniture Design",
    role: "Outdoor Furniture Designer",
    location: "Amman, Jordan",
    responsibilities: [
      "Designed modern and luxury outdoor concepts for residential and hospitality projects.",
      "Created high-quality 3D visualizations for marketing and client presentations.",
      "Followed up with site teams and contractors to ensure proper implementation of design functionality.",
      "Collaborated with production teams to ensure design feasibility and durability.",
      "Contributed to brand identity through innovative and contemporary furniture designs.",
    ],
  },
  {
    period: "2023 — 2024",
    company: "Al Manara Company",
    role: "Interior Designer",
    location: "Amman, Jordan",
    responsibilities: [
      "Worked on residential and commercial interior design projects.",
      "Produced detailed drawings and realistic 3D renders using AutoCAD and 3ds Max.",
      "Followed up with site teams and contractors to ensure designs were implemented correctly.",
      "Maintained coordination with site teams and contractors.",
      "Contributed to project integration and execution.",
    ],
  },
  {
    period: "2022 — 2023",
    company: "Roya Design",
    role: "Interior Designer",
    location: "Amman, Jordan",
    responsibilities: [
      "Developed interior design concepts based on client briefs and project requirements.",
      "Prepared space planning, layouts, mood boards, and 3D visualizations.",
      "Assisted in material and finishes selection to ensure design accuracy and client satisfaction.",
      "Participated in design presentations and revisions based on client feedback.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Interior Design",
    institution: "Middle East University",
    location: "Amman, Jordan",
  },
  {
    degree: "High School Certificate",
    institution: "Ibn Khaldun School",
    location: "Jordan",
  },
];

export const expertiseList: ExpertiseItem[] = [
  {
    number: "01",
    title: "Interior Architecture",
    subtitle: "Spatial Volume & Architectural Framing",
    description: "Developing comprehensive interior concepts that harmonize structural parameters with bespoke lifestyle requirements.",
    tags: ["Layout Optimization", "Architectural Partitions", "Ceiling Design"],
  },
  {
    number: "02",
    title: "Space Planning",
    subtitle: "Ergonomics & Flow Optimization",
    description: "Structuring fluid circulation, purposeful zones, and natural transition between private and communal areas.",
    tags: ["Zoning", "Circulation Diagrams", "Scale Drawings"],
  },
  {
    number: "03",
    title: "3D Visualization",
    subtitle: "Photorealistic Renderings & Modeling",
    description: "Transforming preliminary drawings into atmospheric 3D renders using 3ds Max and advanced lighting engines.",
    tags: ["3ds Max", "Realistic Lighting", "Atmospheric Views"],
  },
  {
    number: "04",
    title: "Material & Finishes",
    subtitle: "Tactile Harmony & Specifications",
    description: "Curating harmonious compositions of natural stone, warm timbers, custom metals, and resilient architectural fabrics.",
    tags: ["Travertine & Marble", "Natural Woods", "Finish Schedules"],
  },
  {
    number: "05",
    title: "Outdoor Furniture",
    subtitle: "Hospitality & Terrace Living",
    description: "Designing bespoke outdoor seating, pergolas, and landscape integration engineered for durability and effortless luxury.",
    tags: ["Weatherproof Materials", "Custom Millwork", "Terrace Styling"],
  },
  {
    number: "06",
    title: "Project Coordination",
    subtitle: "Site Supervision & Craft Integration",
    description: "Bridging the gap between conceptual drawings and on-site craftsmen, ensuring precision and fidelity in execution.",
    tags: ["Contractor Liaison", "Quality Oversight", "Site Verification"],
  },
];

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Context & Briefing",
    description: "Understand the client's lifestyle, functional needs, architectural envelope, and aesthetic aspirations.",
    deliverables: ["Client Consultation", "Site Analysis", "Initial Moodboard"],
  },
  {
    number: "02",
    title: "Concept",
    subtitle: "Spatial Narrative",
    description: "Develop the spatial concept, mood, lighting strategy, material direction, and color palette.",
    deliverables: ["Schematic Layouts", "Material Direction", "Color Studies"],
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "Detailed Visualization",
    description: "Translate the approved concept into precise 2D drawings, 3D visualizations, material boards, and custom furniture details.",
    deliverables: ["AutoCAD Drawings", "3ds Max Renders", "Spec Sheets"],
  },
  {
    number: "04",
    title: "Realize",
    subtitle: "Execution & Delivery",
    description: "Coordinate with contractors and production teams to bring the design into physical reality with uncompromised quality.",
    deliverables: ["Site Coordination", "Finish Verification", "Final Styling"],
  },
];

export const materialsShowcase: MaterialShowcase[] = [
  {
    id: "travertine",
    name: "Roman Travertine & Natural Stone",
    subtitle: "Earthy Warmth & Organic Texture",
    description: "Porous, unpolished travertine provides tactile grounding, soft reflections of daylight, and a timeless architectural permanence.",
    textureImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    palette: ["#E6DEC8", "#CBB89D", "#A69279"],
  },
  {
    id: "white-oak",
    name: "Fluted White Oak & Walnut",
    subtitle: "Organic Grain & Linear Rhythm",
    description: "Warm, sustainably sourced timber delivers acoustic softness and visual comfort, framing millwork and custom partitions with elegance.",
    textureImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    palette: ["#C9A87C", "#8C6A43", "#4A3525"],
  },
  {
    id: "limewash",
    name: "Limewash & Mineral Plaster",
    subtitle: "Soft Diffused Light Reflection",
    description: "Hand-troweled mineral finishes capture natural daylight with subtle tonal variations, eliminating harsh glare and inviting calm.",
    textureImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    palette: ["#F2EDE4", "#E4DCD0", "#D0C4B4"],
  },
  {
    id: "brushed-brass",
    name: "Aged Brass & Bronzed Metals",
    subtitle: "Subtle Warm Metallic Accents",
    description: "Muted champagne gold and brushed bronze hardware add refined focal points without overwhelming the organic warmth of the space.",
    textureImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    palette: ["#D4AF37", "#A68A62", "#5A4A32"],
  },
];

export const technicalSkills = [
  { name: "AutoCAD", category: "Technical Drafting & Layouts" },
  { name: "Autodesk 3ds Max", category: "High-End 3D Modeling & Photorealism" },
  { name: "Adobe Photoshop", category: "Post-Production & Texture Enhancements" },
  { name: "Space Planning & Layouts", category: "Circulation & Ergonomics" },
  { name: "3D Visualization & Rendering", category: "Lighting & Camera Composition" },
  { name: "Material & Finishes Selection", category: "Architectural FF&E Specifications" },
];

export const professionalSkills = [
  { name: "Creative Design Thinking", desc: "Translating abstract client desires into bespoke, functional spatial narratives." },
  { name: "Time Management", desc: "Delivering precise drawing packages and renders to meet project milestones." },
  { name: "Teamwork & Collaboration", desc: "Partnering seamlessly with architects, site engineers, and bespoke craftsmen." },
];

export const languages = [
  { name: "Arabic", level: "Native Proficiency" },
  { name: "English", level: "Very Good / Professional Working Proficiency" },
];
