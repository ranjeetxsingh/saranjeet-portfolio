type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  },
  {
    title: "illustrator",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    title: "inDesign",
    icon: "https://img.icons8.com/color/48/adobe-indesign--v1.png",
  },
  {
    title: "Mailchimp",
    icon: "https://img.icons8.com/bubbles/50/mailchimp.png",
  },
  {
    title: "Excel",
    icon: "https://img.icons8.com/fluency/48/microsoft-excel-2019.png",
  },
  {
    title: "Word",
    icon: "https://img.icons8.com/color/48/ms-word.png",
  },
  {
    title: "Powerpoint",
    icon: "https://img.icons8.com/color/48/ms-powerpoint--v1.png",
  },
  {
    title: 'WordPress',
    icon: "https://img.icons8.com/color/48/wordpress.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
     "Understanding the client's needs and goals, analyzing the target audience, and studying competitors. This phase sets the foundation for the project by identifying key objectives and gathering inspiration.",
    name: "Discovery & Strategy",
    job: "Phase 1",
  },
  {
    quote:
      "Developing detailed mockups or prototypes, selecting typography, and choosing color schemes. This is where the initial concepts are transformed into polished designs.",
    name: "Design",
    job: "Phase 2",
  },
  {
    quote:
      "Generating creative ideas, creating mood boards, and sketching rough drafts. This stage focuses on exploring different design directions and establishing a visual style.",
    name: "Concept Development",
    job: "Phase 3",
  },
  {
    quote:
      "Presenting designs to the client for review and making necessary adjustments. This iterative process ensures the final design aligns with the client's vision and expectations.",
    name: "Feedback & Revisions",
    job: "Phase 4",
  },
  {
    quote:
      "Proofing and testing the design, preparing final files, and delivering them to the client. The project concludes with the implementation or launch of the design and a review of its success.",
    name: "Finalization",
    job: "Phase 5",
  },
  {
    quote:
      "This is where creativity meets execution! Based on the approved concepts, I'll finalize the designs and deliver high-quality graphics that communicate your brand's message effectively.",
    name: "Final Design Delivery",
    job: "Phase 6",
  },
];
