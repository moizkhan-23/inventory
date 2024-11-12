import { useState ,useEffect} from "react"
import { invUsecontext } from "../../context/InvContext"
// addInvetory({id:Date.now(),itemName:inp,price:amount,qut:item,total:result})

export default function BillingItems({inv}){

  const {updateInv,addUpdateDAmount,amttotal}=invUsecontext()
    const [itemNameMess,setItemNaem]=useState(inv.itemName)
    const [priceMess,setPriceMess]=useState(inv.price)
    const [qutMess,setQutMess]=useState(inv.qut)
    const [amountmess,setAmountmess]=useState(inv.total)
    const [isReadOnly,setIsReadOnly]=useState(false)
    // const [saveEditBtn,setSaveEditBtn]=useState(true)
// console.log( typeof amountmess,'amountupdate');


    const editInv = () => {
      // updateTodo(todo.id, {...todo, todo: todoMsg})
      updateInv(inv.id,{id:inv.id,itemName:itemNameMess,price:priceMess,qut:qutMess,total:amountmess})
      setIsReadOnly(false)
      // addTototalAmount(amountmess)
      addUpdateDAmount(amountmess)

      
    }
    useEffect(() => {
      const editmultipliedValue = parseFloat(priceMess) * parseFloat(qutMess);
      setAmountmess(isNaN(editmultipliedValue) ? 0 : editmultipliedValue); // Prevent NaN
  }, [priceMess, qutMess]);
  

//     <input
//     type="text"
//     className={`border outline-none w-full bg-transparent rounded-lg ${
//         isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//     } ${todo.completed ? "line-through" : ""}`}
//     value={todoMsg}
//     onChange={(e) => setTodoMsg(e.target.value)}
//     readOnly={!isTodoEditable}
// />




    return(
        
     
      <>
      <input
  type="text"
  value={itemNameMess}
  readOnly={!isReadOnly}
  onChange={(e) => setItemName(e.target.value)}
  className={`py-2 px-3 outline-none bg-white text-gray-800 rounded-lg transition-all duration-300 
    ${isReadOnly ? 'border border-blue-500 px-4 bg-blue-50 focus:bg-white focus:border-blue-800 ' : 'border-transparent cursor-default'}`}
/>

      
      
       {/* <input type="text" value={itemNameMess}  readOnly={!isReadOnly} onChange={(e)=>setItemNaem(e.target.value)} 
        className={`py-2 px-1 outline-none bg-transparent rounded-lg ${!isReadOnly ? 'border-blue-800 px-2':'border-transparent'}`}/> */}
      <input type="number" value={priceMess} readOnly={!isReadOnly} onChange={(e)=>setPriceMess(e.target.value)} 
      className={`py-2 px-3 outline-none bg-white text-gray-800 rounded-lg transition-all duration-300 
        ${isReadOnly ? 'border border-blue-500 px-4 bg-blue-50 focus:bg-white focus:border-blue-800 ' : 'border-transparent cursor-default'}`}
      
      />
      <input type="number" value={qutMess} readOnly={!isReadOnly} onChange={(e)=>setQutMess(e.target.value)}  
      className={`py-2 px-3 outline-none bg-white text-gray-800 rounded-lg transition-all duration-300 
        ${isReadOnly ? 'border border-blue-500 px-4 bg-blue-50 focus:bg-white focus:border-blue-800 ' : 'border-transparent cursor-default'}`}
      
      
      />
      <input type="text" value={amountmess} readOnly={!isReadOnly} onChange={()=>{}} 
      className={`py-2 px-3 outline-none bg-white text-gray-800 rounded-lg transition-all duration-300 
        ${isReadOnly ? 'border border-blue-500 px-4 bg-blue-50 focus:bg-white focus:border-blue-800 ' : 'border-transparent cursor-default'}`}
      
      
      />
    

<button className="bg-indigo-500 py-2 px-3 mx-4 rounded"
onClick={() => {
  

  if (isReadOnly) {
    editInv();
  } else setIsReadOnly((prev) => !prev);
}}





> {isReadOnly ? 'Save' : 'Edit'}</button>
<button className="bg-indigo-500 py-2 px-3 rounded">Delete</button>
      
    

      
      </>







        
   )
}