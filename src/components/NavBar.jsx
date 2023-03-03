import { NavLink } from "react-router-dom"

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to={`/`}><i className="bi bi-globe"></i>Accueil eFlashcard</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={`/addflashcard`}><i className="bi bi-plus-circle"></i> Ajouter une flashcard</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={`/randomflashcard`}><i className="bi bi-shuffle"></i> Flashcard au hasard</NavLink>
            </li>
            </ul>
            <form className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder=" n° flashcard" aria-label="Search" />
            <button className="btn btn-success " type="submit">GO</button>
            </form>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            </nav>
)
}



export default NavBar