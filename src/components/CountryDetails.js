import {Link, useParams} from 'react-router-dom'

export default function CountryDetails(props){
    const {cca3} = useParams();

    const foundCountry = getCountryNameFromCode(cca3)

    function getCountryNameFromCode(cca3){
        return props.countries.find((currentCountryObj) => currentCountryObj.cca3 === cca3)
    }

    return (
        <div className="col-7">
        
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>

                  {foundCountry.capital.map((currentCapital) => {
                      return  <td>{currentCapital}</td>
                  })}
                 
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {foundCountry.borders.map((currentBorderObj) => {
                            return  <li key={currentBorderObj}>
                                <Link to={`/${currentBorderObj}`}>{getCountryNameFromCode(currentBorderObj).name.common}</Link></li>
                        } )}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );

}