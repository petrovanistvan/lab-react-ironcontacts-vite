import { useState } from 'react'
import './App.css'
import contacts from "./contacts.json"

let firstFive = contacts.slice(0, 5);
console.log(firstFive);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>Ironcontacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          {firstFive.map((actor) =>
            <tr>
              <td>
                <img className="contactImage" src={actor.pictureUrl} alt="celeb" />
              </td>
              <td>{actor.name}</td>

              <td>{Math.round(actor.popularity * 100) / 100}</td>
            </tr>

          )}
            
          </tbody>
        </table>
    </div>
  )
}

export default App
