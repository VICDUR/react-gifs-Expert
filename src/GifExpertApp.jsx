import { useState } from "react"
import Swal from "sweetalert2";
import { AddCategory, GifGrid } from "./components/";


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['superman']);
                          
  const onAddCategory  = (input) => { 
    
    if( categories.includes(input) ) return Swal.fire('La categoria ya existe');
    
    setCategories([  input, ...categories]);
  }

  return ( 
    <>  

        <h1>GifExpertApp</h1>
        <AddCategory  
          onAddCategory = { onAddCategory } 
        />
      
        { 
        categories.map( ( category ) => (
          <GifGrid 
            key={ category }
            category={ category }
          /> 
          ))
        }

    </>
  )
}

export default GifExpertApp