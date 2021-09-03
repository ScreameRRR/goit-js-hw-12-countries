import { refs } from './refs';
import { fetchCountries } from './fetchCountries';
import oneCountryMapkup from "../templates/oneCountryMapkup.hbs";
import countryList from "../templates/countryList.hbs";
import { noMatches, tooManyCountries } from "../js/pnotify";

const markup = (country) => {
    if (country.length > 10) {
        tooManyCountries();
    } else if (country.length === 1) {
        const markup = oneCountryMapkup(country)
        refs.placeForCountry.innerHTML = markup;
        setTimeout(() => { refs.inputRef.value = "" }, 3000)
    } else {
        const markup = countryList(country);
        refs.placeForCountry.innerHTML = markup;
    }
};

const onImputSubmit = e => {
    if (!refs.inputRef.value.trim()) return;
    fetchCountries(refs.inputRef.value.trim())
        .then(markup)
        .catch(() => noMatches())
};

const debounce = require('lodash.debounce');
refs.inputRef.addEventListener("input", debounce(onImputSubmit, 500));