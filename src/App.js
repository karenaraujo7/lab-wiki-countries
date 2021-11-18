import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar"
import countries from "./countries.json"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"

function App() {
  return (
    <div>
      <Navbar/>

      <div class="container">
        <div class="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:cca3" element={<CountryDetails countries={countries}/>}/>
          </Routes>

        </div>
      </div>

    </div>
  );
}

export default App;
