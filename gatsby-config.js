module.exports = {
	siteMetadata: {
		title: `Beyaz Hap - efeaydal`,
		description: `Açık kaynaklı film. Efe Aydal'ın çekmiş olduğu Kırmızı Hap serisinin 5.si olarak planlanmış, fakat sonradan konuyu daha da genişletip uzun metraj çekilen açık kaynaklı film.`,
		author: `@teomantuncer`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Beyaz Hap`,
				short_name: `beyazhap`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `minimal-ui`,
				icon: `src/images/icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-cookiehub-banner`,
			options: {
				// The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
				cookieHubId: "9fdf1807",
				// Optional parameter (default false) - Use new v2 API.
				cookieHubV2Api: false,
				// Categories configured with CookieHub
				categories: [
					{
						categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
						cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled' // Your custom cookie name
					},
					{
						categoryName: 'marketing',
						cookieName: 'marketing-enabled'
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics-gdpr`,
			options: {
				// The property ID; the tracking code won't be generated without it.
				trackingId: "G-QTSPK10HEQ",
				// Optional parameter (default false) - Enable analytics in development mode.
				enableDevelopment: true, // default false
				// Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
				anonymizeIP: true,
				// Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
				autoStartWithCookiesEnabled: false,
				// Optional parameter - Configuration for react-ga and google analytics
				reactGaOptions: {
					debug: true,
					gaOptions: {
						sampleRate: 10
					}
				}
			},
		},
		`gatsby-plugin-offline`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		'gatsby-plugin-postcss',
		`gatsby-plugin-tailwindcss`,
		/*{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true, // Print removed selectors and processed file names
				develop: true, // Enable while using `gatsby develop`
				tailwind: true, // Enable tailwindcss support
				// whitelist: ['whitelist'], // Don't remove this selector
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			}
		},*/
	]
}
