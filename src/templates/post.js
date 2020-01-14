import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"


// export default function Template({data}) {
//     const {markdownRemark: post} = data;
//     return (
//         <div>
//             <h1>{post.frontmatter.title}</h1>
//             <div  dangerouslySetInnerHTML= {{__html: post.html }} />
//         </div>
//     )
// }

export default ({ data }) => {
    let post = data.markdownRemark
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    return (
     
      <Layout>
         <SEO title={post.frontmatter.title} />
        <div className="post-wrapper">
          <div className="post-text-container">
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <h2 className="post-subtitle">{post.frontmatter.subtitle}</h2>
            <div className="author-wrapper">
              <div className="author-profile"></div>
                  <div className="author-info">
                      <h5 className="author-name">{post.frontmatter.author.id}</h5>
                      <h6 className="author-position">{post.frontmatter.author.role}</h6>
                  </div>
            </div>
          </div>
          <div className="heroImageWrapper">
          <Img className="heroImage" fluid={featuredImgFluid} />
          </div>
          <div className="post-text-container">
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="author-wrapper">
              <div className="author-profile"></div>
                  <div className="author-info">
                      <h5 className="author-name">{post.frontmatter.author.id}</h5>
                      <h6 className="author-position">{post.frontmatter.author.role}</h6>
                  </div>
            </div>
          </div>
        </div>
      </Layout>
    )
}

export const postQuery = graphql `
query BlogPostByPath($path: String!){
  markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      id
      frontmatter {
          path
          title
          subtitle
          published
          date(formatString: "MMMM D Y")
          author{
            id
            role
          }
          featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
      }
  }
}
`
