import React, {useState} from "react";


const Count = (props) => {

    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count of Click: <b>{count}</b></p>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    )
}
export default Count