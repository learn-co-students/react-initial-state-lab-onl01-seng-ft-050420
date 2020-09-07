import React, { Component } from 'react';

export default class ImageSlider extends Component {

    constructor(props) {
        console.log(props)
        
        super()
        this.state = {
            currentSlideIndex: 0
        } 
    }
    render(){
        return(
            <div>I am on slide {this.state.currentSlideIndex}</div>
        )
    }
}
