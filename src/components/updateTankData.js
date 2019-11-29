import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

class UpdataTankData extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:4000/api/tanks/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    _id: response.data._id,
                    Name: response.data.name,
                    Type: response.data.type,
                    Country: response.data.country,
                    Gun: response.data.gun,
                    Weight: response.data.weight,
                    Crew: response.data.crew,
                    Photograph: response.data.photograph
                })
            })
            .catch();
    }

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

        const updateTank = {
            name: this.state.Name,
            type: this.state.Type,
            country: this.state.Country,
            gun: this.state.Gun,
            weight: this.state.Weight,
            crew: this.state.Crew,
            photograph: this.state.Photograph
        }

        axios.put('http://localhost:4000/api/tanks/' + this.state._id, updateTank)
            .then()
            .catch();

        this.setState({ Name: "", Year: "", Country: "", Gun: "", Weight: "", Crew: "", Photograph: "" })
    }

    render() {
        return (
            <div>
                <h1>Update {this.state.Name} Data</h1>

                <form onSubmit={this.handleSumbit} style={{ width: "60%", display: "inline-block" }}>
                    <div className="form-group">
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
                        <Button type="submit">Update Tank</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdataTankData;