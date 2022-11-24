import { getAllByRole, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 

    const  category = 'One Punch';

    test('debe de mostrar el loading incialment', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={category}/>);
        expect(screen.getByText('Cargando...') );
        expect(screen.getByText( category ) );
        // screen.debug();

     });

     test('debe de mostar items cuando se cargan las imagenes useFecthGifs', () => { 

        const gifs = [
            { 
                id: 'ABC',
                title: 'Superman',
                url: 'Https://localhost/Superman.jpg'
            },
            { 
                id: 'ABD',
                title: 'Sanson',
                url: 'Https://localhost/Sanson.jpg'
            },
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={category} /> );
      
        expect( screen.getAllByRole('img').length ).toBe(2);
      
      });









    
    
});