import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = { isPooped: false };
  }
  
  balloonPooper() {
    console.log('Pooped', this.props.value);
    this.setState({ isPooped: true });
  }
  
  render() {
    if (this.state.isPooped) {
      return null;
    } else {
      return (
        <div className="todo" onClick={ () => { this.balloonPooper() } }>
          <h2>
            { this.props.value }!
          </h2>
        </div>
      );
    }
  }
}

export default Todo;