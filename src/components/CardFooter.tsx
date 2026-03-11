import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

interface CardFooterProps {
  bio: string;
}

const CardFooter = ({bio}: CardFooterProps) => {
  return (
    <footer className="border-t border-gray-700/50 p-5">
      <p className="text-gray-400 mb-4">{bio}</p>
      <div className="flex gap-4 justify-center">
        <a href="#" className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-600/50 transition-all duration-300 hover:bg-primary-light hover:text-black hover:-translate-y-1"><FaLinkedinIn/></a>
        <a href="#" className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-600/50 transition-all duration-300 hover:bg-primary-light hover:text-black hover:-translate-y-1"><FaTwitter/></a>
        <a href="#" className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-600/50 transition-all duration-300 hover:bg-primary-light hover:text-black hover:-translate-y-1"><FaGithub/></a>
      </div>
    </footer>
  )
}

export default CardFooter