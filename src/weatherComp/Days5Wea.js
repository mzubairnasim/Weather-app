import React,{useState,useEffect} from 'react'
const key='270afbc518467f7d9f0d40df7450164c'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Days5Weather(props) {
    const ans=props.match.params.id
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([])

  useEffect(async() => {
    setloading(true)
   const res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${ans}&appid=${key}`)
   const data=await res.json()
   console.log(data)
   setdata(data.list)
    setloading(false)
},[])

            
    return (
        <div className='d-flex'>
       
        {loading?<h1>loading...</h1>:
        <div>
             <h1>5 Days Forcasl</h1>
             <h1><a href='/'>back</a></h1>
            
             <div className='card'>
             {data.map((value)=>{
                return <div className='card'>
                    <p>{value.dt_txt}</p>
                    <p>{(value.main.temp-273).toFixed(2)}</p>
                    <p>{value.weather[0].description}</p>  
                    <img src={`https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} style={{width:100,height:100}}/>
                </div>
            })}
             </div>
            
        </div>
        }
        
        </div>
    )
}
