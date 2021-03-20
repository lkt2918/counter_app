import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      switchOn: false
    }
    
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch() {
    this.setState({ switchOn: !this.state.switchOn });
  }

  render() {
    return (
      <div className="layout">
        <Switch isOn={this.state.switchOn} onSwitched={this.toggleSwitch} />
        <Bulb isOn={this.state.switchOn} />
      </div>
    )
  }
}
class Switch extends React.Component {
  render() {
      var switchClass = this.props.isOn ? "cube-switch active" : "cube-switch";
      return (
        <div className={switchClass}>
          <span className="switch" onClick={this.props.onSwitched}>
            <span className="switch-state off">Off</span>
            <span className="switch-state on">On</span>
          </span>
        </div>
      );
  }
}

class Bulb extends React.Component {
render() {
  let lightClass = this.props.isOn ? "light-bulb on" : "light-bulb off";
  return (
    <div className={lightClass}></div>
  )
}
}
export default App;
