import React, { Component } from 'react';
import './FamousSection.css';

class FamousSection extends Component {

  state = {
    famousPerson: [
  ],
    newFamousPerson: {
      name: '',
      role: ''
    }
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
      newFamousPerson: {
        ...this.state.newFamousPerson,
        [propertyName]: event.target.value,
      }
    })
  }

  addPerson = (event) => {
    event.preventDefault(event);
    let newPerson = this.state.newFamousPerson;
    console.log( `The famous person is `, this.state.famousPerson );
    
    this.setState({
      famousPerson: [...this.state.famousPerson, newPerson],
      newFamousPerson: {
        name: '',
        role: ''
      }
    }
    )
  }

  render() {
    return (
      <section className="new-person-section">
        <form onSubmit={this.addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input value={this.state.newFamousPerson.name} id="name-input" onChange={(event) => this.handleChangeFor(event, 'name')} />
          <label htmlFor="role-input">Famous for:</label>
          <input value={this.state.newFamousPerson.role} id="role-input" onChange={(event) => this.handleChangeFor(event, 'role')} />
          <button type="submit">Done</button>
        </form>
        <p>
          {this.state.newFamousPerson.name} is famous for "{this.state.newFamousPerson.role}".
        </p>
        <ul>
          {this.state.famousPerson.map((person, index) => 
          <li key = { index }>{person.name} is famous for {person.role}</li>)}
        </ul>
      </section>
    );
  }
}

export default FamousSection;
