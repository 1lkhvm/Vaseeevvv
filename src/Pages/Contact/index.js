import React from 'react'
import FooterComponents from '../../Components/FooterComponents'
import NavbarComponents from '../../Components/NavbarComponents'
import {Helmet} from "react-helmet";

function Contact() {
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Salaaaaaaam</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <NavbarComponents />
            <div>Welcome Contact</div>
            <FooterComponents />
        </>
  )
}

export default Contact