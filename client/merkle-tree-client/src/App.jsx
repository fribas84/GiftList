import { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import ResultModal from './components/ResultModal';

function App() {
  const [showModal,setShowModal] = useState(false);
  const [name,setName] = useState("");
  const [won,setWon] = useState(false);
  const [check,setCheck] = useState(false);
  const [error, setError] = useState(false);
  const [message,setMessage] = useState("");


  useEffect(() => {
    if(check){
      
      setShowModal(true);
    }
    else{
      setShowModal(false);
    }
  }, [check])

  useEffect(()=>{
    setError(false);
},[name])
  

  return (
    <div className='container mx-auto'>
      <Header />
      <Search 
        setName = {setName}
        name = {name}
        setCheck = {setCheck}
        error={error}
        setError={setError}
        setWon={setWon}
        setMessage={setMessage}
      />
      <ResultModal
        name={name}
        won={won}
        showModal={showModal}
        setShowModal={setShowModal}
        setCheck={setCheck}
        setName={setName}
        message={message}
      />
    </div>
  )
}

export default App
