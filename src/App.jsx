import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Results from "./components/Results/Results.jsx";

import {useState} from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleChange(field, newValue) {
    if(newValue.length < 0) {
      return;
    }

    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [field]: +newValue,
      }
    })
  }
  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className='center'>Please enter correct duration greater than zero.</p> }
      {inputIsValid && <Results input={userInput} />}

    </>
  )
}

export default App
