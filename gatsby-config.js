module.exports = {
  siteMetadata: {
    title: `Kopalnia Gnejsu - projekt strony`,
    description: `Autorski projekt strony www dla przedsiębiorstwa Kopalnia Gnejsu sp. z o. o.`,
    author: `@Felikso`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
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
        name: `productsData`,
        path: `./productsData/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sliderData`,
        path: `./sliderData/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kopalnia-gnejsu`,
        short_name: `kopalnia`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kopalnia-gnejsu-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/homeSlider`, // wherever background images are stored
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'gcms',
        url: 'https://api-eu-central-1.graphcms.com/v2/ckph9x9yh6z7901xp3tjq8zem/master',
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
   /*  {
      resolve: `gatsby-plugin-cookie-though`,
      options: {
        config: {
          policies: [
            {
              id: "essential",
              label: "Niezbędne ciasteczka",
              description:
                "Są one konieczne do właściwego funkcjonowania witryny internetowej.",
              category: "essential",
            },
            {
              id: "functional",
              label: "Funkcjonalne ciasteczka",
              category: "functional",
              description:
                "Pomagają nam w sprawdzaniu efektywności wdrażanych przez nas działań marketingowych, dostosowując je do indywidualnych preferencji użytkownika.",
            },
            {
              id: "statistics",
              label: "Analityczne ciasteczka",
              category: "statistics",
              description:
                "Dzięki nim możemy dowiedzieć się, co cieszy się największym zainteresowaniem na naszych podstronach.",
            },
            {
              id: "social",
              label: "Społecznościowe ciasteczka",
              category: "social",
              description:
                "Wykorzystujemy je w celu poprawienia efektywności podejmowanych przez nas działań marketingowych.",
            },
          ],
          permissionLabels: {
            accept: "Zaakceptuj",
            acceptAll: "Zaakceptuj wszystkie",
            decline: "Odrzuć",
          },
          cookiePreferenceKey: "cookie-preferences",
          header: {
            title: "Ciasteczka?",
            subTitle: "Znowu to okienko...",
            description:
              "Każdy z pewnością chce pokazać się od jak najlepszej strony, również i my. Wykorzystanie ciasteczek daje nam na to gwarancję.",
          },
          cookiePolicy: {
            url: "http://localhost:8000/polityka-prywatnosci",
            label: "Przeczytaj całą deklarację",
          },
        },
      },
    }, */
    `gatsby-plugin-preact`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
