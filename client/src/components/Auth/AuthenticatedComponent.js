import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

class AuthenticatedComponent extends Component {
    state = {
        user: undefined
    };

    componentDidMount() {
        const jwt = getJwt();

        if (!jwt) {
            console.log("------No JWT------");
            this.props.history.push('/login');
        }
        console.log("------JWT------");
        console.log({jwt});

        axios.get('/api/getUser', { headers: { Authorization: `Bearer ${jwt}` } })
            .then(res => res.setState({user: res.data}))
            .catch(err => {
                localStorage.removeItem('lockit-jwt');
                this.props.history.push('/login');
            });
    }

    render() {
        if (this.state.user === undefined) {
            return (
                <div><h1>Loading...</h1></div>
            );
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(AuthenticatedComponent);