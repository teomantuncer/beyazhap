import React, { useState } from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const SecondPage = ({ data, location }) => {
	let [modal, setModal] = useState(false)
	return <Layout location={location}>
		<SEO title="Galeri" />
		<header className="bg-white shadow">
			<div className="mx-auto max-w-7xl py-8 px-3 sm:px-6 lg:px-8 xl:px-0">
				<h1 className="text-3xl font-bold leading-tight text-gray-900">
					Galeri
				</h1>
			</div>
		</header>
		<main>
			<div className="mx-auto max-w-7xl py-8 px-3 sm:px-6 lg:px-8 xl:px-0">
				<div className="px-4 py-6 sm:px-0">
					<div className="grid grid-cols-3 gap-0.5">
						{data.allFile.edges.map(edge => {
							return <div key={edge.node.id} onClick={() => setModal(edge.node)} style={{cursor: 'pointer'}} aria-hidden="true">
								<Image filename={edge.node.base} />
							</div>
						})}
					</div>
				</div>
			</div>
		</main>
		<div className={`${modal !== false ? 'fixed' : 'hidden'} z-10 inset-0 overflow-y-auto`}>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div className="fixed inset-0 transition-opacity" aria-hidden="true">
					<div className="absolute inset-0 bg-gray-500 opacity-75" />
				</div>
				<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
				<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle 2xl:max-w-screen-2xl xl:max-w-screen-xl md:max-w-screen-md lg:max-w-screen-lg w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
					<div className="bg-white m-1 rounded-t-lg overflow-hidden">
						<Image filename={modal.base} />
					</div>
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button onClick={() => setModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
							Kapat
						</button>
						<a href={modal.publicURL} target="_blank" rel='noreferrer' className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
							Yeni Sayfada Aç
						</a>
					</div>
				</div>
			</div>
		</div>
	</Layout>
}
export const indexQuery = graphql`
    query AssetsPhotos {
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
export default SecondPage
