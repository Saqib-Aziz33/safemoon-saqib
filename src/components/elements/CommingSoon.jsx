const CommingSoon = () => {
  return (
    <section className="comming-soon-section">
      <div className="container">
        <section className="col-md-6">
          <span
            className="badge mb-4"
            style={{ backgroundColor: "#1d4142", color: "#0fd7ca" }}
          >
            Introducing
          </span>
          <h2 className="fw-bold">The SafeMoon Exchange</h2>
          <p>
            The SafeMoon exchange is a revolutionary new idea that will bring
            tokenomics to all of crypto on its platform. We call this
            Cryptonomics
          </p>
          <button className="btn btn-outline-light disabled mt-5 px-5 py-3" style={{borderRadius: '30px'}}>Comming Soon</button>
        </section>
        <section className="col-md-6 d-none d-md-block">
            <img data-aos="fade-left" className="img-fluid" style={{position: 'absolute', bottom: 0, right: '150px'}} src="https://safemoon.com/_next/image?url=%2Fimg%2Fiphone.png&w=640&q=75" alt="" />
        </section>
      </div>
    </section>
  );
};
export default CommingSoon;
