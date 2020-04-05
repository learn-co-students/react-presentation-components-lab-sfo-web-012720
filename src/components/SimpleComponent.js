import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }
    
    handleClick = () => {
        const unhappy = (this.state.mood === 'happy' ? 'sad' : 'happy')
        this.setState({ mood: unhappy})
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}
