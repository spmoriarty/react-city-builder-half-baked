import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  // track some state here.
  const [skyline, setSkyline] = useState(1);
  const [waterfront, setWaterfront] = useState(1);
  const [castle, setCastle] = useState(1);
  const [sloganList, setSloganList] = useState([]);
  // const [sloganForm, setSloganForm] = useState('');
  const [cityNameInput, setCityNameInput] = useState('');
  const [city, setCity] = useState('');
  console.log(sloganList);

  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  
  // you'll need to track a city name, which starts as the city name of your choice.

  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example

  return (
    <div className="App">
      <City city={city} castleId={castle} waterfrontId={waterfront} skylineId={skyline} />
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <h1>
        {/* dynamically update the city name here using state */}
        <div>Welcome to <setCity cityNameInput={cityNameInput } city={city}/>{cityNameInput}</div>
      </h1>
      <div className='bottom'>
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <section>
          < CityNameInput cityNameInput={cityNameInput} setCityName={setCityNameInput} setCity={setCity}/> 
        </section>
        <section className='dropdowns'>
          <div>
            < CastleDropdown castle={castle} setCastle={setCastle}/>
            < SkylineDropdown skyline={skyline} setSkyline={setSkyline}/>
            < WaterfrontDropdown waterfront={waterfront} setWaterfront={setWaterfront}/>
          </div>
  
        </section>
        <SloganForm setSloganList={setSloganList} sloganList={sloganList}/>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        <SloganList sloganList={sloganList} />
        {/* here, the SloganList component takes the array of slogans that lives in state */}

      </div>
    </div>
  );
}

export default App;
