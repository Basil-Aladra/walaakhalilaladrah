# PROMPT — Walaa Khalil Al-Adrah Interior Design Portfolio

Build a premium, highly polished personal portfolio website for:

**Walaa Khalil Al-Adrah**
**Interior Designer**

This is a personal portfolio website for an experienced Interior Designer specializing in interior design, outdoor furniture design, 3D visualization, space planning, material selection, and project coordination.

The website should NOT look like a CV website.

It should transform the information from the designer's CV into a sophisticated, editorial, architecture-focused portfolio.

The primary purpose is to:

1. Showcase her interior design work.
2. Present her professional experience.
3. Communicate her design philosophy.
4. Showcase 3D visualization and technical skills.
5. Build trust with potential clients and design firms.
6. Provide an easy way to contact her for opportunities and projects.

The final website should feel like a combination of a **high-end interior architecture studio website + personal designer portfolio**.

---

## 1. TECH STACK

Use:

* Next.js 15+
* App Router
* TypeScript
* Tailwind CSS
* Framer Motion
* Next/Image
* React

Use Framer Motion for all major animations and transitions.

Do NOT use:

* Vanilla JavaScript for UI logic
* Bootstrap
* Material UI
* GSAP
* jQuery
* Generic website builders
* Generic dashboard components

Build everything as reusable React components.

---

# 2. DESIGNER INFORMATION

Use the following real information throughout the website.

## Name

Walaa Khalil Al-Adrah

## Professional Title

Interior Designer

## Professional Summary

Interior Designer with 3+ years of professional experience in interior design and outdoor furniture design.

Skilled in developing creative, functional, and high-quality design solutions aligned with client requirements and international standards.

Experienced in:

* 3D visualization
* Space planning
* Material selection
* Project coordination
* Interior design
* Outdoor furniture design

She is seeking opportunities to contribute her expertise, creativity, and technical proficiency within professional design environments.

---

# 3. PROFESSIONAL EXPERIENCE

Use this information in the Experience section.

### Interior Designer

**Roya Design — Jordan**

2022 — 2023

Responsibilities:

* Developed interior design concepts based on client briefs and project requirements.
* Prepared space planning, layouts, mood boards, and 3D visualizations.
* Assisted in material and finishes selection to ensure design accuracy and client satisfaction.
* Participated in design presentations and revisions based on client feedback.

---

### Interior Designer

**Al Manara Company — Jordan**

2023 — 2024

Responsibilities:

* Worked on residential and commercial interior design projects.
* Produced detailed drawings and realistic 3D renders using AutoCAD and 3ds Max.
* Followed up with site teams and contractors to ensure designs were implemented correctly.
* Maintained coordination with site teams and contractors.
* Contributed to project integration and execution.

---

### Outdoor Furniture Designer

**Roza — Outdoor Furniture Design — Jordan**

2024 — 2025

Responsibilities:

* Designed modern and luxury outdoor concepts for residential and hospitality projects.
* Created high-quality 3D visualizations for marketing and client presentations.
* Followed up with site teams and contractors to ensure proper implementation of design functionality.
* Collaborated with production teams to ensure design feasibility and durability.
* Contributed to brand identity through innovative and contemporary furniture designs.

---

# 4. EDUCATION

Bachelor's Degree in Interior Design

**Middle East University — Jordan**

Also:

High School Certificate

**Ibn Khaldun School — Jordan**

Education should be displayed elegantly and minimally.

Do not make it look like a traditional resume.

---

# 5. TECHNICAL EXPERTISE

Include:

* AutoCAD
* Autodesk 3ds Max
* Adobe Photoshop
* Space Planning & Layout Design
* 3D Visualization & Rendering
* Material & Finishes Selection

Professional skills:

* Creative Design Thinking
* Time Management
* Teamwork & Collaboration

Present these as an elegant editorial list rather than generic skill cards.

---

