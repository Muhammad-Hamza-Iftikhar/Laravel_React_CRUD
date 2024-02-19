import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.getUserList(); // Corrected function name
    }

    getUserList = () => {
        axios.get('/user/')
            .then(response => {
                this.setState({
                    users: response.data.user,
                });
                console.log(response.data.user);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    render() {
        return (
            <div className="container content-center">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">User Data</div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.users?.map((user, index) => (
                                        <tr key={index}>
                                            <th>{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>@mdo</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
