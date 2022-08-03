
import {Helmet} from "react-helmet";
import { Routes, Route} from "react-router-dom";
import Dash from "./Components/Dashboard/Dash";
import Landing from "./Components/Hero/Landing";

function App() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>G-Ride</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="G Ride" />
      </Helmet>

      <Routes>
        <Route path="dashboard" element={<Dash/>}/>
        <Route index path="/" element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
