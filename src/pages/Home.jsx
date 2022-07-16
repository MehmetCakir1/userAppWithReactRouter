import Navbar from "../components/Navbar";
import CardContainer from "../components/CardContainer";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
    
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)


  const getData = async()=>{
    try{
        const {data}=await axios.get(url)
        console.log(data);
        setUsers(data)
        setLoading(true)
    }catch(error){
        console.log(error);
    }
   
  }
useEffect(() => {
    getData()
}, [])
if(!loading){
    return <h1 className="loading display-1 fw-bold">Loading...</h1>
}
else{
    return (
    <div className="m-auto">
        <Navbar/>
        <CardContainer users={users}/>
    </div>
  )
}

}

export default Home