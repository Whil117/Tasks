import { InitTodosState } from '@Redux/reducers/todos'
import { UserReducer } from '@Redux/reducers/user'

type StateSelector = {
	userReducer: UserReducer
	todosReducer: InitTodosState[]
}
export default StateSelector
