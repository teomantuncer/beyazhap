import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ location }) => (
	<Layout location={location}>
		<SEO title="404: Sayfa Bulunamadı" />
		<h1>404: Sayfa Bulunamadı</h1>
		<p>Varolmayan bir sayfaya gitmeye çalışıyorsunuz.</p>
	</Layout>
)
export default NotFoundPage
