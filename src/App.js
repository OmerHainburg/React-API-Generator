import KanyeGif from "./KanyeGif";
import axios from 'axios';
import React , { useState, useEffect } from 'react';
import "./styles.css";

const App = () => {
  const [url, setUrl] = useState('');
  const [quote, setQuote] = useState("");
  const [prevQoutes, setPrevQoutes] = useState([]);

  useEffect(() => {
     const interval = setInterval(() => {
        let urlFinal = "https://api.kanye.rest";
        axios.get(urlFinal)
        .then((res) => {
          let newQoute = res.data.quote;
          setQuote(newQoute);
      })
            setUrl(urlFinal);
        }, 5000);
        return () => clearInterval(interval);
  }, [url]);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //   let urlFinal = "https://api.kanye.rest";
    //   fetch(urlFinal)
    //   .then(response => response.json())
    //   .then (json => {
    //    let newQoute = json.quote;
    //    setQuote(newQoute);
    //   })
    //   .catch(error => console.log("Error"))
      
    //            setUrl(urlFinal);
    //        }, 1000);
    //        return () => clearInterval(interval);
    // }, [url]);


  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <KanyeGif />
      <h2>QUOTE</h2>
         <p>{quote}</p>
    </div>
  );
};

export default App;
