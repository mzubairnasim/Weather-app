import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    const key='270afbc518467f7d9f0d40df7450164c'
 

    const [loading, setloading] = useState(false)
    const [temp, settemp] = useState("")
    const [country, setcountry] = useState("")
    const [city, setcity] = useState("")
    const [desc, setdesc] = useState("")
    const [icon, seticon] = useState("")
    const [id, setid] = useState("")
    const [input, setinput] = useState("")
    const [text, settext] = useState('london')

    useEffect(()=>{
        search()
    },[text])

    const get=()=>{
        settext(input)
    }
    
  
    const api=`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${key}`
    const search=async() => {
        setloading(true)
       const res=await fetch(api)
       const data=await res.json()
       console.log(data)
        setcity(data.name)
        setcountry(data.sys.country)
        // settemp(data.main.temp)
        convert((data.main.temp).toFixed(2))
        setdesc(data.weather[0].description)
        seticon(data.weather[0].icon)
        setid(data.id)
        setloading(false)
    }
    
        const convert=(abc)=>{
            const change=Math.round(abc-273)
            settemp(change)
        }
    return (
        <div className='bg'>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-8 offset-2 '>
            <div class="form-group mt-3">
            <label>City Name</label>
            <input class="form-control" type='text' type='text' value={input} placeholder='Type City Name'
             onChange={e=>setinput(e.target.value)}/>
            </div>
            <button onClick={get} class="btn btn-primary mb-3">Search</button>
            </div>
            </div>
    
<div  className='row'>
    <div className='col-lg-8 offset-2  text-center'>
    {/* {loading?<h1>Loading...</h1>: */}
    <div className='text-white'>
     <h2>{city}</h2>
      <h2>{country}</h2>
      { <h2>{temp}'C</h2>}
      <h4>{desc}</h4>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
      style={{width:200,height:160,alignContent:"center",color:"white"}}/><br/>
      <Link to={'/sub/'+ id} className='text-white font-weight-bold'><h3>Click to Get Next 5-days weather</h3></Link>
      
    </div>
    {/* } */}
    </div>
</div>
    
        </div>
        </div>
    )
}
