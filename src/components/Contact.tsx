export function Contact() {
  return (
    <div className="flex flex-col justify-center min-w-max md:w-1/2 w-full">
      <h2 className="text-2xl font-bold">Phan's Smog Station</h2>
      <div className="mt-2 mb-4">
        <p className="text-lg">6938 Thornton Ave, Newark, CA 94560</p>
        <p className="text-lg">Newark, CA 94560</p>
      </div>
      <p className="text-lg mb-4">
        <a href="tel:5107940384" className="text-lg text-blue-700 hover:text-blue-800 hover:underline transition-colors">(510) 794-0384</a>
        {" | "}
        <a href="mailto:info@phan-smog.com" className="text-lg text-blue-700 hover:text-blue-800 hover:underline transition-colors">
          info@phan-smog.com
        </a>
      </p>
      <ul className="flex flex-col items-start justify-start">
        <li className="flex items-center">
          <span className="">Sunday - </span>
          <span className="ml-2">Closed</span>
        </li>
        <li className="flex items-center">
          <span className="w-auto">Monday - </span>
          <span className="ml-2">8:00am - 5:00pm</span>
        </li>
        <li className="flex items-center">
          <span className="w-auto">Tuesday - </span>
          <span className="ml-2">8:00am - 5:00pm</span>
        </li>
        <li className="flex items-center">
          <span className="w-auto">Wednesday - </span>
          <span className="ml-2">8:00am - 5:00pm</span>
        </li>
        <li className="flex items-center">
          <span className="w-auto">Thursday - </span>
          <span className="ml-2">8:00am - 5:00pm</span>
        </li>
        <li className="flex items-center">
          <span className="w-auto">Friday - </span>
          <span className="ml-2">8:00am - 5:00pm</span>
        </li>
        <li className="flex items-center">
          <span className="w-auto">Saturday - </span>
          <span className="ml-2">8:00am - 1:00pm</span>
        </li>
      </ul>
    </div>
  )
}
