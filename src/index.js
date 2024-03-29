import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';

// Redux Imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// ------------- Reducers -------------
const feeling = (state = 0, action) => {
    if ( action.type === 'SET_FEELING' ) {
        return action.payload;
    } else if ( action.type === 'CLEAR_FORM' ) {
        return 0;
    }
    return state;
}

const understanding = (state = 0, action) => {
    if ( action.type === 'SET_UNDERSTANDING' ) {
        return action.payload;
    } else if ( action.type === 'CLEAR_FORM' ) {
        return 0;
    }
    return state;
}

const support = (state = 0, action) => {
    if ( action.type === 'SET_SUPPORT' ) {
        return action.payload;
    } else if ( action.type === 'CLEAR_FORM' ) {
        return 0;
    }
    return state;
}

const comments = (state = '', action) => {
    if ( action.type === 'SET_COMMENTS' ) {
        return action.payload;
    } else if ( action.type === 'CLEAR_FORM' ) {
        return '';
    }
    return state;
}

const feedbackList = (state = [], action) => {
    if ( action.type === 'SET_FEEDBACK_LIST' ) {
        return action.payload;
    }
    return state;
}

const flagged = (state = false, action) => {
    if ( action.type === 'SET_FLAGGED' ) {
        return action.payload;
    } else if ( action.type === 'CLEAR_FORM' ) {
        return false;
    }
    return state;
}
// ------------- End of Reducers -------------

// Store
const storeInstance = createStore(
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments,
            feedbackList,
            flagged,
        }
    ),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
