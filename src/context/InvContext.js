import { createContext, useContext } from "react";


export const InvCreateContext= createContext({})





export const invUsecontext=()=>{
return useContext(InvCreateContext)


}

export const InventoryProvider=InvCreateContext.Provider