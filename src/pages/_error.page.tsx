import Link from 'next/link'
import React from 'react'
import { MenuBlockStyle } from '~/components/Header/style'

import { SEO } from '~/components/SEO'

import { Container } from '~/styles/StyleLayout'

export default function pageError({ statusCode }: { statusCode: number }) {
	return (
		<>
			<SEO title="Page not found" description="Page not found" />
			<Container
				style={{
					display: 'flex !important',
					flexDirection: 'column !important',
					gap: '50px !important',
				}}
			>
				<p>
					{statusCode
						? `An error ${statusCode} occurred on server`
						: 'An error occurred on client'}
				</p>
				<Link href="/">
					<MenuBlockStyle href="/">HOME</MenuBlockStyle>
				</Link>
			</Container>
		</>
	)
}

pageError.getInitialProps = ({
	res,
	err,
}: {
	res: {
		statusCode: number
	}
	err: {
		statusCode: number
	}
}) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}
