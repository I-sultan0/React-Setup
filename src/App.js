import React, { useState } from "react";
import Form from "./Components/Form/Form";
import Output from "./Components/Output/Output";

const App = () => {
  const [output, setOutput] = useState("");

  const receiveData = (data) => {
    console.log(data);

    setOutput((prevExpense) => {
      return [...prevExpense, data];
    });
  };

  return (
    <>
      <Form sendData={receiveData} />
      <Output items={output} />
    </>
  );
};

export default App;
