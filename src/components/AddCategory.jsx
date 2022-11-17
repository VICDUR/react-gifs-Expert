import { useState } from "react";
import Swal from 'sweetalert2';

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    };

    const onSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length <= 1 ) return Swal.fire({
            title: 'UPSS!',
            text: 'No hay suficiente texto para buscar.',
            imageUrl: 'https://media4.giphy.com/media/U2nN0ridM4lXy/giphy.gif?cid=790b7611d73b3aa850f47282d8e972bf3a473bdc318ebd81&rid=giphy.gif&ct=g',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            buttons: false, 
            timer: 2500
          })          

        setInputValue('');
        onAddCategory(inputValue.trim());
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
};
