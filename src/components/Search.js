
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Results from '../Pages/Results';




  export default function SearchBox() {
 

    const [searchText, setSearchText] = useState("");

    function handleChange(e){
        setSearchText(e.target.value)
    }

    return <div >
   <hr></hr>

    <div>
   
    </div>  <input className="rounded-lg" type="text" placeholder='Type your search' defaultValue ="" onChange={handleChange} />

<Link to={`/Results`} className="rounded-lg bg-red-600 px-4 py -2 shadow-lg">Search</Link>
<hr></hr>
</div>

}
