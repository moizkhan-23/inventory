 

 export default function Header(){






    return(
        <>
        <header>
            <div className="    py-0 w-[80%] m-auto flex justify-between items-center">
                {/* LOGO START........... ................................................ */}
            <div>
                {/* <h1 className="font-bold text-3xl text-white  bg-indigo-600 p-2">INVENTORY</h1> */}
                <img src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-ecommerce-retail-company_1287271-11486.jpg?w=740" alt="" className="h-[80px] border-white rounded-full" />
            </div>
            {/* LOGO END..................................................................... */}

            <ul className="flex space-x-14 text-xl font-mono text-white  ">
                <li className="bg-indigo-600 p-2 rounded-full cursor-pointer">Billing</li>
                <li className="bg-indigo-600 p-2 rounded-full cursor-pointer">Inventory</li>
                <li className="bg-indigo-600 p-2 rounded-full cursor-pointer">Staff</li>
            </ul>

            </div>

        </header>
    
    
        
        </>
    )
 }