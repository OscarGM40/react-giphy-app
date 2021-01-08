import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
   const [state, setState] = useState({
    data: [],
    loading: true,
  });


  useEffect(() => {
        
      setTimeout(() => {
           
           getGifs(category).then(
              imgs => setState({
                 data: imgs,
                 loading: false
              })
           )

        },200)

    }, [category]); 


  return state; //state es un objeto con un array y un boleano <- es el estado de este custom hook
};
