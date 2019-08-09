export default () => ({
  webpack: config => {
    config.devtool = process.env.NODE_ENV === 'production' ? false : 'eval'
    return config
  },
})