

const path = require("path");

  exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    if (stage === 'build-javascript') {
      const config = getConfig()
      const miniCssExtractPlugin = config.plugins.find(
        plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
      )
      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true
      }
      actions.replaceWebpackConfig(config)
    }
  }

  

module.exports.createPages = async ({graphql,  actions})=>{

    const {createPage} = actions;
    const newsTemplate = path.resolve("./src/templates/news-template.js")
   const response= await graphql(`query{
    allContentfulNews{
  
      edges{
        
        node{
          
          slug
        }
      }
    }
          }`)

      response.data.allContentfulNews.edges.forEach(edge => {

          createPage(
            {
              component: newsTemplate,
              path: `/news/${edge.node.slug}`, 
              context:{
                slug: edge.node.slug
              }
            }
          )
        
      });

}