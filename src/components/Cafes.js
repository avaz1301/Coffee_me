import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Col, Row } from 'react-bootstrap'
import { Cafe } from 'components/Cafe'

const mapStateToProps = (state) => {
    const { cafeList } = state.cafes
    return {
        cafeList
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

export class Square extends Component {
    handleClick = () => {

    }

    renderCafes = () => {
        const cafes = this.props.cafeList.map((cafeObj) => {
            <Col>
                <Cafe cafe_image={ cafeObj.cafe_image } stars={ cafeObj.stars } body={ cafeObj.body }/>
            </Col>
        })

        return cafes
    }

    render(){
        return (
            <div className='cafes'>
                <Grid>
                    <div class='cafe-row'>
                        <Row>
                            { renderCafes() }
                        </Row>
                    </div>
                </Grid>
            </div>
        )
    }
}
