import logo from './logo.svg';
import './App.css';
import SearchForm from './components/searchForm';
import Result from './components/Result';
import { useState } from 'react';
import Error from './components/Error'

function App() {
  const [wordInfo, setWordInfo] = useState(null)
  return (
    <>
    <SearchForm setWordInfo={setWordInfo}/>
    {/* {wordInfo && (<Result wordInfo={wordInfo}/>)} */}
    {!wordInfo ? "" : wordInfo.title ? (<Error/>) :(<Result meanings={wordInfo[0].meanings} word={wordInfo[0].word}/>) }
    </>
  );
}

export default App;
