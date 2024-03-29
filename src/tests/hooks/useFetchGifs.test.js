import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';



describe("Probando el custom Hook", () => {
 
   test("Debe de retornar el estado inicial", async () => {
 
   //const { data, loading } = useFetchGifs("One Punch");

      
   const { result, waitForNextUpdate} = renderHook( () => useFetchGifs("One Punch") );
   
   const { data, loading } = result.current;
   // fijate que en result.current tendré lo que devuelva cada hook,éste en concreto devuelve 'data' y 'loading'.

   // debemos esperar obligatoriamente 
   await waitForNextUpdate();
   expect( data ).toEqual([])
   expect( loading ).toBeTruthy();
   // y asi es como se llama a un hook con la libreria externa
  });

test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
   
   const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("One Punch") );

   await waitForNextUpdate();

   const { data, loading } = result.current;

   expect( data.length ).toBe(4)
   expect( loading ).toBeFalsy();

})





});
