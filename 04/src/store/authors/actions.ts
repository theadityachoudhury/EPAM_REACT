import { Author, AuthorsActionTypes } from './types';
import { setAuthors, addAuthor } from "./reducer";


export const setAuthorsAction = (authors: Author[]) => setAuthors(authors);
export const addAuthorAction = (author: Author) => addAuthor(author);
