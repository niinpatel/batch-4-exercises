import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';

import '../styles/NewColor.css';

class NewColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hex: '#ffffff',
      changesSaved: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, hex } = this.state;
    this.props.addColor({ name, hex });
    this.setState(
      {
        changesSaved: true,
      },
      () => this.props.history.push('/colors'),
    );
  }

  render() {
    return (
      <div className="new-color">
        <Prompt
          when={this.state.changesSaved === false}
          message="Are you sure you want to leave this page?"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Color name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter a name for the color"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="hex">Color value</label>
            <input
              type="color"
              name="hex"
              id="hex"
              onChange={this.handleChange}
              value={this.state.hex}
            />
          </div>
          <input type="Submit" value="Add this color" readOnly />
        </form>
      </div>
    );
  }
}

NewColor.propTypes = {
  addColor: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default NewColor;
