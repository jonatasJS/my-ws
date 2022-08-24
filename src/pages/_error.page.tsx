import Link from 'next/link'
import React from 'react'
import { MenuBlockStyle2 } from '~/components/Header/style'

import { SEO } from '~/components/SEO'

import { Container } from '~/styles/StyleLayout'

export default function pageError({ statusCode }: { statusCode: number }) {
	return (
		<>
			<SEO title="Page not found" description="Page not found" />
			<Container>
				<p>
					{statusCode
						? `An error ${statusCode} occurred on server`
						: 'An error occurred on client'}
				</p>
				<Link href="/">
					<MenuBlockStyle2 href="/">HOME</MenuBlockStyle2>
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
