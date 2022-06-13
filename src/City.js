import React from 'react';

export default function City(castle, skyline, waterfront) {
  return (
    <div className="city">
      <img src={`castle-${castle}.jpeg`} />
      <img src={`skyLine-${skyline}.jpeg`} />
      <img src={`waterfront-${waterfront}.jpeg`}/>
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
    </div>
  );
}
