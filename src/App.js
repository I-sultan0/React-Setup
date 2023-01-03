import React, { useState } from "react";
import AllComponent from "./Components/AllComponent";
import Form from "./Components/Form/Form";

const App = () => {
  const [output, setOutput] = useState([]);

  const receiveData = (data) => {
    console.log(data);

    setOutput((prevExpense) => {
      return [...prevExpense, data];
    });
  };
  console.log(output);
  return (
    <>
      <Form sendData={receiveData} />
      <AllComponent items={output} />
    </>
  );
};

export default App;
