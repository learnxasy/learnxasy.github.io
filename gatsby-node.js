/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const filePath = createFilePath({ node, getNode, basePath: `lessons` });
        const [x, y, lesson] = filePath.substring(1, filePath.length - 1).split(`/`);
        createNodeField({ node, name: "learn", value: x });
        createNodeField({ node, name: "as", value: y });
        createNodeField({ node, name: "lesson", value: lesson });
    }
};

exports.createPages = ({ graphql, actions: { createPage } }) => {
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                learn
                as
                lesson
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const { learn, as, lesson } = node.fields;
            if (!as) {             // Subject page
                console.log(`Subject page for "Learn ${learn}".`);
                createPage({
                    path: `/learn/${learn}/`,
                    component: path.resolve(`src/templates/subject.js`),
                    context: { learn }
                });
            } else if (!lesson) {  // Course page
                createPage({
                    path: `/learn/${learn}/as/${as}`,
                    component: path.resolve(`src/templates/course.js`),
                    context: { learn, as }
                });
            } else {               // Lesson page
                createPage({
                    path: `/learn/${learn}/as/${as}/${lesson}/`,
                    component: path.resolve(`src/templates/lesson.js`),
                    context: { learn, as, lesson }
                });
            }
        })  
    });
  }