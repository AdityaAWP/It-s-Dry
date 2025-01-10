import { FaArrowRight } from "react-icons/fa";

const Button = ({text}) => {
  return (
    <button className='bg-accent text-white/70 flex items-center py-2 md:pl-7 pl-3 pr-2 mt-8 md:font-bold md:text-xl text-lg gap-2 rounded-r-full'>{text}<div className="bg-white rounded-full md:p-3 p-1"> <FaArrowRight className="text-black"/> </div></button>
  )
}

export default Button
