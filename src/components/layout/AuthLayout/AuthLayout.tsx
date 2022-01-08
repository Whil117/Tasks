import Redirect from '@Components/Redirect'
import StateSelector from '@Types/redux/selectors/types'
import { NextRouter } from 'next/router'
import { FC } from 'react'
import { useSelector } from 'react-redux'

interface IProps {
	router: NextRouter
}

const AuthLayout: FC<IProps> = ({ children, router }) => {
	const protectedRoutes = ['/todo/addtodo', '/todo/listtodo']
	const invalidPages = ['/', '/login', '/register']
	const { authenticated } = useSelector(
		(state: StateSelector) => state.userReducer
	)

	if (!authenticated && protectedRoutes.includes(router.pathname)) {
		return <Redirect href='/login' />
	}

	if (authenticated && invalidPages.includes(router.pathname)) {
		return <Redirect href='/todo/addtodo' />
	}
	return <>{children}</>
}

export default AuthLayout
