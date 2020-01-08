import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"


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
        <div class="post-wrapper">
          <h1 class="post-title">{post.frontmatter.title}</h1>
          <h2 class="post-subtitle">{post.frontmatter.subtitle}</h2>
          <div class="author-wrapper">
            <div class="author-profile"></div>
                <div class="author-info">
                    <h5 class="author-name">Nuno Almeida</h5>
                    <h6 class="author-position">Graphic Designer</h6>
                </div>
          </div>
          <div class="heroImageWrapper">
          <Img class="heroImage" fluid={featuredImgFluid} />
          </div>
          <div class="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          <div class="author-wrapper">
            <div class="author-profile"></div>
                <div class="author-info">
                    <h5 class="author-name">Nuno Almeida</h5>
                    <h6 class="author-position">Graphic Designer</h6>
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
                date
                author
                featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
            }
        }
    }
`
