

import './App.css'
import { Banner } from './components/Logo'
import { Slogan } from './components/Slogan'
import { Review } from './components/review'
import image01 from './assets/image01.jpg'
import smogchecklogo from './assets/smogchecklogo.jpg'
function App() {


  return (
    <>
      <div className='w-full  flex flex-col items-center justify-center bg-gray-200'>
        <Banner size={3}>Phan's Smog Station</Banner>

        <Slogan
          backgroundImage={image01}
          title="Welcome to Phan's Smog Station"
          content="Your one-stop shop for all your smog check needs!" />

          <div className='flex items-start w-[80%] gap-14 mt-8 '>
            <img src={smogchecklogo} className='w-96 h-72 object-cover rounded-md  shadow-lg' />
            <div>
              <h2 className='text-3xl font-bold mb-8'>Services</h2>
              <p>  We provide comprehensive smog check services for all types of vehicles,
  including cars, trucks, SUVs, and hybrids. Whether you need a biennial
  inspection, out-of-state certification, or a STAR smog test, our station is
  equipped with the latest technology to deliver quick and reliable results.</p>
            </div>
          </div>

          <div className='flex w-[80%] justify-between mt-8 gap-4'>

              <Review name="John D." year="2022" review="Phan's Smog and auto is excellent. A wonderful business I will always support, and I can't recommend them high enough. They are fast, give quality service, and at better than fair prices!

If they read this review, I hope they realize just what a great business they are. I will always suggest them for all our vehicle maintenance needs!

Thank you, Anh Phan..." />

              <Review name="John D." year="2022" review="Given my last review was four years ago. I figured I'd give you guys an update. I go here every year for my smog. I go here every time I need a tire. Every time I am here, I am at the point where the owner catches up with me. Even if I call around closing time, they will always try service me. Phan's shop is probably one of the last real mechanics, trying to give people a deal versus up charging every single customer. I have saved hundreds of dollars and time just letting Anh change my tire and he will always let me know if my car is acting weird. This is a real business that actually wants you to drive your car." />

              <Review name="John D." year="2022" review="This is my go-to smog station in Newark. No appointment needed--they accept walk-ins and complete smog checks quickly. The owner is welcoming, and the pricing is fair." />

          </div>

      </div>
    </>
  )
}

export default App
