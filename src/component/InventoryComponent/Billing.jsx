
import { useState, useEffect } from "react";
import { invUsecontext } from "../../context/InvContext";
export default function Billing() {
    const { addInvetory,total, setTotal}=invUsecontext()
    const [inp, setInp] = useState("");
    const [price, setPrice] = useState(0);
    const [item, setItem] = useState(0);
    const [result, setResult] = useState(0);
    
    
    
    
    
    






    
    useEffect(() => {
        const multipliedValue = parseFloat(price) * parseFloat(item);
        setResult(isNaN(multipliedValue) ? 0 : multipliedValue); 
    }, [price, item]);

    

    function handleSubmit() {
 setTotal(prevTotal => prevTotal  + result );
        addInvetory({id:Date.now(),itemName:inp,price:price,qut:item,total:result})
        setInp('');
        setPrice(0);
        setItem(0);
        setResult(0);
    }


    return (
        <>
        <div className="flex ">
            <div className="border my-20 h-48  w-[75%]">
                <h1 className="text-3xl font-bold font-mono text-gray-700 w-max mx-5 p-2 text-center">
                    Add Products
                </h1>
                <div className="space-x-3 flex justify-center items-center my-10">
                    {/* Item Input */}
                    <div className="mb-7">
                        <label htmlFor="item" className="block text-lg font-medium text-gray-700">
                            Item Name
                        </label>
                        <input
                            type="text"
                            value={inp}
                            placeholder="Item Name"
                            onChange={(e) => setInp(e.target.value)}
                            className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
                        />
                    </div>
                    
                    {/* Price Input */}
                    <div className="mb-7">
                        <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            min="1"
                            
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)}
                            className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
                        />
                    </div>

                    {/* Quantity Input */}
                    <div className="mb-7">
                        <label htmlFor="quantity" className="block text-lg font-medium text-gray-700">
                            Qty
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
                        />
                    </div>

                    {/* Current Amount */}
                    <div className="mb-7">
                        <label htmlFor="amount" className="block text-lg font-medium text-gray-700">
                            Amount
                        </label>
                        <input
                            type="text"
                            value={result}
                            readOnly
                            className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="py-2 px-6 rounded-lg bg-indigo-500 text-white font-mono text-lg focus:outline-none focus:ring-indigo-500 focus:ring-2"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="border w-[25%] my-20 space-y-6">
            {/* Display Total */}
            <p className="text-2xl  font-semibold text-gray-700">Total: {total}</p>
            <button
                        className="py-2 px-8 rounded-lg bg-indigo-500 text-white font-mono text-lg focus:outline-none focus:ring-indigo-500 focus:ring-2"
                        
                    >
                        Complete
                    </button>
            </div>

            </div>

        </>
    );
}



// import { useState } from "react";

// export default function Billing() {
//     const [inp, setInp] = useState('');
//     const [amount, setAmount] = useState(0);
//     const [item, setItem] = useState(0);
//     const [result, setResult] = useState(0);
//     const [total, setTotal] = useState(0);

//     function handleSubmit() {
//         const multipliedValue = parseFloat(amount) * parseFloat(item);
//         setResult(multipliedValue);
//         setTotal(prevTotal => prevTotal + multipliedValue); // Accumulate total

//         // Reset input fields after calculation
//         setInp('');
//         setAmount(0);
//         setItem(0);
//     }

//     return (
//         <>
//             <div className="border my-20 h-48">
//                 <h1 className="text-3xl font-bold font-mono text-gray-700 w-max mx-52 p-2 text-center">
//                     Add Products
//                 </h1>
//                 <div className="space-x-3 flex justify-center items-center my-10">
//                     {/* Item Input */}
//                     <div className="mb-7">
//                         <label htmlFor="item" className="block text-lg font-medium text-gray-700">
//                             Item Name
//                         </label>
//                         <input
//                             type="text"
//                             value={inp}
//                             placeholder="Item Name"
//                             onChange={(e) => setInp(e.target.value)}
//                             className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
//                         />
//                     </div>
                    
