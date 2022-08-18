const withPWA = require('next-pwa');

module.exports = withPWA({
	pageExtensions: ['page.tsx', 'page.ts'],
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
    swSrc: 'service-worker.js',
	}
})
