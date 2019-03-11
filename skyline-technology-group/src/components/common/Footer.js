import React from 'react'
import { Footer } from 'mdbreact'
import { Link } from 'react-router-dom'

const FooterComponent = () => (
  <div>
    <Footer id='footer'>
        &copy; Skyline Technology Group {(new Date().getFullYear())}
    </Footer>
  </div>
)

export default FooterComponent
