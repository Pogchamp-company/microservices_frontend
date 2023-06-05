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
}
