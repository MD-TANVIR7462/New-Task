import React from "react";


const BennerMEn = () => {
  return (
    <>

    <div
      className="bg-cover object-cover object-center bg-center md:w-full md:min-h-screen  h-[380px]  flex justify-center items-center  "
      style={{
        backgroundImage: `url("https://i.ibb.co/ZKcBXnk/h1-hero1-jpg.webp")`,
      }}
    >
      <div className="text-center md:flex  md:min-h-[860px] items-center w-[90%] mx-auto">
      <div className="max-w-xl md:w-3/4 mr-auto mt-12">
          <i className="md:text-5xl text-3xl  font-thin  text-red-600">
            Fashion Sale
          </i>
          <h1 className="md:text-5xl text-2xl font-semibold mt-3 mb-1 md:my-4 text-gray-800">
            Minimal Men's Style
          </h1>
          <p className="mb-5 text-sm text-gray-500 md:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque 
          </p>
    
        </div>
      </div>
    </div>

    </>
  );
};

export default BennerMEn;