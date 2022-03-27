import React from 'react'

export default class NavBar extends React.Component {
    render() {
        return (

        <div className='row'>
        <div className='col-sm'>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="index.html">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="index.html">New house Planner</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="index.html">Homes in your Area</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="index.html">Cost Estimates</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="index.html">Home of the Month</a>
            </li>
        </ul>
    </div>
    </nav>
    </div>
    </div>
    )
    }
}