interface CardHeaderProps {
    name: string;
    role: string;
    picture: string;
}

const CardHeader = ({name, role, picture}: CardHeaderProps) => {
  return (
    <header className="relative pt-14 pb-7 text-center z-1">
        <div className="absolute bg-linear-to-r from-primary to-primary-light h-24 w-full -z-1 top-0"></div>
        <img src={picture} className="w-20 h-20 rounded-full overflow-hidden object-cover border-4 border-gray-800 mx-auto" alt="Team member"/>
        <h3 className="text-xl lg:text-2xl font-semibold">{name}</h3>
        <p className="text-sm lg:text-base text-primary-light font-medium">{role}</p>
    </header>
  )
}

export default CardHeader