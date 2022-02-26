import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyButton(props) {
    let navigate = useNavigate();
    function handleClick() {
        navigate('home');
    }
    return(
        <button onClick={handleClick}>submit 1</button>
    )
}