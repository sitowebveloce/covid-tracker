import React from 'react';
import Card from './Card';
import axios from 'axios';
import Loader from './imgs/loader.gif'

const Front = () => {
// Local State
const [data,setData] = React.useState({});
const [loading, setLoading] = React.useState(true);

// React use Effect
React.useEffect(()=>{
    // COVID DATA END POINT
    let endPoint = 'https://api.covid19api.com/summary';
    // Async Fetch data
    (async function fetchData(url){
    try{
        let res = await axios.get(url);
        let data = res.data;
        if(data){
            // console.log(data);
            setTimeout(()=>{
            setData(data);
            setLoading(false);
            }, 1300);
        }
    }catch(error){
        console.error(error);
    }
   
})(endPoint)
   
},[]);

    // RETURN
    return (
        <main>
           {loading  ?  <img className='loader' src={Loader} alt='loader'></img> :  <Card data={data} />}
        </main>
    )
}

export default Front
