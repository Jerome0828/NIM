import React, { Component } from 'react';
import 'animate.css';

class Button extends Component {
  state = {
    checked: this.props.checked,
    value: this.props.value,
    id: this.props.id
  }

  btnCheck = () => { this.state.checked = !this.state.checked ; this.setState({})};
  btnDis = () => { return this.props.disabled };
  btnVis = () => { return this.props.visibility };
  btnBor = () => { return this.props.border };
  btnPass = () => { 
    this.props.numberPass( this.state.value, this.state.checked); 
    this.props.btnDis();
    this.props.btnL( this.state );
  };

  
  render() {
      return (
        <React.Fragment>
            <button
              id = {this.state.id}
              className="animate__animated animate__swing"
              style = {{ 
                backgroundColor: `${this.state.checked ? "#b78d12" : '#685e48'}`, 
                visibility:`${this.btnVis()}`,
                border: `${this.btnBor()}`,
                borderRadius: '100%',
                height: '100px',
                width: '100px',
                marginLeft: '10px'}}
              disabled = {this.btnDis()}
              onClick= {() => { this.btnCheck() ; this.btnPass() }}>
            </button >
        </React.Fragment>
      )
  }
}
export default Button;