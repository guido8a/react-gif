export const cargaImagenes = async( categoria ) => {
    const url= `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(categoria)}&api_key=8RZk749kH8pzJrQwdvw7Y8d60cV07Z2L`;
    const resp = await fetch(url);
    const { data } = await resp.json();  //desestructura data
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}
