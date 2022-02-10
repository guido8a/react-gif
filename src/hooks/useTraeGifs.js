
import {useState, useEffect} from 'react';
import { cargaImagenes } from '../helpers/cargaImag';

export const useTraeGifs = (categoria) => {
     const [estado, setEstado] = useState({
        data: [],
        cargando: true
     }); 
     
     useEffect(() => {
         cargaImagenes(categoria)
         .then( imgs => {
            // console.log(imgs);
            setTimeout( () => {
                setEstado({
                   data: imgs,
                   cargando: false
                })
            }, 500);

         })
     }, [categoria])
     
     return estado; //estado = {data:[], cargando: true}
};