interface CardProps {
    children: React.ReactNode;
}

const Card = ({children}: CardProps) => {
  return (
    <div className="relative flex flex-col bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:-translate-y-2">{children}</div>
  )
}

export default Card