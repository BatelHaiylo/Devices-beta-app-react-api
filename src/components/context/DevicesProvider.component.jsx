import { createContext, useEffect, useState } from "react";
import { GetDevices } from "../../services/Devices.services";

export const DevicesContext = createContext()

export default function DevicesProvider({children}){
    const [device, setDevice] = useState([])

    useEffect(()=> {GetDevices().then(res => setDevice(res))},[])
    
    return(
        <DevicesContext.Provider value={{device,setDevice}}>
            {children}
        </DevicesContext.Provider>
    )
}