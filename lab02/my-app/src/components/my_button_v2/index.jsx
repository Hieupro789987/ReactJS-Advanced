import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyButtonV2(props) {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/profile/me', {replace: true});

    };
    return(
        <button onClick={handleClick}>submit 2</button>
    )
}