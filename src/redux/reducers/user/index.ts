export const initialState = {
	authenticated: false,
	email: '',
	password: '',
}

export type UserReducer = ReturnType<typeof reducer>
const TypeReducers = {
	SIGNIN: (state = initialState, action: Action) => {
		return {
			...state,
			authenticated: true,
			email: action.payload.email,
			password: action.payload.password,
		}
	},
	SIGNOUT: (state = initialState, action: Action) => initialState,
}

type Action = {
	type: keyof typeof TypeReducers
	payload: any
}

const reducer = (state = initialState, action: Action) => {
	const { type } = action
	const handler = TypeReducers[type]
	const newState = handler ? handler(state, action) : state
	return newState
}
export default reducer
