import { MdOutlineArrowForward } from "react-icons/md";

const Service = (prop) => {
  return (
    <section className="col-lg-4 d-flex align-items-center justify-content-between mb-3" data-aos='zoom-in'>
      <div
        className="bg-dark fs-1 rounded px-3 py-2 me-5"
      >
        {prop.children}
      </div>
        <div>
          <h4>{prop.heading}</h4>
          <p className="mb-0">{prop.text}</p>
          <button className="btn fw-bold ps-0" style={{ color: "#0fd7ca" }}>
            {prop.btnText} <MdOutlineArrowForward />
          </button>
        </div>
    </section>
  );
};
export default Service;
