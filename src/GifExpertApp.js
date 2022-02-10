import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { AddCategoria } from './componentes/AddCategoria';
import { GifGrid } from './componentes/GifGrid';

const GifExpertApp = () => {

    // const [categorias, setCatg] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categorias, setCatg] = useState(['One Punch']);
    // const handleAnade = () => {
    //     setCatg( (cats) =>  [...cats, 'Nuevo']); // Añade un elemento al arreglo
    // }

    return (<>
        <h2>GifExpertApp</h2>
        <AddCategoria setCatg={ setCatg } />
        <hr/>
        {/* <button onClick={ handleAnade }>Añadir</button> */}
        <ol>
            {
                categorias.map( catg => (
                    <GifGrid key={catg}
                    categoria={catg}
                    />
                ))
            }
        </ol>
    </>);
}

//esta parte hace que se controlen las props
GifExpertApp.propTypes = {
    // saludo: PropTypes.string.isRequired //declara el tupo de dato
}

GifExpertApp.defaultProps = {
    // subtitulo: 'valor por defecto de subtítulo'
}

export default GifExpertApp;