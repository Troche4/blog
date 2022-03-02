module.exports = {
  siteMetadata: {
    title: "Trey Roche | Blog",
    description: "Blog made by Trey Roche using Gatsby."
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-transformer-remark`,
  ],
}
