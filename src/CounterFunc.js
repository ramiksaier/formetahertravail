import React, { useState, useEffect } from 'react'

function CounterFunc() {
    const [count, setCount] = useState(0)

    const Decrement = () => {
        setCount(count - 1)
    }
    // useEffect(() => {
    // let interval=setInterval(() => {
    //     setCount(count+1)
    // }, 1000);
    //     return () => {
    //         clearInterval(interval)
    //     };
    // }, [count]);

    useEffect(() => {
        console.log("Component did mount")
        return () => {
            console.log("Component will unmout")
        };
    }, []);



    return (
        <div>
            <button onClick={() => Decrement()}>-</button>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default CounterFunc
