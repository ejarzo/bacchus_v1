import React from 'react';

class MainMenuComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          Main Menu
        </div>
        <input 
          type="text"
          value={this.props.request}
          onChange={this.props.onRequestChange}
        />
        <button onClick={this.props.onClick}>
          submit
        </button>
        <p>
          {this.props.responseText}
        </p>
      </div>
    );
  }
}

export default MainMenuComponent;
