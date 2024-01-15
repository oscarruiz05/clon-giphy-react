/* eslint-disable @typescript-eslint/no-explicit-any */
const getGifs = async (search: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=h7WDtoMMfZzf6PUXx94bx1REuo0jexLP&q=${search}&limit=25&rating=g&lang=es`;
    const response: any = await fetch(url);
    const {data} = await response.json();

    return data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.fixed_height_downsampled.url
        }
    });
};

export {
    getGifs,
}
