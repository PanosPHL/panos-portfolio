module.exports = {
    pathPrefix: "/panos-portfolio",
    siteMetadata: {
      description: "Portfolio page of Panayiotis Dimopoulos",
      locale: "en",
      title: "Introducing Panayiotis Dimopoulos"
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          theme: "dark-pink",
          basePath: '/',
          contentPath: 'content/',
          showThemeLogo: false
        },
      },
    ],
  }
