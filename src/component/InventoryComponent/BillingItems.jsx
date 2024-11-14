import { useState ,useEffect} from "react"
import { invUsecontext } from "../../context/InvContext"
// addInvetory({id:Date.now(),itemName:inp,price:amount,qut:item,total:result})

export default function BillingItems({inv}){

  const {updateInv,updatTotal,total,deleteInv}=invUsecontext()
    const [itemNameMess,setItemNaem]=useState(inv.itemName)
    const [priceMess,setPriceMess]=useState(inv.price)
    const [qutMess,setQutMess]=useState(inv.qut)
    const [amountmess,setAmountmess]=useState(inv.total)
    const [isReadOnly,setIsReadOnly]=useState(false)
  


    


    const editInv = () => {
      // updateTodo(todo.id, {...todo, todo: todoMsg})
      updateInv(inv.id,{id:inv.id,itemName:itemNameMess,price:priceMess,qut:qutMess,total:amountmess})
      
      setIsReadOnly(false)
    
    
      

      
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




return (
  <div className="border border-blue-700 w-[70%] mx-10 flex justify-between items-center" >
    <div className="allinput space-x-3">
      
              <input
                type="text"
                value={itemNameMess}
                readOnly={!isReadOnly}
                onChange={(e) => setItemNaem(e.target.value)}
                className={` py-2 px-3 rounded-md outline-none transition-all duration-300 text-gray-800 
                  ${isReadOnly ? 'border border-blue-500 bg-blue-50 focus:bg-white focus:border-blue-800' : 'border-transparent cursor-default'}`}
              />
            
    
          
            
              <input
                type="number"
                value={priceMess}
                readOnly={!isReadOnly}
                onChange={(e) => setPriceMess(e.target.value)}
                className={` py-2 px-3 rounded-md outline-none transition-all duration-300 text-gray-800 
                  ${isReadOnly ? 'border border-blue-500 bg-blue-50 focus:bg-white focus:border-blue-800' : 'border-transparent cursor-default'}`}
              />
          
              <input
                type="number"
                value={qutMess}
                readOnly={!isReadOnly}
                onChange={(e) => setQutMess(e.target.value)}
                className={` py-2 px-3 rounded-md outline-none transition-all duration-300 text-gray-800 
                  ${isReadOnly ? 'border border-blue-500 bg-blue-50 focus:bg-white focus:border-blue-800' : 'border-transparent cursor-default'}`}
              />
            
              <input
                type="text"
                value={amountmess}
                readOnly={!isReadOnly}
                onChange={() => {}}
                className={` py-2 px-3 rounded-md outline-none transition-all duration-300 text-gray-800 
                  ${isReadOnly ? 'border border-blue-500 bg-blue-50 focus:bg-white focus:border-blue-800' : 'border-transparent cursor-default'}`}
              />
        </div>

    <div className="border border-yellow-500 space-x-3 flex items-center">
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white  font-semibold py-2 px-4 rounded transition-colors duration-300"
          onClick={() => {
            if (isReadOnly) {
              updatTotal(total - inv.total + amountmess);
              editInv();
            } else {
              setIsReadOnly((prev) => !prev);
            }
          }}
        >
          {isReadOnly ? 'Save' : 'Edit'}
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
          onClick={() => deleteInv(inv.id)}
        >
          Remove
        </button>
        </div>
      </div>
    
);

}