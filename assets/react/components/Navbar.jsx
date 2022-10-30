import React from "react";
import {Link} from "react-router-dom";

const Navbar=() => {

    return (
        <>
            <nav className="navbar">
                <div className="home-buttons">
                    <Link to="/" className="title-button">
                        Home
                    </Link>
                </div>
                <div className="buttons">
                    <ul className="navbar-list">
                        <Link to="/list" className="title-button">Liste des astronautes</Link>
                        <Link to="/new" className="title-button">Nouvel astronaute</Link>
                    </ul>
                </div>
            </nav>
        </>
    )

}

export default Navbar;