import Navbar from '@Components/Navbar'
import { Wrapper } from '@Styles/pages'
import { NextRouter } from 'next/router'
import { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
interface IProps {
	children: ReactNode
	router: NextRouter
}

const Layout: FC<IProps> = ({ children, router }) => {
	const invalidPages = ['/', '/login', '/register']
	return (
		<>
			<ToastContainer />
			{!invalidPages.includes(router.pathname) ? (
				<>
					<Navbar />
					<Wrapper>{children}</Wrapper>
				</>
			) : (
				children
			)}
		</>
	)
}

export default Layout
