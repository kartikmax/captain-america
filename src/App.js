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
      <table>

      {countryData &&
        countryData.map((x) => {
          return (
            <>
              {/* {x.name.common}
              <p>{x.flag}</p>
            <img src={x.flags.png} height="35px" width="80px" alt={x.flag} /> */}
              <tbody>
                <tr>
                  <td>
                    {x.name.common}
                  </td>
                  <td>
                    {x.capital}
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
        </table>
    </div>
  );
};

export default App;
