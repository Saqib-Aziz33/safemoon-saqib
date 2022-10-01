import {BsDiscord, BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsReddit} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="p-4 pt-5" style={{backgroundColor: '#1f242c'}}>
      <div className="container">
        <div className="row py-5">
          <section className="col-md-8 mb-3 d-block d-md-flex align-items-center">
            <div className="me-5 mb-3 mb-md-0">
              <img src="https://safemoon.com/_next/image?url=%2Fimg%2Flogo.png&w=96&q=75" height={60} alt="" />
            </div>
            <div className='pe-0 pe-md-5'>
              <h4>SafeMoon - Innovating for Good</h4>
              <p style={{textAlign: 'justify'}}>Building blockchain, commerce, metaverse and NFT products to derive new kinds of value from crypto technology and to apply it to increasingly better use. Advancing our innovations to every part of the world.</p>
              <div className='fs-3 d-flex gap-2' style={{color: '#0fd7ca'}}>
                <BsDiscord />
                <BsFacebook />
                <BsTwitter />
                <BsInstagram />
                <BsYoutube />
                <BsReddit />
              </div>
            </div>
          </section>
          <section className="col-md-4 mb-3  mt-3 mt-md-0">
            <div className="row text-center text-md-end">
              <div className="col-6">
                <p className='mb-1'>Wallet Tracker</p>
                <p className='mb-1'>Branding</p>
                <p className='mb-1'>White Paper</p>
                <p className='mb-1'>Contract</p>
                <p className='mb-1'>Status</p>
                <p className='mb-1'>SafeMoon Card</p>
              </div>
              <div className="col-6">
                <p className="mb-1">Support</p>
                <p className="mb-1">List a Token</p>
                <p className="mb-1">Careers</p>
                <p className="mb-1">Education</p>
                <p className="mb-1">Wallpaper</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='footer-links d-flex flex-wrap justify-content-center gap-4 mb-4'>
        <a href="/">Term of USe</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Cookies Policy</a>
        <a href="/">Wallet EULA</a>
        <a href="/">Wallet Privacy</a>
        <a href="/">Disclaimer</a>
        <a href="/">FAQS</a>
        <a href="/">OutPartners</a>
      </div>

      <p className="mb-0 text-center">Copyright © 2022 SafeMoon US LLC | All Rights Reserved.</p>
    </footer>
  )
}
export default Footer