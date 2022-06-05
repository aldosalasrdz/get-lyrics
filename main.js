const formElement = document.querySelector('form')

const artistInput = document.querySelector('#artist')
const songInput = document.querySelector('#song')

const artistElement = document.querySelector('.artist')
const songElement = document.querySelector('.song')
const lyricsElement = document.querySelector('.lyrics')

async function getLyrics (artist, song) {
  const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
  const data = await response.json()
  if (data.lyrics) {
    artistElement.innerText = artist
    songElement.innerText = song
    lyricsElement.innerText = data.lyrics
  } else {
    lyricsElement.innerText = data.error
  }
}

formElement.addEventListener('submit', e => {
  e.preventDefault()

  const artist = artistInput.value
  const song = songInput.value

  getLyrics(artist, song)
})
