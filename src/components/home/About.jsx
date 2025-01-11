import Button from "../../elements/Button";
import WorldGif from "../../assets/world.gif";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex py-16 font-condensed">
      <div className="flex-1 flex-col flex items-center justify-center">
        <div className="md:w-1/2 w-3/4">
          <h1 className="text-center text-3xl font-bold uppercase mb-4">
            Who Are We??
          </h1>
          <p className="tracking-wide md:text-xl text-mdd md:leading-relaxed ">
            We're a movement to solve drought problem by unity the world we're
            It's Dry, the driving force behind a movement that uses the
            universal language of music to address one of the world's most
            pressing issues drought...
          </p>
          <Link to={"/about"}>
            <Button text={"About Us"} />
          </Link>
        </div>
      </div>
      <div className="flex-1 md:flex hidden flex-col items-center mt-10 justify-center">
        <h1 className="text-4xl underline font-bold uppercase tracking-wide">
          Our Promise to the Planet
        </h1>
        <img src={WorldGif} className="w-1/4 mt-4" alt="" />
      </div>
    </div>
  );
};

export default About;
