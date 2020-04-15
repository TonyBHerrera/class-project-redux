import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div className="profile-wrapper">
                <div className="profile-frame">
                    <div className="profile-pic">
                        <p>img</p>
                    </div>
                    <div className="profile-name">
                        <p>name</p>
                    </div>
                    <div className="profile-description">
                        <p>description</p>
                    </div>
                </div>
            </div>
        )
    }
}