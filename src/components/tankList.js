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
            .then()
            .catch();
    }

    render() {
        return (
            <div>
                <CardDeck style={{ width: "30%", display:"block" }}>
                    <Card>
                        <Card.Title><h4>{this.props.tanks.name}</h4></Card.Title>
                        <Card.Img style={{}} variant="top" src={this.props.tanks.photograph} />
                        <Card.Body>
                            <Card.Text>
                                Type: {this.props.tanks.type}<br></br>
                                Country of Origin: {this.props.tanks.country}<br></br>
                                Main Gun Size: {this.props.tanks.gun} centimetres<br></br>
                                Weight: {this.props.tanks.weight} tonnes<br></br>
                                Number of Crew: {this.props.tanks.crew}
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