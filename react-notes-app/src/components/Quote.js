import React from "react";

class Quote extends React.Component {
  render() {
    return (
      <div className="quote">
        <h1>{this.props.quote}</h1>
        <p>{this.props.author}</p>
      </div>
    );
  }
}

export default Quote;
