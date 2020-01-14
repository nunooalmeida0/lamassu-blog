import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => (
<header leftComponent = {{ icon: ''}}>
        <div className="menu-wrapper">
          <Img className="logo menu-item" src="images/logo.svg" alt="Lamassu logo"/>
          <ul className="header-list">
            <li className="menu-item">
              <a href="https://lamassu.is/products" title="Products">Products</a>
            </li>
            <li className="menu-item">
              <Link href="https://lamassu.is/how-to-start">How to Start</Link>
            </li>
            <li className="menu-item"> 
              <Link href="https://lamassu.is/faq">Q&A</Link>
            </li>
            <li className="menu-item">
              <Link href="https://lamassu.is/sla-support">SLA</Link>
            </li>
            <li className="menu-item">
              <Link href="localhost:8000">Blog</Link>
            </li>          
            <li className="menu-item">
              <Link href="https://lamassu.is/Contact">Contact</Link>
            </li>
          </ul>
        </div>

      </header>
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
