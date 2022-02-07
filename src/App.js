import KanyeGif from "./KanyeGif";
import axios from 'axios';
import React , { useState, useEffect } from 'react';
import "./styles.css";

const App = () => {
  const [url, setUrl] = useState('');
  const [quote, setQuote] = useState("");
  const [prevQoutes, setPrevQoutes] = useState([]);

  //Axios
   useEffect(() => {
      const interval = setInterval(() => {
         let urlFinal = "https://api.kanye.rest";
         axios.get(urlFinal)
         .then((res) => {
           //Get Quote From URL
           let newQoute = res.data.quote;
           setQuote(newQoute);
           //Add NewQuotes in Previous Array. Like Push
           setPrevQoutes(previous => [newQoute, ...previous]);
       })
             setUrl(urlFinal);
         }, 5000);
         return () => clearInterval(interval);
  }, [prevQoutes, url]);

  //Fetch API
    //  useEffect(() => {
    //    const interval = setInterval(() => {
    //    let urlFinal = "https://api.kanye.rest";
    //    fetch(urlFinal)
    //    .then(response => response.json())
    //    .then (json => {
    //       let newQoute = json.quote;
    //       setQuote(newQoute);
    //        //Add NewQuotes in Previous Array. Like Push
    //       setPrevQoutes(previous => [newQoute, ...previous]);
    //       setQuote(newQoute);
    //    })
    //    .catch(error => console.log("There was a problem loading a Kanye quote, please try again later"))
      
    //             setUrl(urlFinal);
    //         }, 1000);
    //         return () => clearInterval(interval);
    //  }, [prevQoutes, url]);


  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <KanyeGif />
      <div>
        <h2>QUOTE</h2>
          <p>{quote}</p>
      </div>
      <div>
        <h2>Previous Qoutes</h2>
         {prevQoutes.map((quote) => {
           if(quote === "")
           {
             return <p>Loading..</p>
           }
           else
           {
            return <p>{quote}</p>
           }
         })}
      </div>
    </div>
    
  );
};

export default App;
