import React from 'react';
import { useNavigate } from 'react-router-dom'

function NoMatch(props) {

    const navigate = useNavigate()

    let counter = 0

    function clickHandler() {
        counter++
        if (counter>2) {
            navigate("/")
        }
    }

    return (
        <div>
            404<br />
            <button onClick={clickHandler}>Home</button>
            <button onClick={() => {navigate(-1)}}>back</button>
        </div>
    );
}

export default NoMatch;