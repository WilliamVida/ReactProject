import React from 'react';
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

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
            <div>
                <CardDeck style={{ width: "30%", display: "block" }}>
                    <Card>
                        <Card.Title><h4>{this.props.tanks.name}</h4></Card.Title>
                        <Card.Img variant="top" src={this.props.tanks.photograph} />
                        <Card.Body>
                            <Card.Text style={{ 'text-align': "justify" }}>
                                Type: <strong>{this.props.tanks.type}</strong> <br></br>
                                Country of Origin: <strong>{this.props.tanks.country}</strong> <br></br>
                                Main Gun Size: <strong>{this.props.tanks.gun} centimetres</strong> <br></br>
                                Weight: <strong>{this.props.tanks.weight} tonnes</strong> <br></br>
                                Number of Crew: <strong>{this.props.tanks.crew}</strong>
                            </Card.Text>
                        </Card.Body>
                        <Link to={"/update/" + this.props.tanks._id} className="btn btn-primary">Update Tank Data</Link>
                        <Button variant="danger" onClick={this.DeleteTank}>Delete Tank From Database</Button>
                    </Card>
                </CardDeck>
                <br></br>
            </div>
        )
    }
}

export default TankList;