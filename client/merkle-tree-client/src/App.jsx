import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import ResultModal from './components/ResultModal';

function App() {
  const [showModal,setShowModal] = useState(false);
  const [name,setName] = useState("");
  const [won,setWon] = useState(false);
  const [checked,setChecked] = useState(false);

  return (
    <div className='container mx-auto'>
      <Header />
      <Search 
        setName = {setName}
        name = {name}
      />
      <ResultModal
        name={name}
        won={won}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default App
