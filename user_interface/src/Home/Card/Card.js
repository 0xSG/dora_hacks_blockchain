import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //alert(this.state.data.email);
  }
  render() {
    return (
      <div className="card">
        <div className=" list-group">
          <a href={this.props.url}>{this.props.title}</a>
        </div>
      </div>
    );
  }
}

export default Card;