# 6. LANGUAGES

Arabic — Native

English — Very Good

Use a minimal language section.

---

# 7. CONTACT INFORMATION

Location:

Amman — Marj Al Hammam, Jordan

Phone:

+962 791080038

Email:

[walaa1998aladrah@gmail.com](mailto:walaa1998aladrah@gmail.com)

The contact information should appear in the final Contact section.

Do NOT expose the contact information excessively throughout the website.

---

# 8. VISUAL IDENTITY

The visual identity should be inspired by the designer's CV.

The CV uses:

* Warm beige
* Cream
* Dark brown
* Champagne / muted gold
* Warm stone tones
* Elegant serif typography
* Editorial composition
* Architectural lines

Translate this into a much more modern and sophisticated digital identity.

Suggested palette:

Background:

#F7F3ED

Primary:

#1B1714

Secondary:

#6E6258

Muted gold:

#A68A62

Border:

rgba(27,23,20,0.14)

Dark section:

#171411

White:

#FFFFFF

Do NOT overuse gold.

Gold should only be an accent.

---

# 9. TYPOGRAPHY

Use:

Serif:

Cormorant Garamond

Sans:

Inter

The serif font should communicate:

* elegance
* architecture
* femininity
* luxury

Use serif typography for:

* Hero
* Large statements
* Project titles
* Section numbers

Use Inter for:

* Navigation
* Body text
* Metadata
* Buttons
* Labels

---

# 10. NAVIGATION

Create a fixed minimal navigation.

Desktop:

Left:

**Walaa Khalil Al-Adrah**

Right:

Projects
About
Experience
Process
Contact

CTA:

Let's Talk

The navbar should initially be transparent over the hero.

Use:

mix-blend-mode: difference

when appropriate.

Do NOT add a heavy navbar background.

On scroll, it can subtly transition into a minimal light/dark state if necessary for readability.

Mobile:

Logo/name

Menu button

Animated fullscreen navigation using Framer Motion.

---

# 11. HERO SECTION

The hero must be visually exceptional.

Use a full viewport interior architecture image.

Hero should contain:

Small label:

INTERIOR DESIGNER · 3D VISUALIZATION · SPACE PLANNING

Main heading:

**Designing spaces
with intention.**

Supporting text:

**Interior environments shaped by light, material, function, and emotion.**

Bottom area:

Walaa Khalil Al-Adrah

Interior Designer

Amman, Jordan

Add a small scroll indicator.

The hero should feel cinematic and editorial.

Do NOT center everything.

Use an asymmetric composition.

---

# 12. HERO IMAGE ANIMATION

Use Framer Motion.

Initial:

scale: 1.04

Animate to:

scale: 1

Duration:

10 seconds

Ease:

easeOut

The image should slowly settle into position.

Hero typography should reveal separately.

Heading:

opacity 0 → 1

y: 30 → 0

Supporting content should stagger in afterward.

---

# 13. INTRODUCTION SECTION

After the hero, create a large editorial statement.

Use:

**"I create interiors where architecture, material, and everyday life come together."**

Supporting text:

With more than three years of experience across interior design and outdoor furniture design, Walaa develops spaces that balance aesthetics, functionality, and thoughtful material selection.

Make this section spacious.

Use a large serif statement.

Animate text into view with Framer Motion.

---

# 14. SELECTED WORKS

This should be the main section.

Title:

**Selected Works**

Small label:

01 — SELECTED PROJECTS

Do NOT create a standard grid of six cards.

Create an editorial architecture portfolio layout.

Use:

* asymmetric grids
* large images
* different image proportions
* staggered positioning
* large whitespace
* full-width images
* vertical offsets

Example:

Project 01:

Large residential interior

Project 02:

Commercial interior

Project 03:

Outdoor furniture / hospitality

Project 04:

3D visualization project

Project 05:

Residential interior

Use realistic placeholder project names if actual project names are unavailable.

