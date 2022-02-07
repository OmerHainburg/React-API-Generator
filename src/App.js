import KanyeGif from "./KanyeGif";
import axios from 'axios';
import React , { useState, useEffect } from 'react';
import "./styles.css";

const App = () => {
  const [url, setUrl] = useState('');
  const [quote, setQuote] = useState("");
  const [prevQoutes, setPrevQoutes] = useState([]);

   useEffect(() => {
     let urlFinal = "https://api.kanye.rest";
     axios.get(urlFinal)
     .then((res) => {
       let input = res.data.quote;
       setQuote(input);
       console.log(input);
   })
       const interval = setInterval(() => {
         setUrl(urlFinal);
     }, 1000);
     return () => clearInterval(interval);
   }, [url]);

  // useEffect(() => {
  //   // eslint-disable-next-line no-useless-concat
  //   let urlFinal = "https://api.kanye.rest";
  //   fetch(urlFinal)
  //   .then((response)  => { 
  //     let input = response.json();
  //     setPosts(input);
  //     console.log(input.data.quote);
  //   })
  //   .catch(error => console.log("Error"))
  //   const interval = setInterval(() => {
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
