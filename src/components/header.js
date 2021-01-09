import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from "react"
import IconImg from '../images/icon.png'
import LogoImg from '../images/logo.png'

const Header = () => {
	const [isExpanded, toggleExpansion] = useState(false)
	return (
		<nav className="bg-gray-800 px-3 sm:px-6 lg:px-8 xl:px-0">
			<div className="max-w-7xl mx-auto">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg onClick={() => toggleExpansion(!isExpanded)} className={`${isExpanded ? `hidden` : `block`} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
							<svg onClick={() => toggleExpansion(!isExpanded)} className={`${isExpanded ? `block` : `hidden`} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex-shrink-0 flex items-center">
							<span className="block lg:hidden h-8 w-auto">
								<img alt="Beyaz Hap" src={IconImg} style={{ maxHeight: "100%" }} />
							</span>
							<span className="hidden lg:block h-8 w-auto">
								<img alt="Beyaz Hap" src={LogoImg} style={{ maxHeight: "100%" }} />
							</span>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								<Link to="/" activeClassName={'bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Ana Sayfa
								</Link>
								<Link to="/sahneler/" activeClassName={'bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Sahneler
								</Link>
								<Link to="/galeri/" activeClassName={'bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Galeri
								</Link>
								<Link to="/kamera-arkasi/" activeClassName={'bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Kamera Arkası
								</Link>
								<Link to="/acik-kaynak-film/" activeClassName={'bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Açık Kaynak Film
								</Link>
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<Link to="/destek-ol/" activeClassName={'bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
							Destek Ol
						</Link>
					</div>
				</div>
			</div>
			<div className={`${isExpanded ? `block sm:block` : `hidden sm:hidden`}`}>
				<div className="px-2 pt-2 pb-3 space-y-1">
					<Link to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
						Ana Sayfa
					</Link>
					<Link to="/page-2/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
						Test
					</Link>
				</div>
			</div>
		</nav>
	)
}
Header.propTypes = {
	siteTitle: PropTypes.string
}
Header.defaultProps = {
	siteTitle: ``
}
export default Header
