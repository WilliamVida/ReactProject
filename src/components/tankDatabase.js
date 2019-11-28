import React from 'react';
import Tanks from './tanks';
import axios from 'axios';

class TankDatabase extends React.Component {

    constructor() {
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }

    state = {
        tanks: []
    };

    ReloadDataMethod() {
        axios.get('http://localhost:4000/api/tanks')
            .then((response) => {
                this.setState({ tanks: response.data.tanks })
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
                <Tanks myTanks={this.state.tanks} ReloadDataMethod={this.ReloadDataMethod}></Tanks>
            </div>
        );
    }
}

export default TankDatabase;