import HeadApp from '@Components/Head'
import AuthLayout from '@Components/layout/AuthLayout/AuthLayout'
import Layout from '@Components/layout/layout'
import { Global } from '@emotion/react'
import { persistor, store } from '@Redux/store/store'
import Normalize from '@Styles/global/Normalize'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from 'redux-persist/integration/react'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AuthLayout router={router}>
					<Layout router={router}>
						<Global styles={Normalize} />
						<HeadApp />
						<Component {...pageProps} />
					</Layout>
				</AuthLayout>
			</PersistGate>
		</Provider>
	)
}

export default MyApp
