import React from 'react'
import '../FooterComponents/style.scss'
function FooterComponents() {
  return (
    <>
            <div className='footer-container'>
                <div className='Copyright-text'>
                    <h2>Copyright © Your Website 2022</h2>
                </div>
                <div className='Teams-ul'>
                    <ul>
                        <li> <a>Privacy</a> </li>
                        <li> <a>Terms</a> </li>
                        <li> <a>Contact</a> </li>
                    </ul>
                </div>
            </div>
        </>
  )
}

export default FooterComponents