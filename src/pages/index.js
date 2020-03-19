import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


const IndexPage = ({data}) => {
  return (
 
  <Layout>
    <SEO title="Home"></SEO>
    <ul className="post-list">
      {data.allMarkdownRemark.edges.map((post,i) =>{
      if (i===0){
        return(
          <li className="hero-post">
            <Link
              key={post.node.id}
              to={post.node.frontmatter.path}>   
              <Img className="post-thumbnail" fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid} />
              <div className="post-list-info">
                  <h6 className="post-date">{post.node.frontmatter.date}</h6>
                  <h1>{post.node.frontmatter.title}</h1>
                  <h2>{post.node.frontmatter.subtitle}</h2>   
                <div className="author-wrapper">
                   <div className="author-profile"></div>
                    <div className="author-info">
                        <h5 className="author-name">{post.node.frontmatter.author.id}</h5>
                        <h6 className="author-position">{post.node.frontmatter.author.role}</h6>
                    </div>
                 </div> 
              </div>
            </Link>
          </li>
        )}
        else{
        return (
          <li className={"post-item " + i}>
            <Link
                key={post.node.id}
                to={post.node.frontmatter.path}>
                  <Img className="post-thumbnail" fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid} />   
                <div className="post-item-info">
                  <div className="title-wrapper">
                    <h6 className="post-date">{post.node.frontmatter.date}</h6>
                    <h3>{post.node.frontmatter.title}</h3>
                    <h4>{post.node.frontmatter.subtitle}</h4>    
                  </div>
                  <div className="author-wrapper">
                    <div className="author-profile"></div>
                    <div className="author-info">
                        <h5 className="author-name">{post.node.frontmatter.author.id}</h5>
                        <h6 className="author-position">{post.node.frontmatter.author.role}</h6>
                    </div>
                 </div> 
                </div>
              </Link>
          </li>
          )
        }
      })}
    </ul>
  </Layout>
  )
}


export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: {fields : [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            path
            published
            date(formatString: "MMMM D Y")
            author {
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
    }
  }
`


export default IndexPage
