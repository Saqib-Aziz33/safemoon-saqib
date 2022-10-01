import bgVideo from "../../media/bg-video.mp4";
import {FiAlertTriangle} from 'react-icons/fi'
import {AiFillCopy} from 'react-icons/ai'
import "./styles/hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <video src={bgVideo} autoPlay loop muted />
      <div className="overlay"></div>

      <div className="content">
        <div className="container mt-5">
          <div className="row" style={{paddingTop: '5rem'}}>
          <div className="mb-5">
            <small className="py-2 px-3" style={{backgroundColor: '#602c27', borderRadius: '10px'}}>
                <FiAlertTriangle className='me-2' size={20} />
                <b>We've Evolved:</b> Support for V1 SafeMoon has been officially closed.
                &nbsp; <a href="/">Read more.</a>
            </small>
          </div>
            <section className="col-md-6 mb-5">
              <p className="mb-0 text-uppercase">Welcome to</p>
              <h1 className="display-3 text-uppercase fw-bold my-0">
                SafeMoon
              </h1>
              <p>Community-driven Innovation for Good</p>
              <div className="my-5 hero-btns">
                <button className="btn hero-btn-primary px-4 py-2">Consolidate to V2 SafeMoon!</button>
                <button className="btn">Buy V2</button>
                <button className="btn">Swap</button>
                <button className="btn">Live Chart</button>
              </div>
              <div>
                <b>SafeMoon (SFM) V2 Contract:</b>
                <div className="my-4"></div>
                <small className="py-2 px-3" style={{backgroundColor: '#1d4142', color: '#0fd7ca', borderRadius: '10px'}}>
                0x42981d0bf...b9092fcB5 &nbsp; <AiFillCopy size={20} />
                </small>
              </div>
            </section>

            <section className="col-md-6 mb-3 text-center">
              <p className="mb-0">Out Now:</p>
              <h4 className="text-shadow">SafeMoon Wallet</h4>
              <p>Get it on:</p>
              <div className="d-flex justify-content-center">
                <button className="btn">
                    <img height={40} src="https://safemoon.com/_next/image?url=%2Fimg%2Fgoogle_play.png&w=256&q=75" alt="" />
                </button>
                <button className="btn">
                    <img height={40} src="https://safemoon.com/_next/image?url=%2Fimg%2Fapp_store.png&w=256&q=75" alt="" />
                </button>
              </div>
            </section>

          </div>
        </div>
      </div>

    </section>
  );
};
export default Hero;
