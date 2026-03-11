import Card from "./Card";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import team from "../data/team.json";

const Cards = () => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {team.map((member) => {
            return (
               <Card key={member.id}>
                    <CardHeader name={member.name} role={member.role} picture={member.picture}/>
                    <CardFooter bio={member.bio}/>
                </Card> 
            )
        })}
    </section>
    
  )
}

export default Cards