import Card from "../components/Card";
import Particles from "../components/Particles";

const Projects = () => (
  <section className="min-h-screen bg-transparent relative px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
    {/* Particles background */}
    <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

    {/* Section title */}
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-center text-neutral-800 dark:text-white">
        my Works
      </h2>
    </div>

    {/* Cards grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      <Card
        image="https://chrostedigital.vercel.app/assets/img/portfolio/portfolio_arserve.png"
        title="Arserve company"
        subtitle="A business website for a multiservice catering company based in Rwanda."
        link="https://arservecompany.com"
      />
      <Card
        image="https://www.chroste.com/assets/kevin.com.png"
        title="TripleK.com"
        subtitle="A portfolio website for a young Artist based in Rwanda"
        link="https://triplek.vercel.app"
      />
      
      <Card
        image="https://www.chroste.com/assets/chroste%20landing%20page.png"
        title="Chroste Labs"
        subtitle="My own web development agency founded with the aim of providing affordable web dev services."
        link="https://chroste.com"
      />
     
    </div>
  </section>
);

export default Projects;
