import SvgDynamic from '@Atoms/SvgDynamic'
import { css } from '@emotion/react'
import { NavbarStyle } from '@Styles/components/Navbar'
import { ButtonForm } from '@Styles/pages'
import { AddTodoFormWrapper } from '@Styles/pages/todo/addtodo'
import Link from 'next/link'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

const Navbar: FC = () => {
	const dispatch = useDispatch()
	return (
		<NavbarStyle>
			<AddTodoFormWrapper
				customStyle={css`
					display: flex;
					align-items: center;
					justify-content: space-around;
					background: #4f4f4f;
				`}
			>
				<ButtonForm
					customStyle={css`
						border: none;
						align-items: center;
						justify-content: center;
						color: white;
						border-radius: 5px;
						padding: 5px;
						cursor: pointer;
					`}
					onClick={() => {
						dispatch({ type: 'SIGNOUT' })
					}}
				>
					<SvgDynamic href='/icons/logout' />
				</ButtonForm>
			</AddTodoFormWrapper>
			<AddTodoFormWrapper
				customStyle={css`
					display: flex;
					align-items: center;
					justify-content: space-around;
					margin: 20px 0;
					a {
						color: #fff;
						text-decoration: none;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
					}
				`}
			>
				<Link href='/todo/addtodo'>
					<a>
						<SvgDynamic href='/icons/addtodo' styles={{ fill: 'white' }} />
					</a>
				</Link>
			</AddTodoFormWrapper>
			<AddTodoFormWrapper
				customStyle={css`
					display: flex;
					align-items: center;
					justify-content: space-around;
					margin: 20px 0;
					a {
						color: #fff;
						text-decoration: none;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
					}
				`}
			>
				<Link href='/todo/listtodo'>
					<a>
						<SvgDynamic href='/icons/list' styles={{ fill: 'white' }} />
					</a>
				</Link>
			</AddTodoFormWrapper>
		</NavbarStyle>
	)
}

export default Navbar
