/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    // headers: [
	// 	{
	// 		key: "Cache-Control",
	// 		value: "no-store, max-age=0",
	// 	},
	// ],
    images:{
        domains: [
           " www.graza.co",
        ],
    },
}

module.exports = nextConfig
