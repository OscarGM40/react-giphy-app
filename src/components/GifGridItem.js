import React from 'react';
// hay un shortcut para las props (impt)
import PropTypes from 'prop-types';

// recuerda que puedo hacer que sea obligatorio pasarlas
const GifGridItem = ({title,url}) => {
   
   return (
      <div className="card animate__animated animate__bounce">
         <img src={url} alt={title}></img>
         <p>{title}</p>
      </div>
   )
}
// ESto no es dificil,debo implementar el testeo y las proptypes en mi kit de React.
// fijate que esto indica que el title y la url que recibe por props son requeridas y son un String.Interesante,asinto.
GifGridItem.propTypes = {
   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
}

export default GifGridItem;



//Tarea 
// 1- Configurar Enzyme
// 2- Configurar Enzyme to JSON
// 3- debe de mostrar el componente correctamente
// * shallow + wrapper.toMatchSnapShot()
