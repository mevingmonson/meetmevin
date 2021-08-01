const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  try {
    if (node.internal.type === "Mdx") {
      const { sourceInstanceName } = getNode(node.parent);

      let slug = "";
      switch (sourceInstanceName) {
        case "posts":
          slug = createFilePath({
            node,
            getNode,
          });

          createNodeField({
            node,
            name: "slug",
            value: `/blog${slug}`,
          });

          createNodeField({
            node,
            name: "type",
            value: "post",
          });
          break;
        case "pages":
        default:
          slug = createFilePath({
            node,
            getNode,
            basePath: "pages",
          });

          createNodeField({
            node,
            name: "slug",
            value: slug,
          });

          createNodeField({
            node,
            name: "type",
            value: "page",
          });
          break;
      }
    }
  } catch (e) {
    console.log({ e });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              fields {
                slug
                type
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        console.error(result.errors);
        reject(result.errors);
      }

      result.data.allMdx.edges.forEach(({ node }) => {
        const templatePath =
          node.fields.type === "project"
            ? "./src/templates/project.js"
            : "./src/templates/post.js";

        createPage({
          path: node.fields.slug,
          component: path.resolve(templatePath),
          context: {
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
