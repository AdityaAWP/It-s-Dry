import HeroImage from "../../assets/hero.jpeg";
const Hero = () => {
  return (
    <div
      className="flex flex-col bg-cover pt-10 h-screen justify-center items-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="md:w-3/4 text-center text-white rounded-xl py-2 tracking-wide">
        <p className="md:text-8xl text-4xl font-bold leading-normal">
          FIGHT DROUGHT, SAVE LIVES
        </p>
        <br />
        <p className="md:text-4xl text-xl underline italic font-jersey">EVERY DROPS MATTERS.</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent"></div>
    </div>
  );
};

export default Hero;
