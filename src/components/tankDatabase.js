import React from 'react';
import Tanks from './tanks';
import axios from 'axios';

class Read extends React.Component {

    state = {
        tanks: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/tanks')
            .then((response) => {
                this.setState({ tanks: response.data.tanks })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Tank Database</h1>
                <Tanks myTanks={this.state.tanks}></Tanks>
            </div>
        );
    }
}

export default Read;