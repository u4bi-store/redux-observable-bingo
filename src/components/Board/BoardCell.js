import React, { Component } from 'react'

import { connect } from 'react-redux'
import { onCell } from '../../store/actions'

class BoardCell extends Component {


    componentDidUpdate() {

        const { name, id, check } = this.props

        console.log('did update (BoardCell)', name, id, check)

    }

    render() {

        const { name, id } = this.props
        const { onCell, num, check } = this.props

        return (
            <td onClick={ _ => num && onCell(name, id) } style={ { backgroundColor : check ? 'red' : '' }}>

                { num }

            </td>
        )
    }

}

const mapState = (state, { name, id }) => {

    const { num, check } = state.board[name] && state.board[name].board[id] || { num : '', check : false }

    return {
        num,
        check
    }

}
  
const mapDispatch = {
    onCell
}

export default connect(
    mapState,
    mapDispatch
)(BoardCell)