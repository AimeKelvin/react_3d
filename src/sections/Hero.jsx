import Particles from "../components/Particles";

const Hero = () => {
  return (
    <section>
    
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
    
     
      <div className="flex justify-center items-center min-h-screen pt-20">
        <div className="text-center">
          
        <h1 className=" font-bold text-9xl duration-500 text-zinc-300">Aim3 Kelvin</h1>
          <p className="text-lg duration-500 text-zinc-500 hover:text-zinc-300">
            Web developer & Solo entrepreneur
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
