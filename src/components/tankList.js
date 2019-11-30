import React from 'react';
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

class TankList extends React.Component {

    constructor() {
        super();
        this.state = { showMessage: false }

        this.DeleteTank = this.DeleteTank.bind(this);
    }

    DeleteTank(e) {
        console.log("Delete Clicked");

        axios.delete('http://localhost:4000/api/tanks/' + this.props.tanks._id)
            .then(() => {
                this.props.ReloadDataMethod();
            })
            .catch();
    }

    render() {
        return (
            <div style={{ display: "inline-block", margin: "20px" }}>
                <Card border="dark" style={{ width: '25em' }}>
                    <Card.Title><h4>{this.props.tanks.name}</h4></Card.Title>
                    <Card.Img variant="top" src={this.props.tanks.photograph} />
                    <Card.Body>
                        <Card.Text style={{ textAlign: "justify" }}>
                            Type: <b>{this.props.tanks.type}</b> <br></br>
                            Country of Origin: <b>{this.props.tanks.country}</b> <br></br>
                            Main Gun Size: <b>{this.props.tanks.gun} centimetres</b> <br></br>
                            Weight: <b>{this.props.tanks.weight} tonnes</b> <br></br>
                            Number of Crew: <b>{this.props.tanks.crew}</b>
                        </Card.Text>
                    </Card.Body>
                    <Link to={"/update/" + this.props.tanks._id} className="btn btn-primary">Update Tank Data</Link>
                    <Button variant="danger" onClick={this.DeleteTank}>Delete Tank From Database</Button>
                </Card>
                <br></br>
            </div>
        )
    }
}

export default TankList;