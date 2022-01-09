import AtomImage from '@Atoms/Image'
import { css } from '@emotion/react'
import { InitTodosState } from '@Redux/reducers/todos'
import { AddTodoFormWrapper } from '@Styles/pages/todo/addtodo'
import {
	ListItemDate,
	ListItemDescript,
	ListItemHeader,
} from '@Styles/pages/todo/listtodo'
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
			<AddTodoFormWrapper
				customStyle={css`
					display: flex;
					flex-wrap: wrap;
				`}
			>
				{data.map((item: InitTodosState) => (
					<Link href={`/todo/viewtodo/${item.id}`} passHref>
						<AddTodoFormWrapper
							customStyle={css`
								margin: 10px;
								background: #ffffff;
								box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
								border-radius: 10px;
								display: flex;
								flex-direction: column;
								align-items: flex-start;
								justify-content: space-between;
								padding: 10px;
								color: #000000;
								cursor: pointer;
								h2,
								p {
									text-decoration: none;
									margin: 0;
								}
							`}
							key={item.id}
						>
							<ListItemHeader>
								<div>
									<h2>{item.title}</h2>
									<ListItemDescript>{item.description}</ListItemDescript>
								</div>
								<ListItemDate>
									<p>{item.date}</p>
								</ListItemDate>
							</ListItemHeader>
							<AtomImage
								src={item.image}
								alt={item.title}
								width={400}
								height={200}
								CustomStyle={css`
									object-fit: cover;
									object-position: top;
									border-radius: 10px;
								`}
							/>
						</AddTodoFormWrapper>
					</Link>
				))}
			</AddTodoFormWrapper>
		</div>
	)
}

export default ViewTodo
