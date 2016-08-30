import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      number_seats: "",
      lat: this.props.lat,
      lng: this.props.lng
    };
  }

  handleChange(field, event) {
    let newState = {};
    newState[field] = event.target.value;
    this.setState(newState);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.props.router.push("/");
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>

        <label className="bench-input">Description:
          <textarea
            value={this.state.description}
            onChange={this.handleChange.bind(this, "description")}
          />
        </label>

        <label className="bench-input">Number of Seats:
          <input
            type="number"
            value={this.state.number_seats}
            onChange={this.handleChange.bind(this, "number_seats")}
          />
        </label>

        <label className="bench-input">Latitude:
          <input
            type="number"
            disabled
            value={this.state.lat}
            onChange={this.handleChange.bind(this, "lat")}
          />
        </label>

        <label className="bench-input">Longitude:
          <input
            type="number"
            disabled
            value={this.state.lat}
            onChange={this.handleChange.bind(this, "lng")}
          />
        </label>

        <input className="bench-input" type="submit" value="Create Bench"/>

      </form>
    );
  }
}

export default withRouter(BenchForm);
