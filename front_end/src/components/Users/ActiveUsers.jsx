import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { backend } from "../../webConfig";
import { Sidebar } from "../Util/Layout";
import userImage from "../Util/userImage.jpeg";

class ActiveUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        axios
            .get(backend + "/api/users/allActiveUsers", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.data) {
                    this.setState({ users: response.data.payload })
                }
            });
    }

    render() {
        let users = this.state.users.map(
            user => {
                return (
                    <div class="col-sm-4 o">
                        <div class="card2">
                            <div class="wrapper">
                                <img
                                    src={userImage}
                                    class="image--cover2"
                                ></img>
                            </div>
                            <h2>Name: {user.first_name} {user.last_name} </h2>
                            <br />
                            <h2>Role: {user.role} </h2>
                        </div>
                    </div>
                );
            }
        );
        return (
            <div>
                <Sidebar>
                    <br />
                    <h2 style={{ marginLeft: "10%", fontSize: "20px" }}> Active Users</h2>
                    <div className="row" style={{ overflow: "auto" }}>
                        {users}
                    </div>
                </Sidebar>
            </div >
        );
    }
}

export default ActiveUsers;
