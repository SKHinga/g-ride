import { useState, useEffect } from "react";
import {Helmet} from "react-helmet";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>G-Ride</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="G Ride" />
      </Helmet>
      <h1 className="text-cyan-500 text-xl font-bold underline">Page Count: {count}</h1>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