For example:

**House of Light**

Residential Interior

Amman, Jordan

2025

---

# 15. PROJECT CARD INTERACTION

Each project should have:

* image
* project number
* title
* category
* location
* year

On hover:

image scale:

1 → 1.05

Text moves:

y: 10 → 0

A subtle overlay appears.

Show:

**View Project →**

Use Framer Motion.

Transitions should be elegant and slow.

---

# 16. PROJECT DETAIL PAGES

Create:

/projects

and:

/projects/[slug]

Each project should have its own editorial case study.

Include:

Hero image

Project title

Location

Year

Category

Design concept

Design approach

Materials

3D visualization

Gallery

Final result

Next project

Project pages should feel like digital architecture publications.

---

# 17. ABOUT SECTION

Create a personal About section.

Title:

**About Walaa**

Use the portrait from the provided CV only as a reference for the designer's identity if the image asset is available.

Do NOT make the portrait the dominant visual.

Create a sophisticated editorial layout:

Left:

Portrait

Right:

Biography

Text:

"Walaa Khalil Al-Adrah is an Interior Designer with professional experience spanning residential, commercial, and outdoor furniture design."

Continue with:

"Her approach combines creative design thinking with technical visualization, spatial planning, material selection, and close project coordination."

Highlight:

Interior Design

3D Visualization

Materiality

Spatial Planning

Use subtle serif italic typography.

---

# 18. EXPERTISE SECTION

Title:

**Designing from concept to detail.**

Create an editorial list:

01
Interior Architecture

02
Space Planning

03
3D Visualization

04
Material & Finishes

05
Outdoor Furniture

06
Project Coordination

Each item should have a short description.

Do NOT use conventional cards.

Use horizontal separators.

On hover:

Arrow moves right.

Title shifts slightly.

Description fades in.

---

# 19. EXPERIENCE SECTION

Create a beautiful timeline.

Title:

**Experience**

Use:

2022 — 2023
Roya Design
Interior Designer

2023 — 2024
Al Manara Company
Interior Designer

2024 — 2025
Roza
Outdoor Furniture Designer

Desktop:

Timeline / editorial layout.

Mobile:

Vertical timeline.

Animate each experience entry when entering the viewport.

Use subtle lines and numbers.

---

# 20. PROCESS SECTION

Title:

**From idea to space.**

Create four stages:

01 — Discover

Understand the client's lifestyle, needs, architecture, and project requirements.

02 — Concept

Develop the spatial concept, mood, materials, colors, and visual direction.

03 — Develop

Translate the concept into drawings, layouts, 3D visualization, materials, furniture, and details.

04 — Realize

Coordinate with contractors and production teams to bring the design into the physical space.

Use a 12-column editorial grid.

Numbers should use the serif font.

---

# 21. MATERIALS SECTION

Create a visually rich section called:

**Material / Light / Texture**

Show close-up imagery of:

* Natural stone
* Wood
* Travertine
* Fabric
* Metal
* Plaster

Use large photography.

This section should communicate that Walaa understands material selection and finishes.

Use subtle horizontal scrolling or editorial image movement if it improves the experience.

---

# 22. 3D VISUALIZATION SECTION

This section is important because 3D visualization is one of her core skills.

Title:

**Before the space exists.**

Explain:

"Through detailed 3D visualization and rendering, ideas become tangible long before construction begins."

Show large architectural renders.

Create a sophisticated image gallery.

Possible interaction:

Hover over render:

"3D Visualization"

Small metadata appears.

---

# 23. PROFESSIONAL SKILLS

Create a minimal section:

Creative Design Thinking

Time Management

Teamwork & Collaboration

Do not use progress bars.

Do not use percentages.

Do not use star ratings.

Present them as a refined typographic list.

---

# 24. CONTACT SECTION

Create a dramatic dark ending section.

Background:

#171411

Heading:

**Have a space in mind?**

