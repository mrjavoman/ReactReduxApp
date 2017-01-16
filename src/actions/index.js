export function selectBook(book) {
    // select book is an ActionCreator, it needs to return an action,
    // an object with a type propery
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}