import { useState, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'


function App() {
  const [politicians, setPoliticians] = useState([])
  const [search, setSearch] = useState("");

  const fetchPoliticians = async () => {
    const response = await fetch(`http://localhost:3333/politicians`)
    const data = await response.json()
    setPoliticians(data)
  }

//funzione di rcicerca dei politici
const filteredPoliticians = useMemo(()=>{
  return politicians.filter( p => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.biography.toLowerCase().includes(search.toLocaleLowerCase())
  )
}, [politicians, search])
  useEffect(() => {
    fetchPoliticians()
  }, []);


  console.log(politicians)


  return (
    <>
      <div>
        {/*sezione degli input di ricerca*/}
        <input type="text"
        placeholder ="Cerca per Nome o per Biografia"
        value = {search}
        onChange = {e => setSearch(e.target.value)} />

        {filteredPoliticians.map((politician, index) => (
        <Card
          key={index}
          name={politician.name}
          image={politician.image}
          biography={politician.biography}
          position={politician.position}
        />
      ))}
      </div>
    </>
  )
}

export default App
