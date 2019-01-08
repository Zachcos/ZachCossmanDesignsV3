module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-json"
  ]
}