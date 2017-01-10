import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import booksReducer from './reducers/reducer_books'


const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;

// // Create a new component. This component should produce some HTML
// const App = () => {

//     return (
//         <div>
//             Hello World!
//         </div>
//     );
// }

// // Take Component and put it in the DOM
// ReactDOM.render(<App />, document.querySelector('.container'));