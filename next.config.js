module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/departments',
                permanent: true,
            },
            {
                source: '/departments/:title',
                destination: '/departments/:title/employees',
                permanent: true,
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/:path*',
                has: [{
                    type: 'cookie',
                    key: 'access_token',
                    value: ':authorization',
                }],
                headers: [
                    {
                        key: 'x-Authorization',
                        value: ':authorization',
                    },
                ],
            }
        ]
    },
    experimental: {
        serverActions: true,
    },
}
