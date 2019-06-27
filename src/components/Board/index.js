import React, { Component } from 'react'

import { connect } from 'react-redux'

import BoardScore from './BoardScore'

import BoardRow from './BoardRow'
import BoardCell from './BoardCell'

import { addPlayer, onBoard } from '../../store/actions'

import { range } from 'rambda'

class Board extends Component {

    componentDidMount() {

        const { addPlayer, name } = this.props

        addPlayer(name)

    }

    componentDidUpdate() {

        const { onBoard, name, row, col } = this.props
        
        onBoard(name, row, col)

    }

    render() {

        const { name, row, col } = this.props

        let _id = 0

        return (
            <article>

                <BoardScore name={ name } />

                <table>
    
                    <tbody>

                        { range(0, row).map((rowIndex) =>

                            <BoardRow key={ rowIndex }>
    
                                { range(0, col).map((colIndex) =>
                                    <BoardCell 
                                        key={ colIndex }
                                        id={ _id++ }
                                        name={ name }
                                    />) }

                            </BoardRow> )}
    
                    </tbody>
    
                </table>
    
            </article>
        )

    }

}

const mapState = (state) => ({
    tick : state.app.tick
})
  
const mapDispatch = {
    addPlayer,
    onBoard
}

export default connect(
    mapState,
    mapDispatch
)(Board)