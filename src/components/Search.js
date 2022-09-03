import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import './Search.css';
import axios from 'axios';


function Search(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);


  const getData = async () => {
      if(name !== ""){
        const result = await axios.get(`http://localhost:5000/fetch?city=${name}`);
        const data = result.data;
        if(data.status === 200)
          props.callme(data);
        else{
          setError(true);
        }
      }
      else{
        setError(true);
      }
  }

  return (
    <div>
    <div className='main-search' style={{border: error? "1px solid red":""}}>
        <input className="main-input" onChange={(e) => {setName(e.target.value); setError(false)}} 
        type="text" placeholder='Enter city name'/>  
          <IconButton onClick={getData}>
            <SearchIcon  className="search-btn"/>
          </IconButton>
    </div>
    <div className='error-msg'>{error?'invalid city name':''}</div>
    </div>

  )
}

export default Search;