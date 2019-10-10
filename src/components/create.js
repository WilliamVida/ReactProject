import React from 'react';

class Create extends React.Component {

    constructor(props) {
        super(props);

        this.state = { Title: "", Year: "", Poster: "" };
        this.handleSumbit = this.handleSumbit.bind(this);
        this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
        this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
        this.handleMoviePosterChange = this.handleMoviePosterChange.bind(this);
    }

    handleMovieTitleChange(e) {
        this.setState({ Title: e.target.value })
    }

    handleMovieYearChange(e) {
        this.setState({ Year: e.target.value })
    }

    handleMoviePosterChange(e) {
        this.setState({ Poster: e.target.value })
    }

    handleSumbit(e) {
        alert(this.state.Title + "\n" + this.state.Year + "\n" + this.state.Poster);
        e.preventDefault();
        this.setState({ Title: "", Year: "", Poster: "" })
    }

    render() {
        return (
            <div>
                <h1>Create</h1>

                <form onSubmit={this.handleSumbit}>
                    <div className="form-group">
                        <label>Movie Title</label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.handleMovieTitleChange}></input>
                    </div>

                    <div className="form-group">
                        <label>Movie Year</label>
                        <input type="text" className="form-control" value={this.state.Year} onChange={this.handleMovieYearChange}></input>
                    </div>

                    <div className="form-group">
                        <label>Movie Poster</label>
                        <textarea rows="3" className="form-control" value={this.state.Poster} onChange={this.handleMoviePosterChange}></textarea>
                    </div>

                    <div>
                        <input type="submit" value="Add Movie"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Create;
