import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props)

    }



    render() {

        return (
            <div className="profile-wrapper">
                <div className="profile-frame">
                    <div className="profile-pic">
                        <img src={this.props.item.user_image} />
                    </div>
                    <div className="profile-name">
                        <p>{this.props.item.profile_name}</p>
                    </div>
                    <div className="profile-description">
                        <p>{this.props.item.user_description}</p>
                    </div>
                </div>
            </div>
        )
    }
}