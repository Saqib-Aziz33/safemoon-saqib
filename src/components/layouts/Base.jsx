// layout
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";
import {BiUpArrow} from 'react-icons/bi'

const Base = (prop) => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ height: "100vh" }}
    >
      <Header />

      <ScrollToTop smooth component={<BiUpArrow size={40} />}  style={{backgroundColor: 'hsla(0,0%,65%,.2)', boxShadow: 'none', color: '#ffffffA4', width: '60px', height: '60px', borderRadius: '10px'}} />

      <main role="main">
        {prop.children}
      </main>
      <Footer />
    </div>
  );
};
export default Base;
