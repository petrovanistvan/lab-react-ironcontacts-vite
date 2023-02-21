import { useState } from 'react'
import './App.css'
import contacts from "./contacts.json"

let actors = contacts.slice(0, 5);

let allActors = contacts;

function App() {

  const [count, setCount] = useState(5);

  function returnRandomActor() {
    
    let actorFound = false;
    const randomActor = Math.floor(Math.random() * (allActors.length - 5)) + 5;
    for (let i = 0; i < actors.length; i++) { 
      if (actors[i].name === allActors[randomActor].name) {
        actorFound = true;
        break;
      }
    }
    if (actorFound) {
      returnRandomActor();
    } else {
      setCount(count + 1);
      actors.push(allActors[randomActor]);
    }
  }

  function sortByPopularity(){
    actors.sort(function(a, b){return b.popularity - a.popularity});
    setCount(count + 1);
  }

  function sortByName() {
    actors.sort((a,b) => a.name.localeCompare(b.name));
    setCount(count + 1);
  }

  return (
    <div className="App">
        <h1>Ironcontacts</h1>
        <button onClick={returnRandomActor}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {actors.map((actor) =>
            <tr>
              <td>
                <img className="contactImage" src={actor.pictureUrl} alt="celeb" />
              </td>
              <td>{actor.name}</td>

              <td>{Math.round(actor.popularity * 100) / 100}</td>
              <td>{actor.wonOscar?"🏆":""}</td>
              <td>{actor.wonEmmy?"🏆":""}</td>
              <td><button>Delete</button></td>
            </tr>

          )}
            
          </tbody>
        </table>
    </div>
  )
}

export default App

// 🏆