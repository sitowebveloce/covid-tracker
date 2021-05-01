import React from 'react'
import Loader from './imgs/loader.gif'

const Card = ({data}) => {
    // Local state
    const [country, setCountry] = React.useState('World Situation');
    const [state, setState] = React.useState(data.Global);

    // console.log(data)
    // DATE OPTIONS
    const options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
    // THOUSANDS SEPARATOR
    function thousandsCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

   // HANDLE COUNTRIES
   const handleCountries = e =>{
    // console.log(e.target.value);
    // let id = +e.target.value; // change the type in number with the + sign
    let idString = e.target.value; // type string
    // console.log(typeof id, typeof e.target.value)
    // Find country data by ID and save it in the local state
     if(idString === '0'){
        // Default State
        setState(data.Global);
        setCountry('World Situation');
       
     }else{
    // Coutry selected state
    let dataFromArray = data.Countries.find(country => country.ID === idString);
    // console.log(dataFromArray)
    // Set the state
    setCountry(dataFromArray.Country);
    setState(dataFromArray);
     }
};

    // RETURN 
    return (
        <div className='card-container'>
            <h2 className='card-title'>{country}</h2>

            {data ? 
            <div className='card-grid'>

           <span className='card-date'>DATE </span><div>{ new Date(state.Date).toLocaleDateString('it-IT', options)}</div>
           <span>New Confirmed </span><div>{thousandsCommas(state.NewConfirmed)}</div>
           <span>New Deaths </span><div>{thousandsCommas(state.NewDeaths)}</div>
           <span>New Recovered </span><div>{thousandsCommas(state.NewRecovered)}</div>
           <span className='card-total'>TOTAL</span> <div></div>
           <span>Total Confirmed </span><div>{thousandsCommas(state.TotalConfirmed)}</div>
           <span>Total Deaths </span> <div className='total-deaths'>{thousandsCommas(state.TotalDeaths)}</div>
           <span>Total Recovered </span><div>{thousandsCommas(state.TotalRecovered)}</div>
            {/* SELECTOR  */}
            <div className='div-selector'>
            <select
            onChange={handleCountries}
            className='countries-selector'>
            <option value='0'>Select Country</option>
            {
                data.Countries.map(c =>(  
                    <option key={c.ID} value={c.ID}> {c.Country}</option>
                ))
            }
            </select>
            
            </div>       
           
            </div>
            : 
            <img className='loader' src={Loader} alt='loader'></img>
            }
          
        </div>
    )
}

export default Card
