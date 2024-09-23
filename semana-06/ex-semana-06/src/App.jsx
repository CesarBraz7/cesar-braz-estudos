import { useEffect, useState } from 'react'
import Data from './data/data.json'
import './App.css'
import JokeBox from './components/JokeBox/JokeBox'

function App() {

  const [data, setData] = useState([])
  const [newJoke, setNewJoke] = useState('')
  const [newResponse, setNewResponse] = useState('')

  useEffect(() => {
    setData([...Data])
  }, [])

  const addJoke = (event) => {
    event.preventDefault()
    if (!newJoke || !newResponse) {
      alert('por favor, preencha todos os campos.')
      return
    }

    if (data.length == 10) {
      alert('lista de piadas está cheia, por favor, remova uma')
      return
    }

    const joke = {
      id: data.at(-1).id + 1,
      joke: newJoke,
      response: newResponse
    }

    const newData = [...data, joke]
    setData(newData)
    setNewJoke('')
    setNewResponse('')
  }

  const removeJoke = (index) => {
    setData(data.filter((joke) => joke.id !== index))
  }

  return (
    <>
      <div id="app">
        <header>
          <h1>Compass Piadas</h1>
        </header>

        <div>
          <form onSubmit={addJoke}>
            <input type="text" value={newJoke} onChange={(e) => setNewJoke(e.target.value)} />
            <input type="text" value={newResponse} onChange={(e) => setNewResponse(e.target.value)} />
            <button type='submit'>Adicionar nova piada</button>
          </form>
        </div>

        <div id="joke-field">
          {data.map(i => (
            <JokeBox
              key={i.id}
              joke={i.joke}
              response={i.response}
              removeJoke={() => removeJoke(i.id)}
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default App
