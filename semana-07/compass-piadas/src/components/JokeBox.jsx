import { useState, useEffect } from "react"
import instance from "../helper/instance"
import img from "../assets/spinner.gif"

const JokeBox = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)

      try {
        const response = await instance.get('jokes')
        setData(response.data)
      } catch (err) {
        setError(err.message)
        return error
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [])

  const handleShow = (id) => {
    setData((data) =>
      data.map((joke) =>
        joke.id === id ? { ...joke, blur: !joke.blur } : joke
      )
    )
  }

  const handleDelete = async (id) => {
    try {
      await instance.delete('jokes/' + id)
      location.reload()
    } catch (err) {
      setError(err.message)
      console.log(error)
    }
  }

  return (
    <div className="w-full flex justify-center items-center flex-col-reverse">
      {loading && <img className="mt-20" alt="loading..." src={img} />}
      {data.map(i => (
        <div className='w-2/5 flex flex-col items-center bg-stone-200 rounded-md py-10 mb-4' key={i.id}>
          <section className='text-center w-4/5'>
            <p>{i.joke}</p>
            <p className={`select-none mt-3 ${i.blur ? "" : "blur"}`}>{i.response}</p>
          </section>
          <section className='flex justify-evenly w-full mt-7'>
            <button className='bg-stone-300 rounded py-2 w-1/3' onClick={() => handleShow(i.id)}>{i.blur ? "Esconder resposta" : "Mostrar resposta"}</button>
            <button className='bg-stone-900 text-white rounded py-2 w-1/3' onClick={() => handleDelete(i.id)}>Deletar piada</button>
          </section>
        </div>
      ))}
    </div>
  )
}

export default JokeBox