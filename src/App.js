import './App.css';
import SearchForm from './components/searchForm';
import Result from './components/Result';
import { useState } from 'react';
import Error from './components/Error'

function App() {
  const [wordInfo, setWordInfo] = useState(null)
  return (
    <>
    <div className='container'>
    <SearchForm setWordInfo={setWordInfo}/>
    {!wordInfo ? "" : wordInfo.title ? (<Error/>) :(<Result meanings={wordInfo[0].meanings} word={wordInfo[0].word}/>) }
    </div>
   
    </>
  );
}

export default App;
