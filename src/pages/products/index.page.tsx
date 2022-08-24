import Link from 'next/link'
import { useState } from 'react'
import { BiSearchAlt2 as SearchIcon } from 'react-icons/bi'

import { SEO } from '~/components/SEO'

import { DataTypes } from '~/utils/Types'

import {
	ItemPrice,
	ItemTitle,
	ItemImage,
	ListContainer,
	ProductContainer,
	ProductsPageStyle,
	SearchButton,
	SearchContainer,
	SearchInput,
	ItemButton,
} from './ProductsPageStyle'

export default function Products({ data }: { data: Array<DataTypes> }) {
	const [search, setSearch] = useState('')

	return (
		<>
			<SEO title="Next Rocket - Products" description="Products" />

			<ProductsPageStyle>
				<SearchContainer className="search-container">
					<SearchInput
						type="text"
						placeholder="Busca"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<SearchButton>
						<SearchIcon width={75} height={75} />
					</SearchButton>
				</SearchContainer>
				<ListContainer>
					{data.map((item) => {
						if (item.title.toLowerCase().includes(search.toLowerCase())) {
							return (
								<ProductContainer key={item.id}>
									<ItemImage src={item.image} alt={item.title} />
									<ItemTitle>{item.title}</ItemTitle>
									<ItemPrice>R$ {item.price}</ItemPrice>
									<Link href={`/products/${item.id}`}>
										<ItemButton href={`/products/${item.id}`}>
											DETALHES
										</ItemButton>
									</Link>
								</ProductContainer>
							)
						}
						return ''
					})}
				</ListContainer>
			</ProductsPageStyle>
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

// export async function getStaticPaths() {
// 	const res = await fetch(`https://fakestoreapi.com/products/`)
// 	const data: Array<DataTypes> = await res.json()

// 	const paths = data.map((product: DataTypes) => {
// 		return {
// 			params: {
// 				id: product.id.toString(),
// 			},
// 		}
// 	})

// 	return {
// 		paths,
// 		fallback: false,
// 	}
// }
