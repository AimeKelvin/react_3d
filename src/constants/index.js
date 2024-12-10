export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const projects = [
    {
      image: "https://chrostedigital.vercel.app/assets/img/portfolio/portfolio_arserve.png",
      title: "Arserve company",
      subtitle: "A business website for a multiservice catering company based in Rwanda.",
      link: "https://arservecompany.com"
    },
    {
      image: "/ben.png",
      title: "Ben Real Estate",
      subtitle: "A real estate marketplace for rwanda agent Ben Shakondo",
      link: "https://kigalibenproperties.com"
    },
    {
      image: "https://www.chroste.com/assets/chroste%20landing%20page.png",
      title: "Chroste Labs",
      subtitle: "My own web development agency founded with the aim of providing affordable web dev services.",
      link: "https://chroste.com"
    },
    {
      image: "/chroste1.png",
      title: "The first chroste website",
      subtitle: "The business website of chroste when we first began.",
      link: "https://chrostedigital.vercel.app"
    },
  /*
    {
      image: "/vt.png",
      title: "3D Virtual Thread",
      subtitle: "A cloth customization app for stylists and fashionisters..",
      link: "#"
    }
  */
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Freecodecamp',
      pos: 'Learning the basics',
      duration: '2022 - 2023',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/fcc.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'SOS Technical Highschool',
      pos: 'Student Web Developer',
      duration: '2023 - 2026',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: 'https://img.icons8.com/?size=100&id=RWH5eUW9Vr7f&format=png&color=000000',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Chroste',
      pos: 'Lead Developer',
      duration: '2022 - Present',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/chrostexp.png',
      animation: 'salute',
    },
  ];