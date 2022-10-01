import React from 'react'
import {useEffect, useState} from 'react'
import SearchBox from '../components/Search';
import { Link } from 'react-router-dom';



export default function Results({stext}) {
    const [result, setResult] = useState([])
    const[page, setPage] = useState(1)

    console.log ("hello from Results", stext)
   

    useEffect(() => {

      console.log ("hello from Results, settext value", stext)
        async function getData() {
          let response;
          try {
              console.log("API called text:", stext)  
              if (stext !== '' ) {
                  console.log("API called text:", stext)  
                  response = await fetch(`tthps://api.instantwebtools.net/v1/airlines=${stext}&page=${page}`)

              } else {
                response = await fetch('')
              }  
 
          const data = await response.json()
          const data2 = data.hits;
          data2.filter( item => {return !item.name});
          console.log("🚀 ~ data", data2)
          setResult((data2))
          } 
          catch (error) {
          console.log('ERROR:', error.message) 
          alert('error getting data')
          }
        } 
    
       if (stext) getData()

      }, [stext, page])
 

    return (

      result.length>0
     ?
     <div >
      <div >
     <ul>
      {result.map((items, idx) => <li key = {items.objectID} className ="grid grid-cols-4 gap-3">
           
        
            <div>{items.name}</div>
            <div>{items.tags}</div>
            <div>{items.category}</div>
            <div></div> 
        </li>)}
        
    </ul>
    </div>
  <button onClick={()=>{setPage(page + 1)}}>
   Load More
  </button>
    </div>
:<h1>Loading...</h1>
   )
}

