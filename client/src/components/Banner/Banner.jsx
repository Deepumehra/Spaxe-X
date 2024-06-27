import { Link } from 'react-router-dom'
import sateliteImg from "../../assets/satelite1.jpg"



const Banner = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img data-aos="zoom-in" 
            src={sateliteImg} alt="" 
            className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'
            />
          </div>
          <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
            <p className='text-sky-800 uppercase'>Our Mission</p>
            <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl'>Rapidcast</h1>
            <p data-aos="fade-up" data-aos-delay="500">Rapidcast in space tech refers to swift data transmission and communication protocols among spacecraft and ground stations. It enables real-time monitoring of missions and facilitates quick dissemination of space-related updates and discoveries to the public and within the industry.</p>
            <Link to='/missions'>
              <button 
              className='primary-button'
              data-aos="fade-up" 
              data-aos-delay="700"
              >Learn More.</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
