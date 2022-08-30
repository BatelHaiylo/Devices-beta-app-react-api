import { Link } from "react-router-dom";

export default function Header(){


    return(
      <nav className="navbar bg-info container-fluid">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DEVICES APP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="Home"><p className="nav-link">Home</p></Link>
              <Link to="Devices"><p className="nav-link">Devices</p></Link>
            </div>
          </div>
        </div>
      </nav>
    )
}





 