import React, { Component } from "react"
import axios from "axios"
import Profile from "./profile"



export default class ProfileContainer extends Component {
    constructor() {
        super()

        this.state = {
            data: []
        }
    }

    getProfiles() {
        axios
            .get(
                "https://tbh-class-project-two.herokuapp.com/profiles"
            )
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch((err) => {
                console.log("UwU looks like nothings here ~murr~", err)
            })
    }

    profileItems() {
        return this.state.data.map(item => {
            return <Profile
                item={item}
            />
        })
    }
    componentDidMount() {
        this.getProfiles()
    }

    render() {
        return (
            <div className="profiles-wrapper">
                <div className="item-wrapper">
                    {this.profileItems()}
                </div>

            </div>
        )
    }

}