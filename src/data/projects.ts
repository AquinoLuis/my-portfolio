export interface Project {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  liveLink?: string;
  githubLink?: string;

  // New CMS Fields for Dynamic Page
  fullDescription: string;
  client: string;
  role: string;
  year: string;
  heroImage: string;
  gallery: string[];
}

export const projectsData: Project[] = [
  {
    slug: "artin",
    title: "Artin",
    category: "WEBSITE",
    thumbnail: "/assets/Wordpress/Homes.png",
    shortDescription: "WordPress",
    liveLink: "https://artiinn.wordpress.com",
    fullDescription: "Artin is a website built to showcase types of arts and their meaning. It provides a platform to explore various artistic expressions.",
    client: "Personal Project",
    role: "Developer",
    year: "2026",
    heroImage: "/assets/Wordpress/Homes.png",
    gallery: [
      "/assets/Wordpress/c.png",
      "/assets/Wordpress/ls.png"
    ]
  },
  {
    slug: "donche",
    title: "DONCHE",
    category: "WEBSITE",
    thumbnail: "/assets/DONCHE.png",
    shortDescription: "HTML, CSS, JS",
    liveLink: "https://aquinoluis.github.io/DONCH-SchoolProject/",
    githubLink: "https://github.com/AquinoLuis/DONCH-SchoolProject",
    fullDescription: "A donut website showcasing classic, tasty donuts and trending donuts. Built entirely from scratch using HTML, CSS, and Vanilla JavaScript to deliver a delicious and interactive user experience.",
    client: "School Project",
    role: "Front-end Developer",
    year: "2024",
    heroImage: "/assets/Donche/Home.png",
    gallery: [
      "/assets/Donche/About.png",
      "/assets/Donche/Popular.png",
      "/assets/Donche/Footer.png",
    ]
  },
  {
    slug: "la-hermosa",
    title: "La Hermosa Flower Shop",
    category: "WEBSITE",
    thumbnail: "/assets/La Hermosa.png",
    shortDescription: "Angular, HTML, CSS",
    liveLink: "https://lahermosa.shop/home",
    fullDescription: "La Hermosa Flower Shop is a robust e-commerce platform built with Angular. It provides a seamless floral shopping experience, featuring a dynamic product catalog, intuitive cart management, and a beautiful, responsive user interface tailored for flower enthusiasts.",
    client: "Freelance Client",
    role: "Full-Stack Developer",
    year: "2026",
    heroImage: "/assets/lahermosa/Home.png",
    gallery: [
      "/assets/lahermosa/About.png",
      "/assets/lahermosa/Features.png",
      "/assets/lahermosa/Blogs.png",
      "/assets/lahermosa/Contacts.png",
    ]
  },
  {
    slug: "trashtrack",
    title: "TrashTrack",
    category: "UI/UX",
    thumbnail: "/assets/TraskTrack.png",
    shortDescription: "Figma",
    liveLink: "https://www.figma.com/proto/U9S7vtHls9JN7jw0C11sgv/ADET-App---TrashTrack?node-id=145-96&starting-point-node-id=145%3A96&t=1tNDAwQm53cVk6AK-1",
    fullDescription: "TrashTrack is a comprehensive UI/UX design prototype for a modern waste management and recycling tracking application. Designed entirely in Figma, the app focuses on gamifying recycling habits, providing real-time tracking, and offering a clean, user-friendly interface for environmental conscious users.",
    client: "Concept",
    role: "UI/UX Designer",
    year: "2026",
    heroImage: "/assets/trashy/trash22.png",
    gallery: [
      "/assets/trashy/taras.png",
    ]
  },
  {
    slug: "singku-cafe",
    title: "Singku Cafe",
    category: "UI/UX",
    thumbnail: "/assets/Singku Cafe.png",
    shortDescription: "Figma",
    liveLink: "https://www.figma.com/proto/y2rkPec4d3WBCkEs4VzIzU/Singku-Cafe?node-id=1-76&starting-point-node-id=1%3A3261&t=nnGXKrKBiH4XiZIw-1",
    fullDescription: "The Singku Cafe app prototype reimagines the coffee ordering experience. With a focus on warmth and elegance, the design offers intuitive navigation, quick reordering, and a visually appetizing menu display, bridging the gap between a cozy physical cafe and digital convenience.",
    client: "Concept",
    role: "UI/UX Designer",
    year: "2025",
    heroImage: "/assets/Singku Cafe.png",
    gallery: [
      "/assets/Singku Cafe.png",
    ]
  },
  {
    slug: "time-collection",
    title: "Time Collection",
    category: "UI",
    thumbnail: "/assets/Time Collection.png",
    shortDescription: "Figma",
    liveLink: "https://www.figma.com/design/wlLPQXjNNaYsSePVEHpOQ1/Time-Collection?node-id=0-1&t=Tph2Fp6gkHJ93Ggo-1",
    fullDescription: "Time Collection is an exploration into premium e-commerce UI design for luxury timepieces. The interface relies on stark contrasts, high-quality imagery, and minimalist typography to let the products speak for themselves.",
    client: "Concept",
    role: "UI Designer",
    year: "2025",
    heroImage: "/assets/Time Collection.png",
    gallery: [
      "/assets/Time Collection.png",
    ]
  },
  {
    slug: "solmare",
    title: "Solmare",
    category: "UI",
    thumbnail: "/assets/Solmare.png",
    shortDescription: "Figma",
    liveLink: "https://www.figma.com/design/MfMmVXn3tME3XcNGC5ibsf/SOLMARE?node-id=0-1&t=z7LIIInBR47NQhTD-1",
    fullDescription: "Solmare is a sophisticated e-commerce UI concept for a premium wine brand. Built with a focus on elegant typography, high-end visual design, and a seamless purchasing flow tailored to wine enthusiasts.",
    client: "Concept",
    role: "UI Designer",
    year: "2025",
    heroImage: "/assets/solmare/Group 36.png",
    gallery: [
      "/assets/solmare/Group 38.png",
    ]
  }
];
