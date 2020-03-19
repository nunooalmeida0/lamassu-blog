
import PropTypes from "prop-types"
import React from "react"


const Footer = ({ siteTitle }) => (
    <footer className="footer wrapper">
        <div className="footer-info">
            <div className="footer-left">
                <div className="copyright">
               
        
                <a href="https://lamassu.is" target="_blanc"> © {new Date().getFullYear()} Lamassu Industries AG</a>
                </div>
                <div className="social-media">
                <a href="https://github.com/lamassu"><img src={'../../github.svg'}></img></a>
                <a href="https://twitter.com/LamassuBTC"><img src={'../../twitter.svg'}></img></a>
                <a href="https://instagram.com/lamassubtc"><img src={'../../instagram.svg'}></img></a>
                <a href="https://facebook.com/lamassubtc"><img src={'../../facebook.svg'}></img></a>
                <a href="https://www.linkedin.com/company/lamassu-industries/"><img src={'../../linkedin.svg'}></img></a>
                </div>
            </div>
            <div className="footer-right">
                    <div className="legal-docs">
                        <ul className="inline-list">
                            <li><a href="https://lamassu.is/purchase-agreement">Purchase Agreement</a></li>
                            <li><a href="https://lamassu.is/service-agreement">Service Level Agreement</a></li>
                            <li><a href="https://lamassu.is/due-diligence">Due Diligence</a></li>
                        </ul>

                    </div>
                </div>
            </div>
     </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
