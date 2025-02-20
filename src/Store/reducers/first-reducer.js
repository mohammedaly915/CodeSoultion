import { combineReducers } from 'redux';

const initialState = {
    selectedService: 'all',
    works: [
      {
        id: 1,
        title: 'Smart Analytics Platform',
        service: 'Data Analytics',
        image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
      },
      {
        id: 2,
        title: 'AI-powered Chatbot',
        service: 'AI Solutions',
        image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
      },
    ],
  };
  
  export const workReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_SERVICE':
        return { ...state, selectedService: action.payload };
      case 'SET_WORKS':
        return { ...state, works: action.payload };
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
  reducer:workReducer
});

export default rootReducer;
