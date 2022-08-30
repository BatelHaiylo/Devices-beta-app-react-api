import {Home,Devices, PageNotFound} from "./components/index"
import {Routes,Route} from 'react-router-dom'
import DevicesProvider from "./components/context/DevicesProvider.component"

export default function Router(){
    return(
        <Routes>
            <Route path='Home' element={<Home/>}/>
            <Route path='Devices' element={
                <DevicesProvider>
                <Devices/>
                </DevicesProvider>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}