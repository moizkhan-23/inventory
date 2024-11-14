
import { useState } from "react"
import { InventoryProvider } from "../context/InvContext"
import Billing from "../component/InventoryComponent/Billing"
import BillingItems from "../component/InventoryComponent/BillingItems"
BillingItems
const InventoryProviders=()=>{

    const [invItem,setInvItem]=useState([])
    
    
    
    const [total, setTotal] = useState(0)
    // console.log(total);
    
    

    
    
    
    



     function addInvetory(inv){
        
    setInvItem((pre)=>[inv,...pre]);
        }
        const updateInv = (id, updateInv) => {
            setInvItem((prev) => prev.map((prevTodo) => (prevTodo.id === id ? updateInv : prevTodo )))
        
            
          }
         
        //   const deleteTodo = (id) => {
        //     setTodos((prev) => prev.filter((todo) => todo.id !== id))
        //   }
    

          function updatTotal(updateTotalAmt){
            setTotal(updateTotalAmt)
          }
          const deleteInv = (id) => {
            setInvItem((prev) => prev.filter((item) => item.id !== id));
            const deletedItem = invItem.find((item) => item.id === id);
            if (deletedItem) {
              setTotal((prevTotal) => prevTotal - deletedItem.total);
            }
          };
        
          
          
    return(
        <InventoryProvider value={{ invItem,setInvItem,addInvetory ,updateInv,total, setTotal,
            updatTotal,deleteInv
            
        }}>

        <Billing></Billing>

            
            
        {invItem.map((inv) => (
          <div key={inv.id}>
            <BillingItems inv={inv} />
          </div>
))}
        </InventoryProvider>
    )



}
export default InventoryProviders

