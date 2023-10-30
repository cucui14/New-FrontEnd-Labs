import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-list">
          <li className="nav-items active">Home</li>
          <li className="nav-items">Portfolio</li>
          <li className="nav-items">Contact</li>
        </ul>
      </nav>
    );
  }
}
