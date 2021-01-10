import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const DestekOl = ({ location }) => (
	<Layout location={location}>
		<SEO title="Destek Ol" />
		<header className="bg-white shadow dark:bg-dark-200">
			<div className="mx-auto max-w-7xl py-8 px-3 sm:px-6 lg:px-8 xl:px-0">
				<h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
					Destek Ol
				</h1>
			</div>
		</header>
		<main>
			<div className="mx-auto max-w-7xl py-8 px-3 sm:px-6 lg:px-8 xl:px-0">
				<h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">Youtube</h2>
				<p className="px-4 pt-3 pb-6 sm:px-0 dark:text-white">
					En basit yöntem bu. Youtube üzerinden bir çok ödeme yöntemiyle destek olabilirsiniz. Bu yöntemin faydaları, videolara erken erişmek, podcastlere erken erişmek, podcast için soru sormak ya da podcast filmi tavsiye etmek.
				</p>
				<div className="bg-gray-50 dark:bg-dark-200 text-center lg:text-left">
					<div className="py-5 px-4 sm:px-6 lg:py-5 lg:px-8 lg:flex lg:items-center lg:justify-between">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							<span>Youtube üzerinden destek ol</span>
						</h2>
						<div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<a href="https://www.youtube.com/channel/UCjsdYhMIQ0-fJPqEjiHYlzA/join" target="_blank" rel="noreferrer" aria-hidden="true" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-dark-400 dark:hover:bg-dark-500">
									Destek Ol
								</a>
							</div>
						</div>
					</div>
				</div>

				<h2 className="text-2xl mt-12 font-bold leading-tight text-gray-900 dark:text-white">SubscribeStar</h2>
				<p className="px-4 pt-3 pb-6 sm:px-0 dark:text-white">
					Aylık düzenli destek olabileceğiniz SubscribeStar üyeliği de bir yöntem. Bir kere üye olunca, siz iptal edene kadar 30 günde bir otomatik olarak kartınıza yansıtır.
				</p>
				<div className="bg-gray-50 dark:bg-dark-200 text-center lg:text-left">
					<div className="py-5 px-4 sm:px-6 lg:py-5 lg:px-8 lg:flex lg:items-center lg:justify-between">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							<span>SubscribeStar üzerinden destek ol</span>
						</h2>
						<div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<a href="https://www.subscribestar.com/efeaydal" target="_blank" rel="noreferrer" aria-hidden="true" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-dark-400 dark:hover:bg-dark-500">
									Destek Ol
								</a>
							</div>
						</div>
					</div>
				</div>

				<h2 className="text-2xl mt-12 font-bold leading-tight text-gray-900 dark:text-white">LBRY</h2>
				<p className="px-4 pt-3 pb-3 sm:px-0 dark:text-white">
					LBRY uygulaması üzerinden ücretsiz üyelik. Bunda daha çok para yerine vakit harcayarak erken erişim sağlıyorsunuz.
				</p>
				<div className="flex flex-wrap pb-6">
					<div className="lg:flex-1 w-full lg:w-1/2 px-4 sm:px-0">
						<ul className="list-disc pl-6 pr-0 lg:px-6 dark:text-white">
							<li className="pb-2">Önce <a className="dark:text-blue-200 text-blue-800 font-bold" href="https://api.lbry.com/user/refer?r=8L6zWt2bLUPmJHtqbiqtL62f36cyjjzp" target="_blank" rel="noreferrer">LBRY.TV</a> sitesine girip üyelik açıyoruz.</li>
							<li className="pb-2">Orada <strong>@efeaydal</strong> isimli kullanıcıyı aratıyoruz, ve abone oluyoruz.</li>
							<li className="pb-2">Bu kanalıma videoların normalden 1 gün önce yüklendiğini göreceksiniz.</li>
							<li>Seyretmek istediğiniz video "1 LBC", "3 LBC" gibi ücretli gözükecek. Bu ücret normal parayla alınan bir şey değil. Uygulamada "Rewards" kısmına girince size baştan biraz LBC verdiklerini göreceksiniz. Ayrıca video seyretme, üye olma, tavsiye etme gibi aktivitelerinizle size sürekli olarak LBC verilecek. Bunları da önceden seyretmek istediğiniz videolarımı açmak için harcayabileceksiniz. Ayrıca videomun altındaki Tip bölümünden de yine istediğiniz kadar LBC yollayabileceksiniz. Böylece hangi tür videolar en çok seviliyor onu anlama şansım da olacak.</li>
						</ul>
					</div>
					<iframe title="LBRY Üzerinden Destek" className="flex-1 w-full mt-9 lg:mt-0 lg:w-1/2 rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/JIuiJm0XYqc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
				</div>
				<div className="bg-gray-50 dark:bg-dark-200 text-center lg:text-left">
					<div className="py-5 px-4 sm:px-6 lg:py-5 lg:px-8 lg:flex lg:items-center lg:justify-between">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							<span>LBRY üzerinden destek ol</span>
						</h2>
						<div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<a href="https://api.lbry.com/user/refer?r=8L6zWt2bLUPmJHtqbiqtL62f36cyjjzp" target="_blank" rel="noreferrer" aria-hidden="true" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-dark-400 dark:hover:bg-dark-500">
									Destek Ol
								</a>
							</div>
						</div>
					</div>
				</div>

				<h2 className="text-2xl mt-12 font-bold leading-tight text-gray-900 dark:text-white">Sanatkardan</h2>
				<p className="px-4 pt-3 pb-6 sm:px-0 dark:text-white">
					Eşimin ürettiği el işi ürünlerini alarakta destek olabilirsiniz.İzmir'de iseniz, IBAN'dan ücreti yollayana elden teslimat yapabiliyoruz, bu durumda fiyat baya iniyor. Örnek: 60TL olan kitap ayracı 45TL oluyor.
					Bu şekilde almak isteyenler mağazamıza özelden mesaj ya da conmech81@gmail.com adresine, istediğiniz ürünün linki ile birlikte mail atabilir.
					Aynı şekilde, ucuz kargo anlaşmanız varsa, kargo ücretini düşerek alıcı ödemeli olarak da yollayabiliriz.
				</p>
				<div className="bg-gray-50 dark:bg-dark-200 text-center lg:text-left">
					<div className="py-5 px-4 sm:px-6 lg:py-5 lg:px-8 lg:flex lg:items-center lg:justify-between">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							<span>Sanatkardan üzerinden destek ol</span>
						</h2>
						<div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<a href="https://sanatkardan.com/sanatkar/aydal-craft-7277" target="_blank" rel="noreferrer" aria-hidden="true" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-dark-400 dark:hover:bg-dark-500">
									Destek Ol
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</Layout>
)
export default DestekOl
