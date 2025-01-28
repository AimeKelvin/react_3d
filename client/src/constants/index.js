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
      title: "I learned the basics of development on FreeCodeCamp, gaining a strong foundation in HTML, CSS, and JavaScript. This self-paced learning experience sparked my passion for coding and set me on the path to advancing my skills.",
      icon: '/fcc.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'SOS Technical Highschool',
      pos: 'Student Web Developer',
      duration: '2023 - 2026',
      title: "I’m studying software development at SOS Technical High School in Rwanda, gaining hands-on experience in programming and engineering. This training is strengthening my skills and preparing me for a career in tech.",
      icon: 'https://img.icons8.com/?size=100&id=RWH5eUW9Vr7f&format=png&color=000000',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Chroste',
      pos: 'Lead Developer',
      duration: '2022 - Present',
      title: "As Lead Developer at Chroste Labs, I oversee project development, ensuring code quality and making key architectural decisions. My role has strengthened both my technical and leadership skills while fostering creativity and problem-solving.",
      icon: '/chrostexp.png',
      animation: 'salute',
    },
  ];