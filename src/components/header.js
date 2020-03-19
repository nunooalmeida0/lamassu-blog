
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header>
    <div className="menu-wrapper">
      <a className="menu-item" href="https://lamassu.is">
        <img className="logo" src={'../../logo.svg'} alt="Lamassu logo"/> 
      </a>
      
      <ul className="header-list">
        <li className="menu-item">
          <a href="https://lamassu.is/products" title="Products">Products</a>
        </li>
        <li className="menu-item">
          <a href="https://lamassu.is/how-to-start">How to Start</a>
        </li>
        <li className="menu-item"> 
          <a href="https://lamassu.is/faq">Q&A</a>
        </li>
        <li className="menu-item">
          <a href="https://lamassu.is/sla-support">SLA</a>
        </li>
        <li className="menu-item">
          <a className="selected" href="/">Blog</a>
        </li>          
        <li className="menu-item">
          <a href="https://lamassu.is/products">Contact</a>
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
