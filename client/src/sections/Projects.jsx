import Card from "../components/Card";
import Particles from "../components/Particles";
import {projects} from '../constants/index.js'


const Projects = () => (
  <section className="min-h-screen bg-transparent relative px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" mt-5n id="projects">
    
    <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

 
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-center text-neutral-800 head-text">
        My Works
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {projects.map((project, index) => (
        <Card
          key={index}
          image={project.image}
          title={project.title}
          subtitle={project.subtitle}
          link={project.link}
        />
      ))}
    </div>
  </section>
);

export default Projects;
