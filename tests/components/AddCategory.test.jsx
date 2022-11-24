import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"



describe('prueba en AddCategory', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 

        //Se crea el sujeto de pruebas
        render( <AddCategory  onAddCategory={() => {}} /> );
        // estraemos el input el cual tiene una relacion directa con el screen.getByRole...
        const input = screen.getByRole("textbox");
        // disparamos el evento 
        fireEvent.input( input, { target: { value: 'Superman'}} );
        // hacer asercion de lo que estamos esperando que suceda despues del evento
        expect( input.value ).toBe('Superman');
        
        // screen.debug()
        
    });
    
    test('debe de llamar onAddCategory si el imput tiene un valor', () => { 
        
        const inputValue    = 'Superman';
        const onAddCategory = jest.fn();

        render( <AddCategory  onAddCategory={onAddCategory} /> );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');
        
        expect( onAddCategory ).toHaveBeenCalled(); // funcion llamada
        expect( onAddCategory ).toHaveBeenCalledTimes(1); // funcion llamada una sola vez
        expect( onAddCategory ).toHaveBeenCalledWith( inputValue ); // funcion llamada con el valor de inputValue
        
        
    });

    test('No debe de llamar el onAddCategory si el imput esta vacion', () => { 

        const inputValue    = '';
        const onAddCategory = jest.fn();

        render( <AddCategory  onAddCategory={onAddCategory} /> );

        const form  = screen.getByRole('form');
        fireEvent.submit(form );


        expect( onAddCategory ).toHaveBeenCalledTimes(0); // no se llama ni una sola vez la funcion

    });


 });