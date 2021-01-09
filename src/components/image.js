import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// Note: You can change "images" to whatever you'd like.
const Image = props => (
	<StaticQuery
		query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
		render={data => {
			const image = data.images.edges.find(n => {
				return n.node.relativePath.includes(props.filename)
			})
			if (!image) {
				return null
			}
			const imageSizes = image.node.childImageSharp.sizes;
			return <Img alt={props.alt} className={props.inlineClassName} fluid={image.node.childImageSharp.fluid} sizes={imageSizes} />
		}}
	/>
)
export default Image
