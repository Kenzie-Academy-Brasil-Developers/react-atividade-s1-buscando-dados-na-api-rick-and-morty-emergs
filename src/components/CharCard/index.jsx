import './style.css';

const CharCard = ({key,name,status,image}) =>{
  console.log(image)
  return(
    status === 'Alive'?
    <li className='liCard liCardAlive'>
      <h3>{name}</h3>
      <img src={image} alt="avatar" />
    </li>
    :
    <li className='liCard liCardDead'>
      <h3>{name}</h3>
      <img src={image} alt="avatar" />
    </li>
  )
}

export default CharCard;