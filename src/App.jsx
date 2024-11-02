import { useState } from 'react';
import './App.css';
import data from './data/questions';
import Questions from './components/Questions';
import StartScreen from './components/StartScreen';
import ResultScreen from './components/ResultScreen';
import Countdown from './components/Countdown';

function App() {
  const [count, setCount] = useState(0)
  const [finalData, setFinalData] = useState(data);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      {count === 0 && <StartScreen setCount={setCount} />}
      {count > 0 && count <= finalData.length && <Countdown count={count} setCount={setCount} finalData={finalData} setIsDisabled={setIsDisabled} />}
      {count > 0 && count <= finalData.length && <Questions count={count} setCount={setCount} finalData={finalData} setFinalData={setFinalData} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />}
      {count > finalData.length && <ResultScreen finalData={finalData} />}
    </>
  )
}

export default App
