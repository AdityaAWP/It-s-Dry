import Button from "../../elements/Button"
import WorldImage from "../../assets/world.png"
const About = () => {
  return (
    <div className="flex py-10">
      <div className="flex-1 flex-col flex items-center justify-center">
        <div className="w-3/4">
        <p className="tracking-wide md:text-xl text-md font-condensed md:leading-relaxed ">Welcome to It's Dry, the driving force behind a movement that uses the universal language of music to address one of the world's most pressing issues—drought. We believe in the power of art, community, and collaboration to inspire action and create lasting change....</p>
        <Button text={"About Us"}/>
        </div>
      </div>
      <div className="flex-1 md:flex hidden flex-col items-center mt-10 justify-center">
        <h1 className="text-4xl font-bold font-condensed">Our Promise to the Planet</h1>
        <img src={WorldImage} className="w-1/3" alt=""  />
      </div>
    </div>
  )
}

export default About
