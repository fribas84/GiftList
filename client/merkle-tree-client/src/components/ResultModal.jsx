import React, { useEffect } from 'react'
import Modal from 'react-modal';





const ResultModal = ({name,won,showModal,setShowModal,setCheck,setName,message}) => {
  const handleClose = ()=>{
    setName("");
    setCheck(false);
    setShowModal(false);
  }
  return (
    <Modal
    isOpen={showModal}
    onRequestClose={()=>setShowModal(false)}
  
    ariaHideApp={false}>
      <div className='justify-center items-center flex flex-col h-3/4'>
        <div className='self-center text-3xl font-semibold'>
          {message}
        </div>
      
      <button 
        onClick={handleClose}
        className="fluid px-4 text-xl text-white bg-red-600 border-l mt-10 rounded-lg ml-2">
          Close
      </button>
      </div>

    </Modal>
  )
}

export default ResultModal