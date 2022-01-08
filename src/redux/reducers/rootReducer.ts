import { combineReducers } from 'redux'
import todosReducer from './todos'
import userReducer from './user'
const rootReducer = combineReducers({
	userReducer,
	todosReducer,
})
export default rootReducer
