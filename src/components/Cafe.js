import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Col, Row } from 'react-bootstrap'

export class Square extends Component {
    handleClick = () => {

    }

    renderStars = () => {
        const numStars = this.props.stars
    }

    render(){
        return (
            <div className='cafe'>
                <Grid>
                    <div className='cafe-image'>
                        <Row>
                            <Col md={12}> 
                                <img src={ this.props.cafe_image } />
                            </Col>
                        </Row>
                    </div>
                    <div className='cafe-stars'>
                        <Row>
                            <Col md={12}> 
                                <img> { this.renderStars() } </img>
                            </Col>
                        </Row>
                    </div>
                    <div className='cafe-body'>
                        <Row>
                            <Col md={12}>
                                <p> {this.props.body} </p>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </div>
        )
    }
}
