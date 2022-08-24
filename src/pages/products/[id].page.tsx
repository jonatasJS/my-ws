// Pagina com informações e detalhes do produto pelo id
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next/types'
import { useEffect, useState } from 'react'

import { SEO } from '~/components/SEO'
import { Container } from '~/styles/StyleLayout'

import {
	ItemButton,
	ItemDescription,
	ItemImage,
	ItemPrice,
	ItemTitle,
	ProductContainer,
	ProductsPageStyle,
} from './ProductsPageStyle'

interface DataTypes {
	id: number
	title: string
	price: number
	category: string
	description: string
	image: string
}

export default function Products({ post }: {
	post: DataTypes;
}) {

	return (
		<>
			<SEO title={post.title} description={post.description} />

			<Container>
				<ProductsPageStyle>
					<ItemImage
						src={post.image}
						alt={post.title}
						width={300}
						height={300}
					/>
					<ProductContainer>
						<ItemTitle>{post.title}</ItemTitle>
						<ItemDescription>{post.description}</ItemDescription>

						<ItemPrice>{post.price}</ItemPrice>
						<ItemButton>Comprar</ItemButton>
					</ProductContainer>
				</ProductsPageStyle>
			</Container>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	/*
    Here is the error:
    Properties 'slug' and 'lang' don't exist on type 'ParsedUrlQuery | undefined'
  */
	const id = params?.id
	const post = fetch(`https://fakestoreapi.com/products/${id}`)
		.then((res) => res.json())
		.catch((err) => console.log(err))

	return {
		props: { post },
	}
}