import React, {  } from 'react'
import type { AppProps } from 'next/app'
import NextApp from 'next/app'

import { StyleLayout } from '~/styles/StyleLayout'
import { GlobalStyles } from '~/styles/GlobalStyles'
import { Header } from '~/components/Header'

const App: React.FC<AppProps> = (props) => {
	return (
		<StyleLayout>
			<Header />
			<GlobalStyles />
			<NextApp {...props} />
		</StyleLayout>
	)
}

export default App
