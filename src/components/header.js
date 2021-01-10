import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import IconImg from '../images/icon.png'
import LogoImg from '../images/logo.png'
import { Helmet } from 'react-helmet'

const Header = () => {
	const [isExpanded, toggleExpansion] = useState(false)
	let initDarkMode = true
	if (typeof window !== 'undefined') {
		initDarkMode = !localStorage.getItem('darkMode')
	}
	const [dark, toggleDark] = useState(initDarkMode)
	return (
		<nav className="bg-gray-800 px-3 sm:px-6 lg:px-8 xl:px-0 dark:bg-dark-100">
			<Helmet
				htmlAttributes={{
					class: dark ? 'dark' : ''
				}} />
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
								<img alt="Beyaz Hap" src={IconImg} style={{ maxHeight: '100%' }} />
							</span>
							<span className="hidden lg:block h-8 w-auto">
								<img alt="Beyaz Hap" src={LogoImg} style={{ maxHeight: '100%' }} />
							</span>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								<Link to="/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 dark:hover:bg-dark-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Ana Sayfa
								</Link>
								<Link to="/sahneler/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 dark:hover:bg-dark-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Sahneler
								</Link>
								<Link to="/galeri/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 dark:hover:bg-dark-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Galeri
								</Link>
								<Link to="/kamera-arkasi/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 dark:hover:bg-dark-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Kamera Arkası
								</Link>
								<Link to="/acik-kaynak-film/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 dark:hover:bg-dark-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Açık Kaynak Film
								</Link>
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<Link to="/destek-ol/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 dark:hover:bg-dark-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
							Destek Ol
						</Link>
						<span onClick={() => { toggleDark(!dark); dark ? localStorage.setItem('darkMode', 1) : localStorage.removeItem('darkMode') }} aria-hidden="true" className="text-gray-300 hover:bg-gray-700 dark:hover:bg-dark-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
							{dark ? (
									<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon-stars" className="svg-inline--fa fa-moon-stars fa-w-16 max-h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path fill="currentColor" d="M332.2 426.4c-93.1 17.7-178.5-53.7-178.5-147.7 0-54.2 29-104 76.1-130.8 7.3-4.1 5.4-15.1-2.8-16.7C108.7 109.4 0 200 0 320c0 106 85.8 192 191.8 192 59.2 0 113.2-26.9 149-71.1 5.3-6.5-.5-16.1-8.6-14.5zM304 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zm154.7 85.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208l-53.3-26.7z" />
									</svg>) :
								(
									<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sun" className="svg-inline--fa fa-sun fa-w-16 max-h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path fill="currentColor" d="M256 143.7c-61.8 0-112 50.3-112 112.1s50.2 112.1 112 112.1 112-50.3 112-112.1-50.2-112.1-112-112.1zm0 192.2c-44.1 0-80-35.9-80-80.1s35.9-80.1 80-80.1 80 35.9 80 80.1-35.9 80.1-80 80.1zm256-80.1c0-5.3-2.7-10.3-7.1-13.3L422 187l19.4-97.9c1-5.2-.6-10.7-4.4-14.4-3.8-3.8-9.1-5.5-14.4-4.4l-97.8 19.4-55.5-83c-6-8.9-20.6-8.9-26.6 0l-55.5 83-97.8-19.5c-5.3-1.1-10.6.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.4L90 187 7.1 242.5c-4.4 3-7.1 8-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3L90 324.6l-19.4 97.9c-1 5.2.6 10.7 4.4 14.4 3.8 3.8 9.1 5.5 14.4 4.4l97.8-19.4 55.5 83c3 4.5 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l55.5-83 97.8 19.4c5.4 1.2 10.7-.6 14.4-4.4 3.8-3.8 5.4-9.2 4.4-14.4L422 324.6l82.9-55.5c4.4-3 7.1-8 7.1-13.3zm-116.7 48.1c-5.4 3.6-8 10.1-6.8 16.4l16.8 84.9-84.8-16.8c-6.6-1.4-12.8 1.4-16.4 6.8l-48.1 72-48.1-71.9c-3-4.5-8-7.1-13.3-7.1-1 0-2.1.1-3.1.3l-84.8 16.8 16.8-84.9c1.2-6.3-1.4-12.8-6.8-16.4l-71.9-48.1 71.9-48.2c5.4-3.6 8-10.1 6.8-16.4l-16.8-84.9 84.8 16.8c6.5 1.3 12.8-1.4 16.4-6.8l48.1-72 48.1 72c3.6 5.4 9.9 8.1 16.4 6.8l84.8-16.8-16.8 84.9c-1.2 6.3 1.4 12.8 6.8 16.4l71.9 48.2-71.9 48z" />
									</svg>)}
						</span>
					</div>
				</div>
			</div>
			<div className={`${isExpanded ? `block sm:block` : `hidden sm:hidden`}`}>
				<div className="px-2 pt-2 pb-3 space-y-1">
					<Link to="/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
						Ana Sayfa
					</Link>
					<Link to="/sahneler/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
						Sahneler
					</Link>
					<Link to="/galeri/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
						Galeri
					</Link>
					<Link to="/kamera-arkasi/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
						Kamera Arkası
					</Link>
					<Link to="/acik-kaynak-film/" activeClassName={'dark:bg-dark-300 bg-gray-900 text-white'} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
						Açık Kaynak Film
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
