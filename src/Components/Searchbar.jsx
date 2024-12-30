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
    <div className='flex items-center space-x-2 mb-6'>

    <input className='h-8 border-2 border-black rounded text-center' placeholder='Enter City Name' value={Inputvalue} onChange={(e) => {setInputvalue(e.target.value) }}></input>

    <button className='w-20 h-8 border-2 border-black rounded' onClick={HandleSearch}>Search</button>

    </div>
    
    
    </>
  )
}

export default Searchbar