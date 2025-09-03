

import { Banner } from './components/Banner'
import { HeroVideo } from './components/HeroVideo'
import { Review } from './components/Review'
import { Contact } from './components/Contact'
import { GoogleMap } from './components/GoogleMap'
import { Footer } from './components/Footer'

import heroVideoMov from './assets/hero.mov'
import smogchecklogo from './assets/smogchecklogo.jpg'
import blueSmogCheckLogo from './assets/blueSmogCheckLogo.png'

function App() {
  return (
    <div className=' mb-20 max-w-[1400px] mx-auto '>
      <div className='w-full  block md:flex flex-col items-center justify-center bg-gray-100'>

        <Banner size={3}>Phan's <span className='text-2xl font-normal'>Smog Station</span></Banner>

        <HeroVideo
          videoMov={heroVideoMov}
          title="Drive Worry-Free"
          content="We make smog checks simple, fast, and stress-free, so you can get back on the road with peace of mind."
        />

        {/* Services Section */}
        <section className="px-3 md:px-[10%] flex flex-col md:flex-row items-center md:items-start gap-8 mt-8  mx-auto ">
        <img
          src={smogchecklogo}
          // src={blueSmogCheckLogo}
          className="w-full md:w-96 h-64 md:h-72 object-cover rounded-md shadow-lg"
          alt="Smog check service"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl  mb-4 md:mb-8">
            Services
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            At Phan’s Smog Station, we specialize in providing reliable smog
            checks to keep your vehicle compliant with California emissions
            standards. Our process is quick, efficient, and designed to get
            you back on the road without hassle. With friendly service and
            accurate testing, we make smog checks simple and stress-free.
          </p>
        </div>
      </section>


        {/* Reviews Section */}
        <section className='flex flex-col md:flex-row px-3 md:px-[10%] justify-between mt-8 gap-6 md:gap-4'>
          <Review name="Manpreet K." year="2025" review="“Fast, great customer service, and Nate even kept his shop open an extra 15 minutes because I was running late”"/>
          <Review name="Nick L." year="2025" review="“Have been here for flat tires, replacements, smog...they do everything well and with a smile.”"/>
          <Review name="Cythia C." year="2025" review="“I was helped by Tri, he was super friendly and the service was QUICK, and affordable and the information was sent directly to the DMV!”"/>
        </section>

        {/* Contact section */}
        <section className='mt-8 px-3 md:px-[10%] flex gap-5 md:gap-20 w-full md:flex-row flex-col flex  justify-center'>
          <Contact />
          <GoogleMap />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
