import React, { useState } from 'react'

function Searchbar({setCity}) {

    let [Inputvalue, setInputvalue] = useState(" ")

    const HandleSearch = () => {
        
        if(Inputvalue.trim() !== ""){

            setCity(Inputvalue)

            console.log(Inputvalue);

            setInputvalue("");
        }
    }

  return (
    <>
    <div className='h-screen w-1/4 p-16 absolute right-0 backdrop-blur shadow'>
    <h1 className="text-3xl text-center text-white mb-16 p-6">Today's Weather</h1>

    <input className='h-8 text-center border-b-2 bg-transparent ' placeholder='Search Location...' value={Inputvalue} onChange={(e) => {setInputvalue(e.target.value) }}></input>

    <button className='w-20 h-8 border-none' onClick={HandleSearch}>Search</button>

    </div>
    
    
    </>
  )
}

export default Searchbar