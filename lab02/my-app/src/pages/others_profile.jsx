import React from "react";
import { useParams } from "react-router-dom";

export function OtherProfile(props) {
    let param = useParams();
    return(
        <h1>This is profile of user's id {param.id}</h1>
    )
}