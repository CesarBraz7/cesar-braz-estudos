import './DeleteJokeBtn.css'

function DeleteJokeBtn({onClick}) {
  return (
    <button onClick={onClick} id='delete'>
        Deletar piada
    </button>
  )
}

export default DeleteJokeBtn