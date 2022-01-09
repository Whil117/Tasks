import { FC } from 'react'
import { useRouter } from 'next/router'
import StateSelector from '@Types/redux/selectors/types'
import { useSelector } from 'react-redux'
import AtomImage from '@Atoms/Image'
import { css } from '@emotion/react'
import { NextPageContext } from 'next'
interface IProps {
	pid: string | string[] | undefined
}

const ViewTodo: FC<IProps> = ({ pid }) => {
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
					<AtomImage
						src={item.image}
						alt={item.title}
						width={400}
						height={400}
						CustomStyle={css`
							object-fit: cover;
							object-position: top;
							border-radius: 10px;
						`}
					/>
				</div>
			))}
		</div>
	)
}
export async function getServerSideProps(context: NextPageContext) {
	const { pid } = context.query
	return {
		props: {
			pid,
		},
	}
}
export default ViewTodo
