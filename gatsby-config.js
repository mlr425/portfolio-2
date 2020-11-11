/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Portfolio",
    description: "Portfolio Website",
  },
  /* Your site config here */
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
        path: `${__dirname}/src/images/`,
    },
  },`gatsby-transformer-sharp`, `gatsby-plugin-sharp`],
}
