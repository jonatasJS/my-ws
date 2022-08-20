import React from 'react'

import { SEO } from '~/components/SEO'

import { Container } from "~/styles/StyleLayout";

export default function Home() {
	return (
		<>
			<SEO
				title="Next Rocket"
				description="change me before going to production"
			/>

			<Container>
				<p>Em construção!</p>
			</Container>
		</>
	)
}
