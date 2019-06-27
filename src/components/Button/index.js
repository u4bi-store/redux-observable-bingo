import React, { Component } from 'react'

export default class extends Component {

    state = {
        flag : true
    }

    render() {

        const { flag } = this.state
        const { onGame } = this.props

        return (
            <button onClick={ _ => {
                flag && this.setState({ flag : false })
                onGame()
            }}>

                { flag ? '게임시작' : '게임 재시작' }

            </button>
        )
    }

}