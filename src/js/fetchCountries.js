const BASE_URL = "https://restcountries.eu/rest/v2/name/";

export const fetchCountries = (searchQuery) => {
    return fetch(`${BASE_URL}${searchQuery}`)
    .then(responce =>{ if(!responce.ok) {
        throw Error(responce.statusText);
    }
        return responce.json()});
    }  