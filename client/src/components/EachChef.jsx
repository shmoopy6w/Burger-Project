import React from "react";

function EachChef({ imgSrc, name, job }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img
        className='xs:w-3xl sm:w-4xl md:w-4xl w-[20rem]'
        src={imgSrc}
        alt=''
      />
      <h1 className='font-bold m-4 text-lg'>{name}</h1>
      <h2 className='font-bold'>{job}</h2>
    </div>
  );
}

export default EachChef;
