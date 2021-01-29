import React, { Component } from 'react';

class Header extends Component {
    render() {
        return ( 
            <nav style = {{  background: "linear-gradient(to right,rgba(7, 27, 82, 1) 0% , rgba(0, 128, 128, 1) 100%) " , height:'100px'}} className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">
                            mainboard api
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
