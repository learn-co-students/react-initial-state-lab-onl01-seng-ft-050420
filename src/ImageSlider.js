// your ImageSlider code here!
import React, { Component} from 'react'

export default class ImageSlieder extends Component {
     state = {
        currentSlideIndex: 0
    }

    render(){
        return(
            <div>
             I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}