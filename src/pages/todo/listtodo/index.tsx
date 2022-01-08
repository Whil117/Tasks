import { css } from '@emotion/react'
import { InitTodosState } from '@Redux/reducers/todos'
import { AddTodoFormWrapper } from '@Styles/pages/todo/addtodo'
import StateSelector from '@Types/redux/selectors/types'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'

const ViewTodo: FC = () => {
	const data = useSelector((state: StateSelector) => state.todosReducer)
	console.log(data)

	return (
		<div>
			<h1>List Todos</h1>
			{data.map((item: InitTodosState) => (
				<Link href={`/todo/viewtodo/${item.id}`} passHref>
					<a>
						<AddTodoFormWrapper
							customStyle={css`
								margin: 10px;
								width: 426px;
								height: 85px;
								background: #ffffff;
								box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
								border-radius: 10px;
								display: flex;
								align-items: flex-start;
								justify-content: space-between;
								padding: 10px;
								h2,
								p {
									margin: 0;
								}
							`}
							key={item.id}
						>
							<div>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
							</div>
							<p>{item.date}</p>
						</AddTodoFormWrapper>
					</a>
				</Link>
			))}
		</div>
	)
}

export default ViewTodo
