import React, { Component } from 'react'
import Button from './Button'


class Counter extends Component {


    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.addButton = this.addButton.bind(this)
        this.decButton = this.decButton.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(e){
        if(e.target.name==='increase'){
            
                this.setState({ counter: this.state.counter + 1 })
             
        }else{
            
                if (this.state.counter !== 0) {
                    this.setState({ counter: this.state.counter - 1 })
                }
            
        }
    }
    // addButton() {
    //     this.setState({ counter: this.state.counter + 1 })
    // }
    // decButton() {
    //     if (this.state.counter !== 0) {
    //         this.setState({ counter: this.state.counter - 1 })
    //     }
    // }

    render() {
       
        return (
            <div>
                <Button title={this.state.counter}></Button>
                <Button clickHandler={this.clickHandler}></Button>
                <Button clickHandler={this.clickHandler}></Button>
                
            </div >
        )
    }
}

export default Counter