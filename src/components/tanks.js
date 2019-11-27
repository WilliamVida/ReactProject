import React from 'react';
import TankList from './tankList';

class Tanks extends React.Component {

    render() {
        return this.props.myTanks.map((tanks) => {
            // console.log({Tanks});
            return <TankList key={tanks.photograph} tanks={tanks}></TankList>
        });
    }
}

export default Tanks;