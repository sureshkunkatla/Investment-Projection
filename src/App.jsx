import { useState } from "react";
import Header from "./components/Header";
import UserInputSection from "./components/UserInputSection";
import Result from "./components/Result";

function App() {
  const [inputObj, setInputObj] = useState({
    initialInvestment: 10000,
    annualInvestment: 30000,
    expectedReturn: 12,
    duration: 10,
  });

  const onChange = (inputIdentifier, value) => {
    setInputObj((prev) => {
      return {
        ...prev,
        [inputIdentifier]: value,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInputSection inputObj={inputObj} onChange={onChange} />
      {inputObj.duration >= 1 ? (
        <Result inputObj={inputObj} />
      ) : (
        <p>Please provide valid inputs</p>
      )}
    </>
  );
}

export default App;
