import React from 'react';
import Card from 'react-bootstrap/Card'

class MovieItem extends React.Component {

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
                </footer> <br></br>
            </div>
        )
    }
}

export default MovieItem;