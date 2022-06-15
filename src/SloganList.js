import React from 'react';
import Slogan from './Slogan.js';

export default function SloganList({ sloganList }) {
  
  return (
    <section>
      <h2>Your slogans:</h2>
      {sloganList.map((slogan, i) => < Slogan key={slogan + i} Slogan={slogan} />)}
      {/* This kind of component should be familiar by now. It takes in (as props) an array of slogans */}
      {/* Then map over those slogans and for each slogan, render a Slogan component. Supply a key and a slogan as props to each Slogan component */}
    </section>
  );
}
