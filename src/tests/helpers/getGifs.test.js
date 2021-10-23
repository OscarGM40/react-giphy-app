import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con el helper getGifs', () => {
   
   // recuerda que puedo hacer el test asincrono cuando quiera
   test('Debe de traer 4 elementos', async () => {
      const gifs = await getGifs('One Punch') ;
      expect(gifs.length).toEqual(4)
   })
   
   test('Debe de proporcionarse una categoria', async() => {
      const gifs = await getGifs("") ;
      expect(gifs.length).toBe(0)
      
   })
   
})