Supporting text:

"Let's turn the idea into something tangible."

CTA:

**Start a Conversation →**

Show:

Walaa Khalil Al-Adrah

Amman, Jordan

+962 791080038

[walaa1998aladrah@gmail.com](mailto:walaa1998aladrah@gmail.com)

Add Instagram placeholder if an account is later provided.

---

# 25. CONTACT FORM

Create:

Name

Email

Project Type

Message

Submit:

Send Inquiry →

Inputs should be minimal.

Dark background.

Thin borders.

No large rounded input cards.

Button should have a refined hover animation.

---

# 26. FOOTER

Footer should contain:

Walaa Khalil Al-Adrah

Interior Designer

Amman, Jordan

Projects

About

Experience

Contact

Email

© 2026 Walaa Khalil Al-Adrah

Keep it minimal.

---

# 27. MOTION DESIGN

Use Framer Motion throughout the website.

Create reusable variants:

fadeUp

fadeIn

slideReveal

imageReveal

staggerContainer

staggerItem

pageTransition

Project hover animation

Menu animation

Button animation

Use:

whileInView

viewport:

once: true
amount: 0.15

Typical:

opacity: 0 → 1

y: 40 → 0

duration:

0.8 – 1.2 seconds

Do not make animations fast or playful.

The motion language should feel:

Architectural

Cinematic

Elegant

Calm

---

# 28. IMAGE DIRECTION

Images are extremely important.

Use only imagery related to:

* luxury interiors
* residential architecture
* modern furniture
* natural stone
* wood
* warm lighting
* architectural details
* outdoor furniture
* 3D interior visualization

Avoid:

* generic office stock photos
* people shaking hands
* generic business imagery
* unrelated lifestyle photography

If placeholder images are necessary, use high-quality architectural/interior imagery from Unsplash.

Make the photography look cohesive.

---

# 29. RESPONSIVE DESIGN

Desktop:

1440px+

Use asymmetric editorial layouts.

Tablet:

Simplify the grid.

Mobile:

Single column.

Maintain:

* strong typography
* large images
* generous spacing
* clear hierarchy

Do NOT simply shrink desktop.

Mobile should feel deliberately designed.

---

# 30. PERFORMANCE

Use:

Next/Image

Responsive image sizes.

Lazy loading where appropriate.

Priority loading for hero.

Avoid unnecessary client components.

Keep animations performant.

Support:

prefers-reduced-motion.

---

# 31. ACCESSIBILITY

Use:

semantic HTML

proper heading hierarchy

alt text

keyboard navigation

accessible navigation

visible focus states

accessible forms

Good contrast.

---

# 32. IMPORTANT ART DIRECTION RULE

The website must NOT look like:

* a CV
* a resume template
* a generic freelancer website
* a SaaS landing page
* an AI-generated portfolio template

It should look like a **real, premium interior designer's personal portfolio**.

The CV is the source of professional information, NOT the visual structure of the website.

Translate the CV into a visual story.

---

# 33. FINAL EXPERIENCE

The visitor should experience the site in this order:

**Hero**

↓

**Design Philosophy**

↓

**Selected Works**

↓

**About Walaa**

↓

**Expertise**

↓

**3D Visualization / Materials**

↓

**Professional Experience**

↓

**Process**

↓

**Contact**

The first 5 seconds are critical.

The visitor should immediately understand:

**Who she is → What she does → What she has designed → Why she is worth contacting.**

Prioritize visual storytelling, typography, photography, whitespace, and motion over unnecessary features.

## The final website should feel **premium, feminine, architectural, sophisticated, warm, and timeless.**

**ملاحظة مهمة للـAI Agent:**
Use the provided CV as the source of truth for Walaa's professional information. Do not invent companies, degrees, years of experience, certifications, or professional claims that are not provided. If project-specific information is missing, use clearly marked placeholder project data that can easily be replaced later.
