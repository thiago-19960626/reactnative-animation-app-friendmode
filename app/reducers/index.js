import { combineReducers } from 'redux';
import { AppNavigator } from '../navigators/AppNavigator';

import nav from './nav';
import notification from './notification';

const AppReducer = combineReducers({
    nav,
    notification
});

export default AppReducer;