export const getAuthorsname = (authors: string[], authorsList: { id: string, name: string }[]) => { 
    //return a comma separated string of authors names
    return authors.map(authorId => authorsList.find(author => author.id === authorId)?.name).join(', ')
}