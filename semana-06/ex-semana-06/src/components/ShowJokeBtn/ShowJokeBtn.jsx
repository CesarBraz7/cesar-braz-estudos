import './ShowJokeBtn.css'

function ShowJokeBtn({onClick, text}) {

    return (
        <button onClick={onClick} id='show'>
            {text}
        </button>
    )
}

export default ShowJokeBtn