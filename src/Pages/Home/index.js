import React from 'react'
import FooterComponents from '../../Components/FooterComponents'
import NavbarComponents from '../../Components/NavbarComponents'
import {Helmet} from "react-helmet";
function Home() {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>neter yeni eee qaqa</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <NavbarComponents />
            <div>Welcome Home</div>
            <FooterComponents />
        </>
    )
}

export default Home