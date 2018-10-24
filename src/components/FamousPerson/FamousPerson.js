import React, { Component } from 'react';
import './FamousPerson.css';

class FamousPerson extends Component {

  state = {
    famousPerson: {
      name: '',
      role: '',
    }
  }

  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        famousPerson: {
          ...this.state.famousPerson,
          [propertyName]: event.target.value,
        }
      })
    }
  }

  addPerson = (event) => {
    event.preventDefault();
    console.log( `The famous person is `, this.state.famousPerson );
  }

  render() {
    return (
      <section className="FP-section">
        <form>
          <label htmlFor="in-name">Name:</label>
          <input id="in-name" onChange={this.handleChangeFor('name')} />
          <label htmlFor="role">Famous for:</label>
          <input id="in-role" onChange={this.handleChangeFor('role')} />
          <button onClick={this.addPerson}>Done</button>
        </form>
        <p>
          {this.state.famousPerson.name} is famous for "{this.state.famousPerson.role}".
        </p> 
      </section>
    );
  }
}

export default FamousPerson;
