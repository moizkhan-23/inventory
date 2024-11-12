import { useState } from "react";


export default function Staff(){




    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const obj={
        
        name:input1,
        surname:input2,
        nickname:input3
    }
    console.log(obj);
    
  
    return (
      <div>
        <input
          type="text"
          placeholder="Input 1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Input 2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Input 3"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <div>
          <p>Input 1: {input1}</p>
          <p>Input 2: {input2}</p>
          <p>Input 3: {input3}</p>
        </div>
      </div>
    )  
}