import { key } from '../utils/constans'

export const request = (gifId, gifSearch) => ({
    searchGifs: `/gifs/search?api_key=${key}&limit=50&q=${gifSearch}`,
    getGif: `/gifs/${gifId}?api_key=${key}`,
})
