
import { getGif } from '../../src/helpers/getGif'


describe('prueba de getGif', () => { 

    test('debe de retornar un arreglo de gif', async () => { 

        const gifs = await getGif('superman')
        // console.log(gifs)
        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0]).toEqual({
           id: expect.any(String),
           title: expect.any(String),
           url: expect.any(String),
        })
         

     });




 })