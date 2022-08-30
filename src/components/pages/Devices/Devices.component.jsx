import "./Devices.css"
import { DevicesContext } from "../../context/DevicesProvider.component";
import DeviceCard from "../../featurs/DeviceCard.component";
import { useContext } from "react";

export default function Devices(){
    const {device,setDevice} = useContext(DevicesContext);
  
    return(
        <div>
            <h1 className="container-fluid">Devices</h1>
            {device?.map(deviceItem => (
                <DeviceCard device={deviceItem}/>
            ))}
        </div>
    )
}
