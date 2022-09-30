import {FaCat} from 'react-icons/fa'

const AboutToken = (prop) => {
  return (
    <div className='d-flex align-items-center' data-aos="zoom-in">
        <FaCat size={50} color='#0fd7ca' />
        <div className='ms-2 my-2'>
            <h5>{prop.title}
                <br />
                <span className='opacity-50'>{prop.text}</span>
            </h5>
        </div>
    </div>
  )
}
export default AboutToken