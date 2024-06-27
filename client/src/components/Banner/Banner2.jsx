import { Link } from 'react-router-dom'
import sateliteImg from "../../assets/satelite2.jpg"



const Banner2 = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800'>
            <p className='text-sky-800 uppercase'>Our Mission</p>
            <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl'>Cosmic Hub Station</h1>
            <p data-aos="fade-up" data-aos-delay="500">CosmoHub serves as a pivotal space workstation, enabling seamless collaboration and data analysis for astronauts and scientists. It integrates cutting-edge technology for research, communication, and operational support, advancing exploration beyond the stars.</p>
            <Link to='/missions'>
              <button 
              className='primary-button'
              data-aos="fade-up" 
              data-aos-delay="600"
              >Learn More.</button>
            </Link>
          </div>
          <div>
            <img 
            src={sateliteImg} 
            alt="SATELITE IMAGE"
            data-aos="zoom-in"  
            className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
