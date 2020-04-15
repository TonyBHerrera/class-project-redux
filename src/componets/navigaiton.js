import React, { Component } from "react"

class NavBar extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <p>Logo</p>
                </div>

                <div className="center">
                    <button>Nav Button</button>
                    <button>Nav Button</button>
                    <button>Nav Button</button>
                    <button>Nav Button</button>
                </div>

                <div className="right-side">
                    <p>user name</p>

                </div>

            </div>
        )
    }
}

export default NavBar