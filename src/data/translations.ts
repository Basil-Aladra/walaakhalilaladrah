import { Language } from "@/lib/types";

export interface Translations {
  nav: {
    designerName: string;
    designerTitle: string;
    projects: string;
    portfolioNavigation: string;
    allProjects: string;
    allProjectsDesc: string;
    studentProjects: string;
    studentProjectsDesc: string;
    interiorDesign: string;
    interiorDesignDesc: string;
    workingDrawing: string;
    workingDrawingDesc: string;
    visualization3D: string;
    visualization3DDesc: string;
    furnitureDesign: string;
    furnitureDesignDesc: string;
    about: string;
    expertise: string;
    experience: string;
    process: string;
    contact: string;
    letsTalk: string;
    startConversation: string;
    curriculumVitae: string;
  };
  hero: {
    badge: string;
    heading: string;
    supportingText: string;
    exploreWorks: string;
    viewCv: string;
    scrollCue: string;
    experienceYears: string;
    yearsLabel: string;
    disciplinesLabel: string;
    basedInLabel: string;
    basedInValue: string;
  };
  philosophy: {
    badge: string;
    quote: string;
    description: string;
    focusTitle: string;
    focusDesc: string;
    visionTitle: string;
    visionDesc: string;
    detailTitle: string;
    detailDesc: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    lead: string;
    body: string;
    pillarsTitle: string;
    downloadFullCv: string;
    coreCompetencies: string;
    education: string;
    languages: string;
    native: string;
    professional: string;
  };
  expertise: {
    badge: string;
    title: string;
    subtitle: string;
  };
  selectedWorks: {
    badge: string;
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    exploreArchive: string;
    filterAll: string;
    category: string;
    year: string;
    area: string;
  };
  materials: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    colorStory: string;
  };
  visualization: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    softwareSuite: string;
    lightingPhilosophy: string;
    lightingDesc: string;
    tactileMateriality: string;
    tactileDesc: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    educationBadge: string;
    educationTitle: string;
    rolesResponsibilities: string;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    keyDeliverables: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    softwareTitle: string;
    professionalTitle: string;
    languagesTitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    availability: string;
    availabilityStatus: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formPhone: string;
    formPhonePlaceholder: string;
    formProjectType: string;
    formProjectTypePlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    sendMessage: string;
    sending: string;
    sentSuccess: string;
    sentDesc: string;
    error: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    backToTop: string;
    designedWith: string;
  };
  cvModal: {
    title: string;
    badge: string;
    openInNewTab: string;
    close: string;
  };
  projectsArchive: {
    badge: string;
    title: string;
    subtitle: string;
    allTab: string;
    viewStudy: string;
    totalWorks: string;
  };
  projectDetail: {
    backToProjects: string;
    client: string;
    location: string;
    year: string;
    scale: string;
    discipline: string;
    architecturalConcept: string;
    designApproach: string;
    challenge: string;
    solution: string;
    materialsPalettes: string;
    visualGallery: string;
    technicalDocuments: string;
    technicalDesc: string;
    nextProject: string;
    viewAllWorks: string;
    plate: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      designerName: "Walaa Khalil Al-Adrah",
      designerTitle: "Interior Designer",
      projects: "Projects",
      portfolioNavigation: "Portfolio Navigation",
      allProjects: "All Projects",
      allProjectsDesc: "Complete architectural archive",
      studentProjects: "Student Projects",
      studentProjectsDesc: "Graduation & university research",
      interiorDesign: "Interior Design",
      interiorDesignDesc: "Residential & commercial spaces",
      workingDrawing: "Working Drawing",
      workingDrawingDesc: "AutoCAD execution & detailing sets",
      visualization3D: "3D Visualization",
      visualization3DDesc: "Photorealistic 3ds Max renders",
      furnitureDesign: "Furniture Design",
      furnitureDesignDesc: "Custom outdoor & luxury seating",
      about: "About",
      expertise: "Expertise",
      experience: "Experience",
      process: "Process",
      contact: "Contact",
      letsTalk: "Let's Talk",
      startConversation: "Start a Conversation →",
      curriculumVitae: "Curriculum Vitae",
    },
    hero: {
      badge: "INTERIOR DESIGNER · 3D VISUALIZATION · SPACE PLANNING",
      heading: "Designing spaces\nwith intention.",
      supportingText: "Interior environments shaped by light, material, function, and emotion.",
      exploreWorks: "Explore Selected Works",
      viewCv: "View Curriculum Vitae",
      scrollCue: "Scroll to explore",
      experienceYears: "3+",
      yearsLabel: "Years Experience",
      disciplinesLabel: "Core Disciplines",
      basedInLabel: "Based in",
      basedInValue: "Amman, Jordan",
    },
    philosophy: {
      badge: "DESIGN PHILOSOPHY",
      quote: "I create interiors where architecture, material, and everyday life come together.",
      description: "With more than three years of experience across interior design and outdoor furniture design, Walaa develops spaces that balance aesthetics, functionality, and thoughtful material selection.",
      focusTitle: "Spatial Purpose",
      focusDesc: "Every layout responds to how inhabitants live, move, and experience natural light.",
      visionTitle: "Tactile Authenticity",
      visionDesc: "Prioritizing natural stones, warm hardwoods, and unrefined textures over sterile surfaces.",
      detailTitle: "Execution Precision",
      detailDesc: "Zero tolerance for discrepancy between technical drawings and finished on-site craftsmanship.",
    },
    about: {
      badge: "BIOGRAPHY",
      title: "About Walaa",
      subtitle: "Spatial Vision, Material Craft, and Technical Rigor",
      lead: "Walaa Khalil Al-Adrah is an Interior Designer with professional experience spanning residential, commercial, and outdoor furniture design.",
      body: "Her approach combines creative design thinking with technical visualization, spatial planning, material selection, and close project coordination. Having developed projects across Jordan's leading interior and outdoor design studios, she translates ambitious client visions into functional, refined, and emotionally resonant spaces.",
      pillarsTitle: "Core Architectural Pillars",
      downloadFullCv: "View Curriculum Vitae",
      coreCompetencies: "Core Competencies",
      education: "Education",
      languages: "Languages",
      native: "Native",
      professional: "Professional Working",
    },
    expertise: {
      badge: "AREAS OF EXPERTISE",
      title: "Disciplines & Craft",
      subtitle: "Comprehensive architectural and interior capabilities delivered with meticulous precision.",
    },
    selectedWorks: {
      badge: "SELECTED ARCHIVE",
      title: "Featured Works",
      subtitle: "Curated residential, commercial, outdoor furniture, and working drawing commissions.",
      viewCaseStudy: "View Project",
      exploreArchive: "Explore Full Archive",
      filterAll: "All Works",
      category: "Category",
      year: "Year",
      area: "Area",
    },
    materials: {
      badge: "MATERIALITY & TEXTURE",
      title: "Material Harmony",
      subtitle: "An editorial study of stones, timbers, plasters, and bronzes curated across recent commissions.",
      intro: "Material selection is the emotional spine of interior architecture. Natural variations in grain, porous surfaces, and honed minerals impart authenticity and timeless warmth.",
      colorStory: "Tonal Palette",
    },
    visualization: {
      badge: "3D ARCHITECTURAL VISUALIZATION",
      title: "Light, Atmosphere & Reality",
      subtitle: "Photorealistic spatial studies executed with Autodesk 3ds Max, accurate physical cameras, and advanced photometric rendering.",
      intro: "Digital rendering is not simply a representation—it is an investigative design tool. It allows the simulation of seasonal daylight, tactile material reflections, and intimate nocturnal atmospheres long before ground is broken on site.",
      softwareSuite: "Primary Visualization Stack",
      lightingPhilosophy: "Photometric Lighting",
      lightingDesc: "True-to-life solar orientations, physical sky models, and Kelvin-calibrated interior luminaires.",
      tactileMateriality: "Subsurface Materiality",
      tactileDesc: "Micro-displacement, roughness mapping, and multi-layered shaders that emulate physical stone and textile textures.",
    },
    experience: {
      badge: "CAREER TIMELINE",
      title: "Experience & Roles",
      subtitle: "A progressive career across premier Jordanian interior design studios and bespoke furniture ateliers.",
      educationBadge: "ACADEMIC FOUNDATION",
      educationTitle: "Education & Credentials",
      rolesResponsibilities: "Key Responsibilities & Contributions",
    },
    process: {
      badge: "DESIGN METHODOLOGY",
      title: "From Brief to Built Reality",
      subtitle: "A structured, communicative four-stage framework ensuring creative integrity and precision execution.",
      keyDeliverables: "Key Deliverables",
    },
    skills: {
      badge: "CAPABILITIES",
      title: "Technical & Professional Skills",
      subtitle: "Comprehensive proficiency across design software, spatial planning, and interdisciplinary collaboration.",
      softwareTitle: "Technical & Software Proficiency",
      professionalTitle: "Professional & Creative Capabilities",
      languagesTitle: "Language Proficiencies",
    },
    contact: {
      badge: "GET IN TOUCH",
      title: "Let's Create Together",
      subtitle: "Available for bespoke residential, commercial interior commissions, and outdoor furniture design collaborations.",
      availability: "Current Status",
      availabilityStatus: "Available for Commissions & Collaborative Roles",
      phoneLabel: "Telephone",
      emailLabel: "Email Address",
      locationLabel: "Studio Location",
      locationValue: "Amman — Marj Al Hammam, Jordan",
      formName: "Full Name",
      formNamePlaceholder: "e.g. Sarah Mansour",
      formEmail: "Email Address",
      formEmailPlaceholder: "s.mansour@domain.com",
      formPhone: "Phone Number",
      formPhonePlaceholder: "+962 7X XXX XXXX",
      formProjectType: "Project Scope",
      formProjectTypePlaceholder: "Residential Fit-Out / Outdoor Furniture / 3D Visualization",
      formMessage: "Project Details & Timeline",
      formMessagePlaceholder: "Tell me about your project, spatial requirements, and expected timeline...",
      sendMessage: "Send Message",
      sending: "Sending...",
      sentSuccess: "Message Sent Successfully",
      sentDesc: "Thank you for reaching out. I will review your inquiry and respond promptly.",
      error: "An error occurred. Please try again or reach out directly via WhatsApp.",
    },
    footer: {
      tagline: "Interior Designer · 3D Visualization · Space Planning · Outdoor Furniture",
      copyright: "All rights reserved. Designed with architectural precision.",
      backToTop: "Back to Top ↑",
      designedWith: "Curated Architectural Portfolio",
    },
    cvModal: {
      title: "Curriculum Vitae — Walaa Khalil Al-Adrah",
      badge: "Official Resume Document",
      openInNewTab: "Open Full Image",
      close: "Close Viewer",
    },
    projectsArchive: {
      badge: "PROJECT PORTFOLIO",
      title: "Architectural Archive",
      subtitle: "A complete collection of interior, visualization, technical drawing, and bespoke furniture projects.",
      allTab: "All Projects",
      viewStudy: "View Project",
      totalWorks: "Total Projects",
    },
    projectDetail: {
      backToProjects: "All Projects",
      client: "Client / Type",
      location: "Location",
      year: "Year",
      scale: "Scale / Area",
      discipline: "Discipline",
      architecturalConcept: "Spatial Concept",
      designApproach: "Design & Material Approach",
      challenge: "Design Challenge",
      solution: "Architectural Solution",
      materialsPalettes: "Material Specifications",
      visualGallery: "Visual Archive",
      technicalDocuments: "Technical Documents",
      technicalDesc: "Detailed execution drawing sets for this project.",
      nextProject: "Next Project",
      viewAllWorks: "View All Works",
      plate: "Plate",
    },
  },
  ar: {
    nav: {
      designerName: "ولاء خليل العدرة",
      designerTitle: "مهندسة تصميم داخلي",
      projects: "المشاريع",
      portfolioNavigation: "أقسام المعرض المعماري",
      allProjects: "جميع المشاريع",
      allProjectsDesc: "الأرشيف المعماري والتصميمي الكامل",
      studentProjects: "مشاريع التخرج والجامعة",
      studentProjectsDesc: "أبحاث التخرج والتصميم الأكاديمي",
      interiorDesign: "التصميم الداخلي",
      interiorDesignDesc: "المساحات السكنية والتجارية الراقية",
      workingDrawing: "المخططات التنفيذية",
      workingDrawingDesc: "مخططات AutoCAD التنفيذية والتفصيلية",
      visualization3D: "الإظهار المعماري 3D",
      visualization3DDesc: "رندرات ورؤى واقعية ببرنامج 3ds Max",
      furnitureDesign: "تصميم الأثاث",
      furnitureDesignDesc: "أثاث خارجي فاخر وتصاميم مخصصة",
      about: "عن المصممة",
      expertise: "مجالات الخبرة",
      experience: "المسيرة المهنية",
      process: "منهجية العمل",
      contact: "تواصل معي",
      letsTalk: "تواصل معي",
      startConversation: "ابدأ محادثة جديدة ←",
      curriculumVitae: "السيرة الذاتية",
    },
    hero: {
      badge: "تصميم داخلي · إظهار معماري ثلاثي الأبعاد · تخطيط المساحات",
      heading: "تصميم المساحات\nبرؤية وهوية.",
      supportingText: "بيئات داخلية تتشكل بتناغم الضوء الطبيعي، أصالة الخامات، الوظيفة، والإحساس.",
      exploreWorks: "استكشف الأعمال المختارة",
      viewCv: "عرض السيرة الذاتية",
      scrollCue: "مرر للاستكشاف",
      experienceYears: "+3",
      yearsLabel: "سنوات من الخبرة",
      disciplinesLabel: "تخصصات رئيسية",
      basedInLabel: "الموقع",
      basedInValue: "عَمّان، الأردن",
    },
    philosophy: {
      badge: "فلسفة التصميم",
      quote: "أصمم مساحات داخلية تلتقي فيها العمارة، المواد الأصيلة، وتفاصيل الحياة اليومية.",
      description: "بخبرة تتجاوز ثلاث سنوات في التصميم الداخلي وتصميم الأثاث الخارجي، تطور ولاء مساحات تحقق التوازن الأمثل بين الجمالية البصرية، الكفاءة الوظيفية، والاختيار الدقيق للمواد.",
      focusTitle: "الغاية من المساحة",
      focusDesc: "كل مخطط ينبع من طريقة عيش الأفراد وحركتهم وتفاعلهم مع الضوء الطبيعي.",
      visionTitle: "أصالة الخامات",
      visionDesc: "نمنح الأولوية للأحجار الطبيعية، الأخشاب الدافئة، والملمس العضوي على حساب الأسطح المعقمة.",
      detailTitle: "دقة التنفيذ",
      detailDesc: "التزام تام بعدم وجود أي تباين بين المخططات التنفيذية والواقع المنفذ على أرض الموقع.",
    },
    about: {
      badge: "السيرة والمسيرة",
      title: "نبذة عن ولاء",
      subtitle: "رؤية مكانية، حرفية في اختيار المواد، ودقة تقنية متناهية",
      lead: "ولاء خليل العدرة هي مهندسة تصميم داخلي ذات خبرة عملية ممتدة في المشاريع السكنية والتجارية وتصميم الأثاث الخارجي الفاخر.",
      body: "يجمع أسلوبها بين الفكر التصميمي الإبداعي والإظهار المعماري الواقعي الدقيق، وتخطيط المساحات، واختيار المواد، مع التنسيق الميداني الوثيق. من خلال عملها مع كبرى استوديوهات التصميم في الأردن، تحول تطلعات العملاء إلى مساحات راقية، عملية، وذات صدى شعوري وبصري عميق.",
      pillarsTitle: "الركائز التصميمية الأساسية",
      downloadFullCv: "عرض السيرة الذاتية",
      coreCompetencies: "المهارات والكفاءات",
      education: "المؤهلات العلمية",
      languages: "اللغات",
      native: "اللغة الأم",
      professional: "مستوى مهني متقدم",
    },
    expertise: {
      badge: "مجالات الخبرة والتخصص",
      title: "التخصصات والحرفية",
      subtitle: "إمكانيات معمارية وتصميمية متكاملة تُنفذ بأعلى درجات الدقة والعناية بالتفاصيل.",
    },
    selectedWorks: {
      badge: "أرشيف مختار",
      title: "أبرز المشاريع",
      subtitle: "مجموعة منتقاة من المشاريع السكنية، التجارية، تصميم الأثاث، والمخططات التنفيذية.",
      viewCaseStudy: "عرض المشروع",
      exploreArchive: "استعراض الأرشيف الكامل",
      filterAll: "جميع الأعمال",
      category: "التصنيف",
      year: "السنة",
      area: "المساحة",
    },
    materials: {
      badge: "المواد والأنسجة",
      title: "تناغم المواد والخامات",
      subtitle: "دراسة تحريرية للأحجار، الأخشاب، الملاط المعدني، والبرونز المعتمد في أحدث المشاريع.",
      intro: "اختيار المواد هو الركيزة العاطفية للعمارة الداخلية. التدرجات الطبيعية في عروق الخشب، والأسطح الحجرية المسامية تضفي أصالة ودفئاً استثنائياً يدوم عبر الزمن.",
      colorStory: "لوحة التدرجات اللونية",
    },
    visualization: {
      badge: "الإظهار المعماري ثلاثي الأبعاد",
      title: "الضوء، الغلاف الجوي، والواقعية",
      subtitle: "دراسات بصرية ثلاثية الأبعاد ببرنامج Autodesk 3ds Max، مع محاكاة فيزيائية دقيقة للكاميرات والإضاءة.",
      intro: "الإظهار الرقمي ليس مجرد صورة تمثيلية—بل هو أداة بحث وتطوير تصميمي تتيح محاكاة الإضاءة الطبيعية وانعكاسات المواد قبل البدء بأعمال البناء في الموقع.",
      softwareSuite: "حزمة برامج الإظهار الأساسية",
      lightingPhilosophy: "الإضاءة الفيزيائية الدقيقة",
      lightingDesc: "زوايا شمس حقيقية، ونماذج إضاءة طبيعية مع ضبط كلفن للمصابيح الداخلية.",
      tactileMateriality: "ملمس المواد الواقعي",
      tactileDesc: "خرائط إزاحة وملمس متعددة الطبقات تحاكي ملمس الأحجار والأقمشة الحقيقية.",
    },
    experience: {
      badge: "المسار المهني",
      title: "الخبرات والمسؤوليات",
      subtitle: "مسيرة مهنية متطورة عبر أبرز شركات التصميم الداخلي ومصانع الأثاث الفاخر في الأردن.",
      educationBadge: "الأساس الأكاديمي",
      educationTitle: "الشهادات والتعليم",
      rolesResponsibilities: "أبرز المهام والمسؤوليات",
    },
    process: {
      badge: "منهجية التصميم",
      title: "من الفكرة المبدئية إلى الواقع المنفذ",
      subtitle: "إطار عمل منظم من 4 مراحل يضمن الحفاظ على الفكرة الإبداعية ودقة التنفيذ على أرض الواقع.",
      keyDeliverables: "المخرجات الرئيسية",
    },
    skills: {
      badge: "الكفاءات والمهارات",
      title: "المهارات التقنية والشخصية",
      subtitle: "إتقان شامل لبرامج التصميم، تخطيط المساحات، والتعاون مع فرق العمل المتعددة.",
      softwareTitle: "البرامج والمهارات التقنية",
      professionalTitle: "المهارات المهنية والإبداعية",
      languagesTitle: "إتقان اللغات",
    },
    contact: {
      badge: "تواصل معي",
      title: "لنصمم معاً مساحات ملهمة",
      subtitle: "متاحة للمشاريع السكنية والتجارية وتصميم الأثاث الخارجي والتعاون المهني.",
      availability: "الحالة الحالية",
      availabilityStatus: "متاحة لتلقي المشاريع والفرص المهنية",
      phoneLabel: "رقم الهاتف",
      emailLabel: "البريد الإلكتروني",
      locationLabel: "موقع العمل",
      locationValue: "عَمّان — مرج الحمام، الأردن",
      formName: "الاسم الكامل",
      formNamePlaceholder: "مثال: سارة منصور",
      formEmail: "البريد الإلكتروني",
      formEmailPlaceholder: "s.mansour@domain.com",
      formPhone: "رقم الهاتف",
      formPhonePlaceholder: "+962 7X XXX XXXX",
      formProjectType: "نوع المشروع والمجال",
      formProjectTypePlaceholder: "تصميم سكني / أثاث خارجي / إظهار معماري 3D",
      formMessage: "تفاصيل المشروع والجدول الزمني",
      formMessagePlaceholder: "أخبرني عن مشروعك، متطلبات المساحة، والموعد المتوقع...",
      sendMessage: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      sentSuccess: "تم إرسال الرسالة بنجاح",
      sentDesc: "شكراً لتواصلك. سأقوم بمراجعة طلبك والرد عليك في أقرب وقت ممكن.",
      error: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل عبر الواتساب مباشرة.",
    },
    footer: {
      tagline: "تصميم داخلي · إظهار معماري 3D · تخطيط المساحات · تصميم الأثاث الخارجي",
      copyright: "جميع الحقوق محفوظة. صُمم بدقة معمارية عالية.",
      backToTop: "العودة للأعلى ↑",
      designedWith: "معرض أعمال معماري وتصميمي مخصص",
    },
    cvModal: {
      title: "السيرة الذاتية — ولاء خليل العدرة",
      badge: "وثيقة السيرة الذاتية الرسمية",
      openInNewTab: "فتح الصورة بالحجم الكامل",
      close: "إغلاق النافذة",
    },
    projectsArchive: {
      badge: "معرض المشاريع",
      title: "الأرشيف المعماري",
      subtitle: "مجموعة شاملة من مشاريع التصميم الداخلي، الإظهار ثلاثي الأبعاد، المخططات التنفيذية، وتصميم الأثاث.",
      allTab: "جميع المشاريع",
      viewStudy: "عرض المشروع",
      totalWorks: "إجمالي المشاريع",
    },
    projectDetail: {
      backToProjects: "جميع المشاريع",
      client: "العميل / نوع المشروع",
      location: "الموقع",
      year: "السنة",
      scale: "المساحة / النطاق",
      discipline: "التخصص",
      architecturalConcept: "المفهوم التصميمي والمكاني",
      designApproach: "منهجية التصميم واختيار المواد",
      challenge: "التحدي التصميمي",
      solution: "الحل المعماري",
      materialsPalettes: "مواصفات المواد والتشطيبات",
      visualGallery: "معرض الصور واللوحات",
      technicalDocuments: "المخططات والوثائق التنفيذية",
      technicalDesc: "حزم المخططات التنفيذية الخاصة بهذا المشروع.",
      nextProject: "المشروع التالي",
      viewAllWorks: "عرض جميع الأعمال",
      plate: "لوحة",
    },
  },
};
