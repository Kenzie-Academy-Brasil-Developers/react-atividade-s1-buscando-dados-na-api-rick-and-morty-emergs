import CharCard from "../CharCard";
import './style.css';

const Characters = ({characterList}) =>{
  //console.log(characterList)
  return(
    <div>
      <h1>Meus Personagens</h1>
      <ul>
        {
          characterList?.map((person)=>(
            <CharCard 
              key={person.id}
              name={person.name}
              status={person.status}
              image={person.image}
            />)
          )
        }
      </ul>
    </div>
    
  )
}

export default Characters;