import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Square } from 'components/Square'
import * as BoardActions from 'actions/board'
import styles from 'styles/ttt.css'

//Not placed in container
const mapStateToProps = (state) => {
    const { gameBoard, currentPlayer, win } = state.board
    return {
        gameBoard: gameBoard,
        currentPlayer: currentPlayer,
        win: win
    }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
            ...BoardActions
        },
        dispatch
    )
}

@connect(mapStateToProps, mapDispatchToProps)

export class GameBoard extends Component {
    componentWillMount = () => {

    }

    render(){
        return <div className='coffee-shop'>
            <div className='row'>
                
            </div>
        </div>
    }
}
