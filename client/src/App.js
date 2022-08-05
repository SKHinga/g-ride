import { useState, useEffect } from "react";
import { Riders } from "./Components/Helper/Context";
import {Helmet} from "react-helmet";
import { Routes, Route} from "react-router-dom";
import Dash from "./Components/Dashboard/Dash";
import Landing from "./Components/Hero/Landing";
import Display from "./Components/Dashboard/Display";
import Lend from "./Components/Dashboard/Lend";

function App() {

  const [overlay, setOverlay] = useState(false)
  const [sign, setSign] = useState(false)
  const [rides, setRides] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user));
      }
    });
  }, []);

  // if(!currentUser) return </>;
  
  return (
    <Riders.Provider value={{setOverlay, overlay, setSign, sign, rides, setRides, currentUser, setCurrentUser}}>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>G-Ride</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="G Ride" />
        </Helmet>

        <Routes>
          <Route path={'/'} element={<Landing/>} exact/>
          <Route path={'dashboard'} element={<Dash/>}>
            <Route path={''} element={<Display/>}/>
            <Route path={'hire-out'} element={<Lend/>}/>
          </Route>
        </Routes>
      </div>
    </Riders.Provider>
  );
}

export default App;
