
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';




export default function SearchBox() {
 
    const [searchText, setSearchText] = useState("");

    function handleChange(e){
        setSearchText(e.target.value)
    }

    return (
    <div className='mt-5'>
        <input className="rounded-lg border-gray-400 border py-1" type="text" placeholder='Type your search' defaultValue ="" onChange={handleChange} />
        <Link to={`/results/${searchText}`} className="rounded-lg bg-red-600 px-4 py-2 shadow-lg"><button>Search</button></Link>
    </div>
    )

}