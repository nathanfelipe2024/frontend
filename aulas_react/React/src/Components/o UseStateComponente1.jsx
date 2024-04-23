import { useState } from "react";

export default function useStateComponente1() {
                    const [value1, setValue1] = useState(1);
                    const [value2, setValue2] = useState(1);

                    const increasevalue1 = () => setValue1(value1 + 1);
                    const decreasevalue1 = () => setValue1(value1 - 1);

                    const increasevalue2 = () => setValue1(value2 + 1);
                    const decreasevalue2 = () => setValue1(value2 - 1);
                    
    return (
        <>
            <hr />
            <p>Exercíio 1: useState</p>
            <p>{value1}</p>
            <button onClick={decreaseValue1}>-</button>
            <button onClick={increasevalue1}>+</button>
            <hr />
            <p>{value2}</p>
            <button onClick={decreasevalue2}>-</button>
            <button onClick={increasevalue2}>+</button>
            <p>Resultado: {value1} * {value2} = {value1 * value2}</p>
         </>    
    )
}