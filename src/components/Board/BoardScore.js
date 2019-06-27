import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class BoardScore extends Component {

    componentDidUpdate() {

        const { name, bingo } = this.props

        console.log('did update (BoardScore)', name, bingo)

    }

    render() {

        const { name, bingo } = this.props

        return (
            <Fragment>

                <h1>{ name }</h1>
        
                빙고 : <span> { bingo } </span>
        
            </Fragment>
        )

    }

}

const mapState = (state, { name }) => ({
    bingo : state.app.players[name] && state.app.players[name].bingo
})
  
const mapDispatch = {

}

export default connect(
    mapState,
    mapDispatch
)(BoardScore)