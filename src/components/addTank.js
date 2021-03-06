import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

class AddTank extends React.Component {

    constructor(props) {
        super(props);

        this.state = { Name: "", Type: "", Country: "", Gun: "", Weight: "", Crew: "", Photograph: "" };

        this.handleSumbit = this.handleSumbit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleGun = this.handleGun.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
        this.handleCrew = this.handleCrew.bind(this);
        this.handlePhotograph = this.handlePhotograph.bind(this);
    }

    handleName(e) {
        this.setState({ Name: e.target.value })
    }

    handleType(e) {
        this.setState({ Type: e.target.value })
    }

    handleCountry(e) {
        this.setState({ Country: e.target.value })
    }

    handleGun(e) {
        this.setState({ Gun: e.target.value })
    }

    handleWeight(e) {
        this.setState({ Weight: e.target.value })
    }

    handleCrew(e) {
        this.setState({ Crew: e.target.value })
    }

    handlePhotograph(e) {
        this.setState({ Photograph: e.target.value })
    }

    handleSumbit(e) {
        e.preventDefault();

        const tankObject = {
            name: this.state.Name,
            type: this.state.Type,
            country: this.state.Country,
            gun: this.state.Gun,
            weight: this.state.Weight,
            crew: this.state.Crew,
            photograph: this.state.Photograph
        }

        axios.post('http://localhost:4000/api/tanks', tankObject)
            .then()
            .catch();

        this.setState({ Name: "", Year: "", Country: "", Gun: "", Weight: "", Crew: "", Photograph: "" })
    }

    render() {
        return (
            <div>
                <h1>Add a Tank</h1>

                <form onSubmit={this.handleSumbit} style={{ width: "60%", display: "inline-block" }}>
                    <div className="form-group" >
                        <label>Name</label>
                        <input required type="text" className="form-control" value={this.state.Name} onChange={this.handleName}></input>
                    </div>

                    <div className="form-group">
                        <label>Type</label>
                        <input type="text" className="form-control" value={this.state.Type} onChange={this.handleType}></input>
                    </div>

                    <div className="form-group">
                        <label>Country of origin</label>
                        <input type="text" className="form-control" value={this.state.Country} onChange={this.handleCountry}></input>
                    </div>

                    <div className="form-group">
                        <label>Main gun size in centimetres</label>
                        <input type="number" step="0.1" className="form-control" value={this.state.Gun} onChange={this.handleGun}></input>
                    </div>

                    <div className="form-group">
                        <label>Weight in tonnes</label>
                        <input type="number" step="0.1" className="form-control" value={this.state.Weight} onChange={this.handleWeight}></input>
                    </div>

                    <div className="form-group">
                        <label>Number of crew</label>
                        <input type="number" className="form-control" value={this.state.Crew} onChange={this.handleCrew}></input>
                    </div>

                    <div className="form-group">
                        <label>Photograph</label>
                        <textarea type="text" className="form-control" value={this.state.Photograph} onChange={this.handlePhotograph}></textarea>
                    </div>

                    <div>
                        <Button type="submit">Add Tank</Button>
                    </div>

                    <br></br>
                </form>
            </div>
        );
    }
}

export default AddTank;