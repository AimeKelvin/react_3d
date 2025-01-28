import Particles from "../components/Particles";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiNextdotjs, SiJavascript } from 'react-icons/si'; 

const About = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section className="flex flex-col justify-center items-center bg-transparent relative px-4 sm:px-6 lg:px-8 mb-20">
      {/* Background particles */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Content wrapper */}
      <div className="max-w-4xl text-center space-y-6 w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Smooth easing curve
          viewport={{ once: true }}
          className="head-text"
        >
          About Me
        </motion.h2>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-zinc-500 leading-relaxed relative"
        >
          <motion.p
            key="expanded"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1], // Smooth fade-in/out easing
            }}
          >
            I began my web development journey with <strong>FreeCodeCamp</strong>, learning coding on my own. After gaining confidence, I joined <strong>SOS Technical High School</strong> and co-founded <strong>Chroste Labs</strong>, where we collaborate on exciting projects. Today, I specialize in frontend and backend technologies.
          </motion.p>

          <motion.p
            key="expanded"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1], // Smooth fade-in/out easing
            }}
          >
            I’m skilled in building dynamic UIs with <strong>React</strong> and <strong>Next.js</strong>, backend development with <strong>Node.js</strong> and <strong>PHP</strong>, and managing databases with <strong>MySQL</strong>. I use <strong>Tailwind CSS</strong> for styling and <strong>JavaScript</strong> is my core language. I’m also exploring <strong>Three.js</strong> for 3D graphics, still a beginner but excited to grow.
          </motion.p>
        </motion.div>

        {/* Tools and languages icons */}
        <div className="flex justify-center gap-6 mt-8">
          <SiTailwindcss size={40} className="text-cyan-500" title="Tailwind CSS" />
          <SiJavascript size={40} className="text-yellow-500" title="JavaScript" />
          <FaReact size={40} className="text-cyan-600" title="React" />
          <SiNextdotjs size={40} className="text-white" title="Next.js" />
          {/* Resized Image */}
          <img 
            src="https://saarthack.github.io/portfolio/images/download-min.webp" 
            alt="Three.js" 
            className="w-10 h-10" 
            title="Three.js" 
          />
          <FaNodeJs size={40} className="text-green-600" title="Node.js" />
          <SiMysql size={40} className="text-blue-600" title="MySQL" />
          <FaPhp size={40} className="text-blue-600" title="PHP" />
        </div>
      </div>
    </section>
  );
};

export default About;
