import React, { useEffect, useState } from "react";

const myStyle = {
  backgroundColor: "lightBlue",
};

const App = () => {
  const [countryData, setCountryData] = useState();
 


  function getData() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => {
        setCountryData(json);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(countryData);
  return (
    <div style={myStyle}>
      hello world this is version control
      <h1>this is the table</h1>
      
    </div>
  );
};

export default App;
