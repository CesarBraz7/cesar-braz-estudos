import { useEffect, useState } from "react"
import instance from "../helper/instance"


const Form = () => {
  const [data, setData] = useState({
    joke: '',
    response: ''
  })
  const [id, setId] = useState(0)

  useEffect(() => {
    const fetchId = async () => {
      try {
        const response = await instance.get('jokes')
        setId(response.data.reduce((max, joke) => Math.max(max, joke.id), 0))
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchId()
  }, [])

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextId = (id + 1).toString()

    const fetch = async () => {
      try {
        await instance.post('jokes', {
          id: nextId,
          ...data
        })
      } catch (error) {
        console.log(error.message);
      } finally {
        location.reload()
      }
    }

    fetch()
    setId(parseInt(nextId))
  }

  return (
    <form className="flex flex-col gap-3 w-1/4" onSubmit={handleSubmit}>
      <h1 className="text-2xl text-center">Adicione uma nova piada!</h1>

      <label className="text-sm font-medium">Nova piada: </label>
      <input onChange={handleChange} className="bg-stone-200 rounded p-2 text-xs focus:outline-none focus:ring focus:ring-stone-300" placeholder="Por que o lagarto deixou seu filho de castigo?" type="text" name="joke" />

      <label className="text-sm font-medium">Resposta: </label>
      <input onChange={handleChange} className="bg-stone-200 rounded p-2 text-xs focus:outline-none focus:ring focus:ring-stone-300" placeholder="Porque ele réptil de ano!" type="text" name="response" />

      <button className="text-stone-800 bg-stone-300 my-5 py-2 rounded hover:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-400 transition-colors" type="submit">Adicionar</button>
    </form>
  )
}

export default Form