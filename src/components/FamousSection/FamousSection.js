import React, { Component } from 'react';
import './FamousSection.css';

class FamousSection extends Component {

  state = {
    famousPerson: {
      name: '',
      role: '',
    }
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      famousPerson: {
        ...this.state.famousPerson,
        [propertyName]: event.target.value,
      }
    })
  }

  addPerson = (event) => {
    event.preventDefault();
    console.log( `The famous person is `, this.state.famousPerson );
  }

  render() {
    return (
      <section className="new-person-section">
        <form onSubmit={this.addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={this.handleChangeFor('name')} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={this.handleChangeFor('role')} />
          <button type="submit">Done</button>
        </form>
        <p>
          {this.state.famousPerson.name} is famous for "{this.state.famousPerson.role}".
        </p>
        {/* The list should go here. */}
        <ul>

        </ul>
      </section>
    );
  }
}

export default FamousSection;
