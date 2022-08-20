import React from 'react'
import Head from 'next/head'

interface Props {
	title: string
	description: string
}

export const SEO = ({ title, description }: Props) => {
	return (
		<Head>
			{/* Primary Meta Tags */}
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4515639184646084"
				crossOrigin="anonymous"
			/>
		</Head>
	)
}
