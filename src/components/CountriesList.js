import {NavLink} from 'react-router-dom'

export default function CountiesList(props){
    return (
        <div className="col-5" style={{maxHeight: "90vh", overFlow: "scroll"}}>
            <div className="list-group">
                {props.countries.map((currentCountryObj) => 
                <NavLink 
                    className="list-group-item list-group-item-action" 
                    to={`/${currentCountryObj.cca3}`}>
                  <img 
                    className="me-2"
                    src={`https://flagcdn.com/28x21/${currentCountryObj.cca2.toLowerCase()}.png`} 
                    alt={`Flag of ${currentCountryObj.name.common}`} 
                  />
                  {currentCountryObj.name.common}
                </NavLink>)}
            </div>
          </div>
    );
}