import React, { Component } from 'react';

let date = new Date();

let singleUser = {
  name: 'John',
  time: date.toDateString(),
};

export default class Nav extends Component {
  render() {
    return (
      <section className="welcome-section">
        <h1>Welcome, {singleUser.name}</h1>
        <p>Today's date is {singleUser.time}</p>
      </section>
    );
  }
}
