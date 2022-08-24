import { SEO } from '~/components/SEO'

import { DataTypes } from '~/utils/Types'

import {
	ItemButton,
	ItemDescription,
	ItemImage,
	ItemPrice,
	ItemTitle,
	ProductContainer,
	ProductsPageStyle,
} from './ProductsPageStyle'

export default function Products({ data }: { data: DataTypes}) {

	return (
		<>
			<SEO
				title="Products"
				description="Products"
			/>

			<ProductsPageStyle>
				<ItemImage src={data.image} alt={data.title} width={300} height={300} />
				<ProductContainer>
					<ItemTitle>{data.title}</ItemTitle>
					<ItemDescription>{data.description}</ItemDescription>

					<ItemPrice>{data.price}</ItemPrice>
					<ItemButton>Comprar</ItemButton>
				</ProductContainer>
			</ProductsPageStyle>
		</>
	)
}

export async function getStaticProps(context: { params: { id: string; }; }) {
	const id = context.params.id
	const res = await fetch(`https://fakestoreapi.com/products/${id}`)
	const data: DataTypes = await res.json()

	return {
		props: {
			data,
		},
	}
}

export async function getStaticPaths() {
	const res = await fetch(`https://fakestoreapi.com/products/`)
	const data: Array<DataTypes> = await res.json()

	const paths = data.map((product: DataTypes) => {
		return {
			params: {
				id: product.id.toString()
			}
		}
	})

	return {
		paths,
		fallback: false,
	}
}
