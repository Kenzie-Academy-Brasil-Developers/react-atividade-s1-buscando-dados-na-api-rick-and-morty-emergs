import './style.css';

const CharCard = ({key,name,status,image}) =>{
  //console.log(image)
  return(
    
    <li key={key} className={status === 'Alive'? 'liCard liCardAlive' : 'liCard liCardDead'}>
      <h3>{name}</h3>
      <img src={image} alt="avatar" />
    </li>
  )
}

export default CharCard;