//                     {/* Price Input */}
//                     <div className="mb-7">
//                         <label htmlFor="price" className="block text-lg font-medium text-gray-700">
//                             Price
//                         </label>
//                         <input
//                             type="number"
//                             min="1"
//                             value={amount}
//                             onChange={(e) => setAmount(e.target.value)}
//                             className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
//                         />
//                     </div>

//                     {/* Quantity Input */}
//                     <div className="mb-7">
//                         <label htmlFor="quantity" className="block text-lg font-medium text-gray-700">
//                             Qty
//                         </label>
//                         <input
//                             type="number"
//                             min="1"
//                             value={item}
//                             onChange={(e) => setItem(e.target.value)}
//                             className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
//                         />
//                     </div>

//                     {/* Current Amount */}
//                     <div className="mb-7">
//                         <label htmlFor="amount" className="block text-lg font-medium text-gray-700">
//                             Amount
//                         </label>
//                         <input
//                             type="text"
//                             value={result}
//                             readOnly
//                             className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
//                         />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         className="py-2 px-6 rounded-lg bg-indigo-500 text-white font-mono text-lg focus:outline-none focus:ring-indigo-500 focus:ring-2"
//                         onClick={handleSubmit}
//                     >
//                         Add
//                     </button>
//                 </div>
//             </div>

//             {/* Display Total */}
//             <p className="text-2xl text-center font-semibold text-gray-700">Total: {total}</p>
//         </>
//     );
// }































// import { useState, useEffect} from "react"


// export default function Billing(){
//     const [inp,setInp]=useState('')
//     const[amount,setAmount]=useState(0)
//     const[item,setItem]=useState(0)
//     const [result,setResult]=useState('')
//     const[total,setTotal]=useState("")
// function handleSubmit(){
//     const multipliedValue= parseFloat(amount) * parseFloat(item)
//     setResult(multipliedValue)
//     setTotal(result)
//     setResult('')
    
    
    
//         setAmount(0)
//         setItem(0)
        
        
    
    
//     }


    
//     // useEffect(() => {
//     //     console.log(result);
//     //   }, [result]);
    



//     return(
//         <>
//         <div className="border my-20 h-48">
//         <h1 className="text-3xl font-bold font-mono text-gray-700 w-max  mx-52 p-2  text-center ">
//   Add Products
// </h1>
// <div className="space-x-3 flex justify-center items-center my-10"> 
//     {/* first Input................... */}
// <div className="mb-7">
// <label htmlFor="item" className="block text-lg font-medium text-gray-700">
//   Item Name
// </label>
//  <input type="text"  value={inp} placeholder="itme-Name" onChange={(e)=>setInp(e.target.value) }
//  className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
 
 
//  />
//  </div>
// {/* second input........................................ */}
// <div className="mb-7">
// <label htmlFor="item" className="block text-lg font-medium text-gray-700">
//   Price
// </label>

//         <input type="number" min='1' value={amount} onChange={(e)=>setAmount(e.target.value)} 
//         className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
        
//         />
// </div>

// {/* third input........................................ */}

// <div className="mb-7">
// <label htmlFor="item" className="block text-lg font-medium  text-gray-700">
//   Qty
// </label>

// <input type="number" min='1' value={item} onChange={(e)=>setItem(e.target.value)}
//         className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
        
//         />

// </div>


//          <div className="mb-7">
//          <label htmlFor="item" className="block text-lg font-medium text-gray-700">
//   Amount
// </label>
//          <input type="text" value={result} onChange={(e)=>{}} placeholder="Enter Total"
//         className="px-4 py-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-full max-w-xs placeholder-gray-400"
//         />

//          </div>

        
//         <button className="py-2 px-6 rounded-lg bg-indigo-500 text-white font-mono text-lg focus:outline-none focus:ring-indigo-500 focus:ring-2" onClick={handleSubmit}>Add</button>

//         </div>


//         </div>
// <p>{total}</p>

//         </>
//     )
// }