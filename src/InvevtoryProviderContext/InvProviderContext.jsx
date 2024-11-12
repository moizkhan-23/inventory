
import { useState } from "react"
import { InventoryProvider } from "../context/InvContext"
import Billing from "../component/InventoryComponent/Billing"
import BillingItems from "../component/InventoryComponent/BillingItems"
BillingItems
const InventoryProviders=()=>{

    const [invItem,setInvItem]=useState([])
    const [amttotal,setamttotal]=useState('')
    const [updatTotal,setUpdatTotal]=useState('')
console.log(invItem);
console.log( typeof updatTotal,'amount total');



     function addInvetory(inv){
        
    setInvItem((pre)=>[inv,...pre]);
        }
        const updateInv = (id, updateInv) => {
            setInvItem((prev) => prev.map((prevTodo) => (prevTodo.id === id ? updateInv : prevTodo )))
        
            
          }
          function gettotalamount(amt){
            setamttotal(amt)
            

          }
          function addUpdateDAmount(amtt){
            setUpdatTotal(amtt)
            
          }

    return(
        <InventoryProvider value={{ invItem,setInvItem,addInvetory ,updateInv,gettotalamount,amttotal,setamttotal,addUpdateDAmount,updatTotal}}>
        <Billing></Billing>
       
       
            

        {invItem.map((inv)=>(
                <div key={inv.id}>

                    <BillingItems inv={inv}></BillingItems>

                </div>
            ))}

        
        
        </InventoryProvider>
    )



}
export default InventoryProviders

