module.exports = {
  siteMetadata: {
    title: "Mevin G Monson",
    description:
      "Software engineer, React developer and an open source enthusiast",
    author: "@mevingmonson",
    // siteUrl: "https://rounakvyas.me",
  },
  plugins: [
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-styled-components",
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
          },
          {
            resolve: "gatsby-remark-prismjs",
          },
          {
            resolve: "gatsby-remark-smartypants",
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#0000ff",
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-123665788-1'
    //   }
    // },
    "gatsby-plugin-twitter",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
        gatsbyRemarkPlugins: [
          { resolve: "gatsby-remark-autolink-headers" },
          { resolve: "gatsby-remark-prismjs", options: {} },
          { resolve: "gatsby-remark-smartypants" },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] }
              ) {
                edges {
                  node {
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                    html
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: `Rounak Vyas's Blog RSS Feed`,
            site_url: `https://rounakvyas.me`,
          },
        ],
      },
    },
  ],
};
