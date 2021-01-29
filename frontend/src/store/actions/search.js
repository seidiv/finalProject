import {CHANGE_SEARCH_FIELD} from './types';

export const setSearchField = (text,objects) => ({
    type: CHANGE_SEARCH_FIELD ,
    text:text,
    objects:objects
})  