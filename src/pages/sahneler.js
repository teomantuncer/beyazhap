import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Sahneler = ({ location }) => (
	<Layout location={location}>
		<SEO title="Sahneler" />
		<header className="bg-white shadow dark:bg-dark-200">
			<div className="mx-auto max-w-7xl py-8 px-3 sm:px-6 lg:px-8 xl:px-0">
				<h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
					Sahneler
				</h1>
			</div>
		</header>
		<main className="dark:text-white">
			<div className="mx-auto max-w-7xl py-8 px-3 mb-6 sm:px-6 lg:px-8 xl:px-0">
				<p className="px-4 pt-6 sm:px-0">
					Sonunda ilk uzun metraj filmimiz olan "Beyaz Hap"ın çekimlerine başladık. Daha önce bahsetmiş olduğum "Kırmızı Hap 5"in konusunu genişletip uzun metraj yapmaya karar verdim ve filmin adını şimdilik "Beyaz Hap" olarak belirledim. Hayır, belgesel gibi bir anlatıcının olduğu formatta değil, normal film formatında olacak.
				</p>
				<p className="px-4 pt-2 mb-6 sm:px-0">
					Filmi açık kaynak olarak üretiyoruz. Daha önce "açık kaynak yazılım" duymuşsunuzdur ama bu şekilde film çeken oldu mu bilmiyorum. Filmde ilerleyişimizi görmeniz için sahne çektikçe Youtube'a yükleyeceğiz. Tabi bu sahneler film hakkında kilit bilgi verip filmin keyfini azaltmak yerine seyiciyi meraklandıracak şekilde olacak. Özellikle, seyircinin bu sahnelerin nasıl bir araya gelip film oluşturacağını tahmin etmeye çalışmasını amaçlıyorum.
				</p>
				<div className="flex flex-wrap">
					<div className="w-full lg:w-1/2 pr-0 lg:pr-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/493907508?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Cerebris" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Cerebris
							</h2>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pl-0 lg:pl-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe  className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/493915969?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Röprezant" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Röprezant
							</h2>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pr-0 lg:pr-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe  className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/497781575?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Ceren" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Ceren
							</h2>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pl-0 lg:pl-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe  className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/493927373?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Kabus" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Kabus
							</h2>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pr-0 lg:pr-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe  className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/393426915?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Gece Kulübü" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Gece Kulübü
							</h2>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pl-0 lg:pl-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe  className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/379876440?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Başlangıç" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Başlangıç
							</h2>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pr-0 lg:pr-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe  className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/360235570?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Ekşide Linç Yiyen Baba" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Ekşide Linç Yiyen Baba
							</h2>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pl-0 lg:pl-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe  className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/358073486?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Biseksüel Evlat" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Biseksüel Evlat
							</h2>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pr-0 lg:pr-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe  className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/339979734?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Doktor ve Patron" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Doktor ve Patron
							</h2>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pl-0 lg:pl-2 py-2">
						<div className="bg-blue-50 dark:bg-dark-200 rounded-md hover:shadow-md">
							<iframe  className="h-72 rounded-t-md w-full bg-black dark:bg-dark-200" src="https://player.vimeo.com/video/336709547?app_id=122963" allow="autoplay; fullscreen" allowFullScreen="" title="Bob Afet" data-ready="true" frameBorder="0" />
							<h2 className="px-4 py-2 md:px-4 font-bold text-2xl">
								Bob Afet
							</h2>
						</div>
					</div>
				</div>
			</div>
		</main>
	</Layout>
)
export default Sahneler
