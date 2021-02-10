import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="bg-light py-3 container-fluid shadow-sm">
                <div className="container d-flex justify-content-between">
                <Link to="/" className="text-decoration-none text-dark h4">Home</Link>
                <Link to="/add" className="text-decoration-none text-dark h4">+Add Record</Link>
            </div>
            </div>
        )
    }
}
