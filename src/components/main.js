import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: 0,
    };
  }

  handleButtonClickIncrease = e => {
    e.preventDefault();
    this.setState({ stuff: this.state.stuff + 1 });
  };
  
  handleButtonClickDecrease = e => {
    e.preventDefault();
    this.setState({ stuff: this.state.stuff - 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.state.stuff}</h4>
        <button id='decrease' onClick={this.handleButtonClickDecrease}>Decrease</button>
        <button id='increase' onClick={this.handleButtonClickIncrease}>Increase</button>
      </div>
    );
  }
}

export default Main;