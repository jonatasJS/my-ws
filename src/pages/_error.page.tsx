import React from 'react'

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
