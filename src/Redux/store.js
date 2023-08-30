
// Importing the `createStore` function from the 'redux' library.
import { createStore } from 'redux';

// Importing the reducer module from './reducer'.
import reducer from './reducer';

// Creating a Redux store by passing the `reducer` function to the `createStore` function.
const store = createStore(reducer);

// Exporting the created store so that it can be used in other parts of the application.
export default store;
