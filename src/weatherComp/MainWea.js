import React,{createContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function MainWea() {
  const key='270afbc518467f7d9f0d40df7450164c'
 

  const [loading, setloading] = useState(false)
  const [temp, settemp] = useState("")
  const [country, setcountry] = useState("")
  const [city, setcity] = useState("")
  const [desc, setdesc] = useState("")
  const [icon, seticon] = useState("")
  const [id, setid] = useState("")
  const [input, setinput] = useState("")
  

  const api=`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`
 
  

//   useEffect(()=>{
//       search()
//   },[])

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
    <div>
    <h1>search</h1>
    <input type='text' value={input} onChange={e=>setinput(e.target.value)}/>
    <button onClick={search}>Search</button>

    {loading?<h1>Loading..</h1>:
    <div>
     <h2>{city}</h2>
      <h2>{country}</h2>
      { <h2>{temp}'C</h2>}
      <p>{desc}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} style={{width:100,height:100}}/>
           <p>{id}</p> 
      <Link to={'/days/'+ id}>Click to Get Next 5z-days weather</Link>
      
    </div>
    }
     
    </div>
  )
}
