const SectionGrid2 = (prop) => {
  return (
    <section className="container py-5 mt-5 mt-md-0">
        <div className="row align-items-center">
            <div className="col-lg-6 order-1">
                <span className="badge mb-4" style={{backgroundColor: '#1d4142', color: '#0fd7ca'}}>{prop.badge}</span>
                <h2>{prop.heading}</h2>
                <div style={{textAlign: 'justify'}}>
                  {prop.children}
                </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-1">
                <img className="img-fluid" src={prop.img} style={{borderRadius: '50%'}} alt="" />
            </div>
        </div>
    </section>
  )
}
export default SectionGrid2