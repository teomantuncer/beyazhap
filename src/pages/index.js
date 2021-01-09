import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
const IndexPage = ({
	location,
	data
}) => {
	const rand = Math.floor(Math.random() * data.allFile.edges.length - 1)
	return <Layout location={location}>
		<SEO title="Ana Sayfa" />
		{data.allFile.edges.slice(rand, rand + 1)
			.map(edge => {
				return <Image filename={edge.node.base} key={edge.node.id} />
			})}
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
