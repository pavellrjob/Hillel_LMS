import React from "react";

import { ThemeContext } from "./Provider";



export class ThemedButton extends React.Component {
  static contextType = ThemeContext;

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.context.callBack(this.context.name);
  }

  render () {
    return (
      <div>

        <button onClick={this.handleClick} style={{paddingLeft: "50px", paddingRight: "50px", background: this.props.background, color: this.props.foreground, marginRight: this.props.marginRight}}>
          {this.props.name}
        </button>

    </div>
    )

  }
}


export class Toolbar extends React.Component {
  static contextType = ThemeContext;

  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div>
        <ThemedButton name={this.props.name} marginRight={this.context.light.marginRight} background={this.props.background} color={this.props.color}>
          </ThemedButton>
      </div>
    )
  }
}


                   
