import './App.css'
import Footer from './components/featurs/Footer/Footer.component'
import Header from './components/featurs/Header/Header.components'
import Router from './Router'
import {BrowserRouter} from "react-router-dom"

export default function App() {

  return (
    <div className="App container-fluid">
      <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}