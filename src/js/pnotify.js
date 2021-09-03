import {error} from "@pnotify/core";
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const errorPnotify = (title) => error({title, delay : 3000});

export const tooManyCountries = () => errorPnotify("Too Many Countries!!!");

export const noMatches = () => errorPnotify("No matches found");
