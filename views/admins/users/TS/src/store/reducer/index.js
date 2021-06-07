import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import getPproducts from './getPproducts';

const rootReducer = combineReducers({
    getPproducts
});

export default rootReducer;