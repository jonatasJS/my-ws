import { useEffect, useState } from 'react'
import { BiSearchAlt2 as SearchIcon } from 'react-icons/bi'

import { SEO } from '~/components/SEO'

import {
	ItemDescription,
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

interface DataTypes {
	id: number
	title: string
	price: number
	category: string
	description: string
	image: string
}

export default function Products() {
	const [data, setData] = useState<Array<DataTypes>>([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((respo) => setData(respo))
			.catch((err) => console.log(err))
	}, [])

	return (
		<>
			<SEO title="Products" description="Products" />

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
					{data?.map((item, i, a) => {
						if (item.title.toLowerCase().includes(search.toLowerCase())) {
							return (
								<ProductContainer key={item.id}>
									<ItemImage src={item.image} alt={item.title} />
									<ItemTitle>{item.title}</ItemTitle>
									<ItemPrice>R$ {item.price}</ItemPrice>
									<ItemButton>DETALHES</ItemButton>
								</ProductContainer>
							)
						}
					})}
					<ProductContainer>
						<ItemImage src="icon-512x512.png" alt="{item.title}" />
						<ItemTitle>item.title</ItemTitle>
						<ItemDescription>item.description</ItemDescription>
						<ItemPrice>item.price</ItemPrice>
						<ItemButton>item.details</ItemButton>
					</ProductContainer>
				</ListContainer>
			</ProductsPageStyle>
		</>
	)
}
/*

.map(product => (
							<div key={product.id}>
								<h1>{product.name}</h1>
								<p>{product.description}</p>
								<p>{product.price}</p>
							</div>
						)

*/
