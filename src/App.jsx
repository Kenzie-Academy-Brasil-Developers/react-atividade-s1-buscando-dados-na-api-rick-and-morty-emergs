import { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';

function App() {
  const [characterList,setCharacterList] = useState([]);

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response)=>response.json())
    //.then((response)=>console.log(response.results))
    .then((response)=> {
      console.log(response)
      setCharacterList(response)})
    .catch((err)=>console.log(err))
  },[])

  console.log(characterList)

  return (
    <div className="App">
      <Characters characterList={characterList.results}/>
    </div>
  );
}

export default App;
