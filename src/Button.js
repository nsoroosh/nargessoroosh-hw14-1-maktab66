import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
          <div>
                <h1>{this.props.title}</h1>
                <button  name='dcrease'onClick={this.props.clickHandler}>deccrease</button>
                <button onClick={this.props.clickHandler}>decrease</button>
            </div>
      </div>
    )
  }
}
