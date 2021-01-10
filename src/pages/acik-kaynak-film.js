import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AcikKaynakFilm = ({ location }) => (
	<Layout location={location}>
		<SEO title="Açık Kaynak Film" />
		<header className="bg-white shadow dark:bg-dark-200">
			<div className="mx-auto max-w-7xl py-8 px-3 sm:px-6 lg:px-8 xl:px-0">
				<h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
					Açık Kaynak Film Nedir?
				</h1>
			</div>
		</header>
		<main>
			<div className="mx-auto max-w-7xl py-8 px-3 sm:px-6 lg:px-8 xl:px-0">
				<div className="px-4 py-6 sm:px-0 dark:text-white">
					<p>Açık kaynak film, herkesin elindeki imkanıyla destek olarak ortaya çıkacak filmdir. Filmin her sahnesi için mekan ve oyuncu ayarlanır, ekipman, kostüm, prop bulunur ya da üretilir. Bunlar benim tarafımdan ve/veya filme katkıda bulunmak isteyen arkadaşlar tarafından yapılır. Sahne çekildikten sonra da filmin masraflarına sponsor olmak isteyenler sponsorluk yollar, bu masraflar filmde görev alan ekibe dağıtılır, geri kalanı da bir sonraki sahne için harcanır. Para almak istemeyen ekip üyeleri de yine filmin sonuna "sponsor" olarak yazılır.</p>
				</div>
			</div>
		</main>
	</Layout>
)
export default AcikKaynakFilm
