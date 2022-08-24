// Pagina com informações e detalhes do produto pelo id
import { useRouter } from 'next/router'
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

export default function Products() {
	const [data, setData] = useState<DataTypes>({} as DataTypes)
	const router = useRouter()
	const id = router.query.id as string

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((respo) => setData(respo))
			.catch((err) => console.log(err))
	}, [])

	return (
		<>
			<SEO title={data.title} description={data.description} />

			<Container>
				<ProductsPageStyle>
					<ItemImage
						src={data.image}
						alt={data.title}
						width={300}
						height={300}
					/>
					<ProductContainer>
						<ItemTitle>{data.title}</ItemTitle>
						<ItemDescription>{data.description}</ItemDescription>

						<ItemPrice>{data.price}</ItemPrice>
						<ItemButton>Comprar</ItemButton>
					</ProductContainer>
				</ProductsPageStyle>
			</Container>
		</>
	)
}
