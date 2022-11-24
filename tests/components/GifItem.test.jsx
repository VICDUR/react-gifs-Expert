import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';

// console.log('render', render)


describe('Prueba en Gifitem', () => { 

    const url = "https://superman.com/clarken.jpg";
    const title = "supermanVolador";

    test('debe de hacer match con el snapshot', () => { 

        const { container } = render( <GifItem url={url} title={title} />);
        expect( container ).toMatchSnapshot();

    })


    test('debe de mostrar la imagen con el url y alt indicado', () => { 

        render( <GifItem url={url} title={title} />)
        // screen.debug()
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    })

    test('debe de mostrar el titulo con un largo de 10 caracteres', () => { 

        render( <GifItem url={url} title={title} />);
        expect( screen.getByText( title.slice(0, 10).trim() )).toBeTruthy();

     

    })


 });