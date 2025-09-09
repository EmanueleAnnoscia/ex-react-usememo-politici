import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'


function App() {
  const [politicians, setPoliticians] = useState([])

  const fetchPoliticians =  async() => {
    const response = await fetch(`http://localhost:3333/politicians`)
    const data = await response.json()
    setPoliticians(data)
  }

  

  useEffect(() => {
      fetchPoliticians()
   }, []);


console.log(politicians)


  return (
    <>
    <div>
        {politicians.map((politician, index)=> (
           <Card 
           key={index}
           name = {politician.name}
           image = {politician.image}
           biography={politician.biography}
           position={politician.position}
            />
        ))}
    </div>
    </>
  )
}

export default App
