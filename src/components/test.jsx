import { useState } from "react";
import App from "../App";
function Test(){
const [number , setNumber] = useState(0);
const handleAdd = () => {
    setNumber((c)=> c+1);
}
const handleMinus = () => {
    setNumber((c)=> c-1);
}
const handleSetadd10 = () => {
    setNumber((c)=> c+10);
}
const handleSetminus10 = () => {
    setNumber((c)=> c-10);
}
const handleSet100 = () => {
    setNumber(100);
}
const handleReset = () => {
    setNumber(0);
}
return( <>
<p>your number {number}</p>
<button onClick={handleAdd
}> +
</button>

<button onClick={handleMinus
}>
    -
</button>
<button onClick={handleSetadd10
}>
    +10
</button>
<button onClick={handleSetminus10
}>
    -10
</button>

<button onClick={handleSet100
}>
    Set100
</button>

<button onClick={handleReset
}>
    Reset
</button>
</>);

}
export default Test;