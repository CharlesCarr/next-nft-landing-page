import React from 'react'

const Top = () => {
  return (
    // calc height for this as 100vh - nav height (in global css)
    <div className="bg-slate-800 w-full text-center text-white" id="home">
      <div className="w-3/4 mh-80 mx-0 my-auto flex justify-center items-center">

        <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <p>Typewriter text here...</p>
        </div>

        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <p>Cover Video here...</p>
        </div>

        <div className="absolute bottom-8 right-[90%] w-28 h-28 border rounded-full">
          <span className="w-14 h-14 flex justify-center items-center rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-black">
          &#x2193;
          </span>
          {/* <Image width={500} height={400} src={'test'} alt="NFT"></Image> */}

        </div>


      </div>

    </div>
  )
}

export default Top