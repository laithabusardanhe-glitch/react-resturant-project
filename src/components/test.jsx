import { useState } from "react";

function Test(){
    const [number , setNumber] = useState(0)
    const handleAdd =() => {
        setNumber((c) => c+1 )
    }
    const handleMinus =() => {
        setNumber((c) => c-1 )
    }
     const handleAdd10 =() => {
        setNumber((c) => c+10 )
    }
     const handleMinus10 =() => {
        setNumber((c) => c-10 )
    }
     const handleAdd100 =() => {
        setNumber((c) => c+100 )
    }
    const handleResat =() => {
        setNumber(0 )
    }
return(
<>
<p> your number {number}</p>
<button onClick={handleAdd }>+</button>
<button onClick={handleMinus }>-</button>
<button onClick={ handleAdd10}>+10</button>
<button onClick={handleMinus10}>-10</button>
<button onClick={handleAdd100}>+100</button>
<button onClick={handleResat}>reset</button>

</>

);

}
export default Test; 