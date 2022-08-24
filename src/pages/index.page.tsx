import React from 'react'

import { SEO } from '~/components/SEO'

import { DataTypes } from '~/utils/Types'

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

export async function getStaticProps() {
	const res = await fetch(`https://fakestoreapi.com/products`)
	const data: DataTypes = await res.json()

	return {
		props: {
			data,
		},
	}
}
