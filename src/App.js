import React, { useEffect, useState } from 'react';
import './App.css';
import {Box, Stack, Typography} from '@mui/material';
import Search from './components/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


const App = () => {

  const [info, setInfo] = useState({
    "city" : "" , 
    "temp" : 0,
    "max" : 0,
    "min" : 0,
    "type" : "",
    "city" : "- - - -"
  });

  const fetchData = async (data) => {
    await setInfo((info) => ({
      ...info, ...data
    }))
  }
  return(
    
    <div className='main-container'>
      <Typography variant="h5" mb={3}>My Weather</Typography>
        <Box className="sub-container">
          <Stack direction="row">
            <Search callme={fetchData}/>
          </Stack>
          
          <Stack mt={3} spacing={1} direction="row" justifyContent="center">

            {(info.type === "Clear" || info.type === "Haze" || info.type === "Mist") && <WbSunnyIcon color={"warning"} sx={{fontSize: "50px"}}/>}
            {(info.type === "Clouds") && <ThunderstormIcon  sx={{fontSize: "50px"}}/>}
          
            <Typography variant="h4">{info.temp}
              <sup>&#176;</sup>C
            </Typography>
          </Stack>
          <Stack direction="row" mt={1} justifyContent={"center"}>
            <Typography variant="body2">{info.city}</Typography>
          </Stack>
          <Stack direction="row" mt={2} justifyContent={"space-between"} sx={{width: "80%"}}>
            <Stack>
              <Box className='boxes'>
                <Typography variant="body2">Min</Typography>
                <Typography variant="h5">{info.min}
                <sup>&#176;</sup>C
                </Typography>
              </Box>
            </Stack>
            <Stack>
            <Box className='boxes'>
                <Typography variant="body2">Max</Typography>
                <Typography variant="h5">{info.max}
                <sup>&#176;</sup>C
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack mt={5} sx={{height:"8px"}}>
            {info.today}
          </Stack>
        </Box>
    </div>
  );
}

export default App;
