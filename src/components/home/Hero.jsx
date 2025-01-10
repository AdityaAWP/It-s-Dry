import HeroImage from '../../assets/hero.jpeg'
import WorldImage from '../../assets/world.png'
import HeroImageBottom from '../../assets/hero2.jpg'
import Button from '../../elements/Button'
const Hero = () => {
  return (
    <div className='flex h-screen relative'>
      <div className='md:flex hidden flex-col justify-around items-center w-1/2 h-screen'>
        <img className='w-2/3 h-3/4 rounded-b-full' src={HeroImage} alt="" />
        <p className='text-black text-2xl font-semibold italic underline'>Look Around You They Suffer From This Dryness Madness</p>
      </div>
      <div className='flex md:mx-0 mx-5 text-center md:mt-0 mt-12 flex-col items-center justify-center md:w-1/2 font-condensed'>
        <h1 className='md:text-6xl text-5xl font-bold'>Global Unity <img className='md:w-28 w-14 m-auto md:inline md:-mx-5' src={WorldImage} alt="" /> For Drought Solutions.</h1>
        <Button text={"Write Your Concerns"}/>
        <img className='md:w-2/3 md:hidden w-3/4 md:h-1/3 h-1/3 mt-10 md:rounded-t-full rounded-3xl object-cover' src={HeroImageBottom} alt="" />
      </div>
      <div className='bg-gradient-to-r -mx-14 from-black/50 to-transparent via-transparent absolute inset-0 z-0 w-full'></div>
    </div>
  )
}

export default Hero
