import React from 'react';
import TankList from './tankList';

class Tanks extends React.Component {

    render() {
        return this.props.myTanks.map((tanks) => {
            return <TankList key={tanks._id} tanks={tanks} ReloadDataMethod={this.props.ReloadDataMethod}></TankList>
        });
    }
}

export default Tanks;