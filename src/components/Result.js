import React from 'react'
import audio from "../assets/sound-icon.png"

function Result({word , meanings}) {
  function handleClick() {
    const audio = new Audio(`https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`)
    audio.play()
  }
  return (
    <div>
      <h1>{word}<img src={audio} onClick={handleClick}></img></h1>
      <p>Parts of speech:</p>
      <p>{meanings[0].partOfSpeech}</p>
      <p>Definition:</p>
      <p>{meanings[0].definitions[0].definition}</p>
      {meanings[0].definitions[0].example && (<><p>Example:</p><p>{meanings[0].definitions[0].example}</p></>)}
    </div>
  )
}

export default Result