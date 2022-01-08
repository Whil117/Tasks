import { FC } from 'react'
import { useRouter } from 'next/router'
import StateSelector from '@Types/redux/selectors/types'
import { useSelector } from 'react-redux'
interface IProps {}

const ViewTodo: FC<IProps> = props => {
	const router = useRouter()
	const { pid } = router.query
	const data = useSelector((state: StateSelector) =>
		state.todosReducer.filter(item => item.id === pid)
	)
	return (
		<div>
			{data.map(item => (
				<div>
					<h1>{item.title}</h1>
					<p>{item.description}</p>
					<p>{item.date}</p>
					<img src={item.image} alt={item.title} />
				</div>
			))}
		</div>
	)
}

export default ViewTodo
