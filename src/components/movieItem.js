import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'

class MovieItem extends React.Component {

    constructor() {
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e) {
        console.log("Delete Clicked");
        axios.delete('http://localhost:4000/api/movies/' + this.props.movies._id)
            .then()
            .catch();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header><h4>{this.props.movies.title}</h4></Card.Header>
                </Card>
                <br></br>
                <img src={this.props.movies.poster}></img>
                <footer className="blockquote-footer">
                    {this.props.movies.year}
                </footer>
                <Link to={"/edit/" + this.props.movies._id} className="btn btn-primary">Edit</Link>
                <br></br>
                <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default MovieItem;