import React from 'react';

// export const GifGridItem = (img) => {  --> se usa img.imagen.id
/*
export const GifGridItem = ({ imagen }) => {  // --> se usa imagen.id
    // console.log('img', img);
    return (
        <div>
            <img src={imagen.url} alt={imagen.title}/>
            <p>{imagen.title}</p>
        </div>  
    )
};
*/

export const GifGridItem = ({ title, url }) => {  // --> se usa los datos
    return (
        <div className='tarjeta animate__animated animate__fadeIn'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>  
)};