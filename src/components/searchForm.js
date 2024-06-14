import React from 'react'
import {  useState } from 'react'

function SearchForm(props) {
  const [word, setWord] = useState('')
  
  function fetchWord(e) {
    e.preventDefault()
     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
     .then(response => response.json())
     .then(data => {console.log(data); props.setWordInfo(data)})
  }
  return (
    <form onSubmit={fetchWord}>
         <div class="search">

        <input type="text" placeholder="Search a word" className="searchTerm"  onChange={(e)=>{
            setWord(e.target.value)
        }}/>
        <input type="submit" value="Search" className="searchButton"/>
        </div>
    </form>
  )
}

export default SearchForm