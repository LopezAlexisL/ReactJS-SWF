import React, { useState } from "react";

function Counter ({ stock = 0, initial = 1, onAdd, prod }) {
    const [count, setCount] = useState(0)
    
    const reduce = (e) => {
        count > 0 ? setCount(count - 1) : e.preventDefault()
    }

    const increase = (e) => {
        count < stock ? setCount(count + 1) : e.preventDefault()
    }

    const reset = () => {
        setCount(initial)
    }

    return(
        <div>
            <div>
                <button onClick={reduce}>-</button>
                <p> You've added {count} products to the cart </p>
                <button onClick={increase}>+</button>
                <button onClick={()=> onAdd(prod, count)}>Add to Cart</button>
                <button onClick={reset}>Reset</button>

            </div>
            <div>
            </div>
        </div>
    );
}

export default Counter