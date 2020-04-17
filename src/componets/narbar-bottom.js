import React, { Component } from "react"

class NavBarBottom extends Component {
    render() {
        return (
            <div className="nav-wrapper-bottom">
                {/* <div className="left-side-bottom">
                    <p>Logo</p>
                </div> */}

                <div className="center-bottom">
                    <button>Nav Button</button>
                    <button>Nav Button</button>
                    <button>Nav Button</button>
                    <button>Nav Button</button>
                </div>

                {/* <div className="right-side-bottom">
                    <p>user name</p> */}

                {/* </div> */}

                <div class="copyright-wrapper">
                    &copy; 2020 FUZZYUwU &#124; OC pws no steal
                </div>

            </div>
        )
    }
}

export default NavBarBottom