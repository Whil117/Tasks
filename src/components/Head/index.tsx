import { FC } from 'react'
import Head from 'next/head'

const HeadApp: FC = () => {
	return (
		<Head>
			<link
				href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
				rel='stylesheet'
			/>
		</Head>
	)
}

export default HeadApp
