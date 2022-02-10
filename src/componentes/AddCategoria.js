import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategoria = ({ setCatg }) => {
    const [entrada, setEntrada] = useState('') //no se puede dejar vacío
    const handleEntrada = ( e )=> {
        setEntrada(e.target.value);
    }
    const handleSubmit = ( e )=> {
        e.preventDefault();
        console.log("Hecho submit", entrada);
        // setCatg( cats => [...cats, entrada]); // anñade al último
        setCatg( cats => [entrada, ...cats]); // anñade al principio
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={entrada}
        onChange={ handleEntrada }
        />
      </form>
    )  
};

AddCategoria.propTypes = {
    setCatg: PropTypes.func.isRequired
}