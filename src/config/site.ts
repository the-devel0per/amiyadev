import type { AboutConfig, Project, SiteConfig } from '../types';

/**
 * Central content file. Fill in the empty values below.
 * Empty URLs are never rendered as links — the UI shows a disabled state instead.
 */
export const site: SiteConfig = {
  name: 'Amiya Ranjan',
  initials: 'AR.',
  title: 'Designer & Developer',
  url: 'https://amiya3.vercel.app/',
  specializations: ['UI/UX', 'Frontend', 'Backend'],
  intro:
    'I design thoughtful interfaces and build useful software. My work combines product design, frontend engineering and AI-powered application development.',
  supporting: 'Currently exploring full-stack development, Python, AWS and LLM applications.',
  profileImage: '', // e.g. '/profile.jpg'
  profileImageAlt: 'Portrait of Amiya Ranjan',
  resumeUrl: '/AmiyaRanjan_Resume.pdf', // file lives in /public/resume.pdf
  githubUrl: 'https://github.com/the-devel0per', // e.g. 'https://github.com/your-username'
  linkedinUrl: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  email: 'amiyaranjansethi0551@gmail.com', // e.g. 'you@example.com'
  year: 2026,
};

export const projects: Project[] = [

  {
    id: 'briefing',
    title: 'Briefing',
    category: 'Less noise. More important stories. A little intelligence and a little humour.',
    description:
      'A curated daily top-10 news briefing (Technology, Government & Policy, Crypto, Stocks & Markets) with per-user category muting, ranked and de-duplicated stories, publisher images, Gemini-written witty headlines (the original is always shown), and a server-enforced Fetch More limit (2 extra batches of 10 → max 30 stories/day).',
    technologies: ['Python', 'FastAPI', 'ViteJS', 'AWS', 'DynamoDB'],
    image: '/Brefing.webp',
    imageAlt: 'Screenshot of the Briefing interface',
    liveUrl: 'https://d1cj0lzkfkkjhk.cloudfront.net/',
    githubUrl: 'https://github.com/the-devel0per/Briefing',
  },
  
    {
    id: 'je-audit',
    title: 'JE Audit',
    category: 'JE Guard · Automated journal entry testing',
    description:
      'An AI-powered journal entry testing tool that automates the validation of financial entries against predefined rules and regulations.',
    technologies: ['Python', 'FastAPI', 'ViteJS', 'AWS', 'DynamoDB'],
    image: '/je.webp',
    imageAlt: 'Screenshot of the JE Audit interface',
    liveUrl: 'http://jegaurd.s3-website-ap-southeast-2.amazonaws.com/',
    githubUrl: 'https://github.com/the-devel0per/jeaudit',
  },

  {
    id: 'policylens-ai',
    title: 'PolicyLens AI',
    category: 'AI Policy Analysis',
    description:
      'An AI-powered policy analysis tool that checks documents against a structured GDPR checklist and highlights potential compliance gaps.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Python', 'AWS'],
    image: 'PLA.webp',
    imageAlt: 'Screenshot of the PolicyLens AI interface',
    liveUrl: 'https://policylens-ai.s3.ap-southeast-2.amazonaws.com/index.html',
    githubUrl: 'https://github.com/the-devel0per/PolicyLensAI',
  },
   
 
   {
    id: 'accessaudit-ai',
    title: 'AccessAudit AI',
    category: 'AI Accessibility Auditor',
    description:
      'An AI-powered accessibility auditing tool that analyzes UI screenshots and generates WCAG-based reports with actionable findings.',
    technologies: ['Python', 'FastAPI', 'JavaScript', 'AWS'],
    image: '/AAA.webp',
    imageAlt: 'Screenshot of the AccessAudit AI interface',
    liveUrl: 'http://accessaudit-ai-amiya-p1.s3-website-ap-southeast-2.amazonaws.com/',
    githubUrl: 'https://github.com/the-devel0per/AccessAudit-AI',
  },
  


];

export const about: AboutConfig = {
  lead: "I started in industrial design and moved into code, so I look at a product from both sides: how it should feel to use, and how it should hold up when it runs. I like building tools where the interface, the logic and the AI each do the job they are best at.",
  approach: [
    {
      title: 'Start with the person using it',
      body: 'My training is in design, and I have done user research and wireframing for cross-device products. I begin with what someone is trying to get done, then shape the interface around that before writing much code.',
    },
    {
      title: 'Keep AI predictable',
      body: 'In AccessAudit AI, the model output is validated with Pydantic and scores are calculated in code, so the same input gives consistent results. In PolicyLens AI, the GDPR checklist lives in code, so the AI cannot invent requirements.',
    },
    {
      title: 'Make uncertainty visible',
      body: 'PolicyLens AI backs findings with evidence quotes and flags uncertain ones for human review instead of presenting every answer with the same confidence. It also stores none of the PDFs it checks.',
    },
    {
      title: 'Build for everyone, then ship it',
      body: 'Accessibility is part of the brief, not a final pass. AccessAudit AI audits against WCAG 2.2, and PolicyLens AI has a responsive, accessible interface with dark and light themes. Both run on AWS, and AccessAudit AI saves every audit to DynamoDB with a history dashboard.',
    },
  ],
  experienceIntro: 'The places this approach comes from.',
  experience: [
    {
      role: 'Freelance Designer & Developer',
      org: 'Independent',
      period: '11/2023 – Present',
      summary:
        'Web design, UI/UX, 3D and frontend work for early-stage Web3 startups. In this time I learned Python, JavaScript, AWS and LLMs, and built two full-stack AI projects.',
    },
    {
      role: '3D & UI/UX Designer',
      org: 'Rario',
      period: '06/2022 – 11/2023',
      summary:
        'Created 3D designs and UI/UX for digital products, contributed to the complete redesign of the website and app, and worked on NFT production, 3D pack design and product delivery.',
    },
    {
      role: 'NFT Designer',
      org: 'WazirX',
      period: '10/2021 – 04/2022',
      summary: 'Designed NFTs for the platform, wrote the copy for each one and promoted them on Twitter.',
    },
    {
      role: 'Design internships & projects',
      org: '7 Classes, Monday Morning, CoNo',
      period: '03/2021 – 06/2021',
      summary:
        'Prototyped learning experiences, icons and illustrations for web apps, handled graphic design and website development for web projects, and designed wireframes, interfaces and prototypes with user research for a cross-device platform.',
    },
  ],
  knowledge: [
    {
      group: 'Development',
      items: ['Python', 'FastAPI', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'REST APIs', 'Git', 'HTML / CSS'],
    },
    {
      group: 'Cloud & AI',
      items: ['AWS Lambda', 'S3', 'DynamoDB', 'LLM APIs', 'Prompt design', 'Pydantic validation'],
    },
    { group: 'Design', items: ['UI / UX design', '3D & graphic design', 'Animation'] },
    { group: 'Tools', items: ['Figma', 'Blender', 'VS Code'] },
  ],
  education: {
    degree: 'B.Tech in Industrial Design',
    school: 'National Institute of Technology Rourkela',
    period: '2018 – 2022',
  },
};
