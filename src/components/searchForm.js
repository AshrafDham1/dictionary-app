import React from 'react'
import { useEffect, useState } from 'react'

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
        <input type="text" placeholder="Search" onChange={(e)=>{
            setWord(e.target.value)
        }}/>
        <input type="submit" value="Search" />
    </form>
  )
}

export default SearchForm