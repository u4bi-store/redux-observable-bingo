import React, { Component } from 'react'

import { connect } from 'react-redux'

import Board from './components/Board'
import Button from './components/Button'

import { onGame } from './store/actions'

class App extends Component {

    render() {

        const { onGame } = this.props

        return (
            <div className='App'>

                <Board
                    name='player1'
                    row={ 5 }
                    col={ 5 }
                />

                <Board
                    name='player2'
                    row={ 5 }
                    col={ 5 }
                />

               <Button onGame={ onGame } />

            </div>
        )
    }

}

const mapState = _ => ({

})
  
const mapDispatch = {
    onGame
}

export default connect(
    mapState,
    mapDispatch
)(App)