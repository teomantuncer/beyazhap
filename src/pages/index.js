import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
const IndexPage = ({
	location,
	data
}) => {
	if (typeof window === "undefined") {
		return <p>Server Render</p>
	}
	const rand = Math.floor(Math.random() * data.allFile.edges.length - 3)
	return <Layout location={location}>
		<SEO title="Ana Sayfa" />
		<Splide options={{
			rewind: true,
			autoplay: true,
			arrows: false
		}}>
			{data.allFile.edges.slice(rand, rand + 3)
				.map(edge => {
					return <SplideSlide key={edge.node.id}>
						<Image filename={edge.node.base} />
					</SplideSlide>
				})}
		</Splide>
	</Layout>
}
export const query = (
	graphql`
		query HomeSlides {
			allFile(sort: {order: ASC, fields: base}, filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/src/images/scenes/"}}) {
				edges {
					node {
						id
						base
						publicURL
					}
				}
			}
		}
	`
)
export default IndexPage
