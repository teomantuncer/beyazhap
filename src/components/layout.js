/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Header from './header'
import './layout.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const Layout = (props) => {
	const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
	`)
	const page = props.location.pathname
	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<main>{props.children}</main>
			{!page.includes('destek-ol') && (
				<div className="bg-gray-50">
					<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
						<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							<span className="block">Filme destek olmak ister misiniz?</span>
						</h2>
						<div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<Link to="/destek-ol/" aria-hidden="true" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
									Destek Ol
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
			<footer>
				<div className="border-t-2 border-gray-300 flex flex-col items-center">
					<div className="sm:w-2/3 text-center py-6">
						<p className="text-sm text-gray-800 mb-2">
							© {new Date().getFullYear()}, Built with <a className="text-blue-800" target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com">Gatsby</a>, hosted by <a className="text-blue-800" target="_blank" rel="noreferrer" href="https://www.netlify.com">Netlify</a>, developed by <a className="text-blue-800" target="_blank" rel="noreferrer" href="https://github.com/teomantuncer">teomantuncer</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
Layout.propTypes = {
	children: PropTypes.node.isRequired
}
export default Layout
