import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';
import { useState } from 'react';

const TITLE = 'Investment Calculator';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header title={TITLE} />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter duration greater than zero</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
