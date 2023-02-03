
import React from 'react'
import propTypes from 'prop-types'

function Footer({copy}) {
    const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        
        <div>
            <p>
            {footerYear} © {copy} 
            </p>
        </div>
        </footer>
       
  )
}

Footer.defaultProps = {
    copy: 'Dani Pereira Codes'
}

Footer.propTypes = {
    copy: propTypes.string
}



export default Footer
