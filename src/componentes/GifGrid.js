// import React, {useEffect, useState} from 'react';
import React from 'react';
// import { getImagenes } from '../helpers/cargaImag';
import { useTraeGifs } from '../hooks/useTraeGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {
/*
    //estado para manejar imágenes
    const [imagenes, setImagenes] = useState([]);
    useEffect( () => {
        getImagenes(categoria).then( setImagenes ); //da lo mismmo: primer parámetro usado en la función invocada 
    }, []) //no depende de otro objeto y se ejecuta una sola vez.
*/
    //usa el hook: useTraeGifs y renombra data a imagenes
    const {data: imagenes, cargando} = useTraeGifs( categoria );

    return (
        <>
        <h3>{ categoria }</h3>
        {/* { cargando ? 'Cargando datos...' : '' } */}
        { cargando && <p className='animate__animated animate__flip'>Cargando...</p> }
        <div className="tarjeta-grid">
            {
                imagenes.map( im => (
                    <GifGridItem 
                    key={im.id}
                    {...im}
                    />    
                ))
            }
        </div>
        </>
  )
};
