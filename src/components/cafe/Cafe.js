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
                    <Row>
                        <div className='cafe-image'>
                            <Col md={12}> 
                                <img src={ this.props.cafe_image } />
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <div className='cafe-stars'>
                            <Col md={12}> 
                                <img> { this.renderStars() } </img>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <div className='cafe-body'>
                            <Col md={12}>
                                <p> {this.props.body} </p>
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
}
