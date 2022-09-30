// componenets
import Hero from "../components/elements/Hero";
import SectionGrid2 from "../components/elements/SectionGrid2";
import AboutToken from "../components/elements/AboutToken";
import Services from "../components/elements/Services";
import CommingSoon from "../components/elements/CommingSoon";
import Partners from "../components/elements/Partners";

const Home = () => {
  return (
    <>
      <Hero />
      <SectionGrid2
        badge="About Us"
        heading="A human-focused technology and innovation business expanding blockchain technologies for a brighter tomorrow."
        img="https://safemoon.com/img/V6.jpg"
      >
        <p>Deeply connected to and driven by our award winning community (The SafeMoon Army), we are innovating for good. Building blockchain, commerce, metaverse and NFT products to derive new kinds of value from crypto technology and to apply it to increasingly better use.</p>
        <p>We are now addressing the second part of our mission – the expansion and channeling of our technology to propel new innovations for good, and a Venture Philanthropy model to advance those innovations to every part of the world.</p>
      </SectionGrid2>
      <SectionGrid2 badge='The Token' heading='The SafeMoon Protocol V2 is a community focused DeFi token that forms part of the expanding SafeMoon ecosystem.' img='https://safemoon.com/_next/image?url=%2Fimg%2Fspaceman-stars.png&w=640&q=75'>
        <p>Four simple functions occur during each trade</p>
        <div>
          <AboutToken title='Reflections' text='4% is Redistributed to all existing holders' />
          <AboutToken title='LP Acquisition' text='3% is added to liquidity' />
          <AboutToken title='Token Burn' text='2% of tokens are burned' />
          <AboutToken title='Growth Fund' text='1% is added to the SafeMoon Ecosystem Growth Fund' />
        </div>
      </SectionGrid2>

      <Services />
      <CommingSoon />
      <Partners />
      
    </>
  );
};
export default Home;
