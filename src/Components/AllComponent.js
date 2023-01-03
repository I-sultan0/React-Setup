import React, { useState } from "react";
import Filter from "./Filter/Filter";
import Output from "./Output/Output";

const AllComponent = (props) => {
  const [filteredAmount, setFilteredAmount] = useState("100");

  const updateAmount = (amount) => {
    console.log(amount);
    setFilteredAmount(amount);
  };

  const updatedAmount = props.items.filter((filterData) => {
    return filterData.amount <= filteredAmount;
  });

  return (
    <>
      <Filter sendAmount={updateAmount} currentAmount={filteredAmount} />
      <Output items={updatedAmount} />
    </>
  );
};

export default AllComponent;
