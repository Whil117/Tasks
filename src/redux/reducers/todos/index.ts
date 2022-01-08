export type InitTodosState = {
	id: string
	date: string
	title: string
	description: string
	image: string
}

export const initialState: InitTodosState[] = []
export type todoReducer = ReturnType<typeof reducer>

const TypesReducers = {
	ADD_TODO: (state = initialState, action: Action) => [
		...state,
		{
			id: action.payload.id,
			date: action.payload.date,
			title: action.payload.title,
			description: action.payload.description,
			image: action.payload.image,
		},
	],
}

type Action = {
	type: keyof typeof TypesReducers
	payload: any
}

const reducer = (state = initialState, action: Action) => {
	const { type } = action
	const handler = TypesReducers[type]
	const newState = handler ? handler(state, action) : state
	return newState
}

export default reducer
