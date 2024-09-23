import ShowJokeBtn from '../ShowJokeBtn/ShowJokeBtn.jsx'
import DeleteJokeBtn from '../DeleteJokeBtn/DeleteJokeBtn.jsx'
import { useState } from 'react'
import './JokeBox.css'

function JokeBox(props) {

    const [showJoke, setShowJoke] = useState(false);

    let text = "Mostrar resposta"

    if(showJoke){
        text = "Esconder resposta"
    }

    const handleJoke = () => {
        setShowJoke(!showJoke);
    }

    return (
        <>
            <div id='body'>
                <section>
                    <h4>{props.joke}</h4>
                    <p>{showJoke && props.response}</p>
                </section>
                <div id="btn-field">
                    <ShowJokeBtn onClick={handleJoke} text={text}/>
                    <DeleteJokeBtn onClick={props.removeJoke}/>
                </div>
            </div>
        </>
    )
}

export default JokeBox