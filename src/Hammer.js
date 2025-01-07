import React, { Component } from "react";

class Hammer extends Component {
    constructor(props) {
        super(props);
        this.imageContainerRef = null;
        this.state = {
            scale: 1,
            lastScale: 1,
        };
    }

    handlePointerDown = (e) => {
        if (e.pointerType === "touch") {
            e.target.setPointerCapture(e.pointerId);
        }
    };

    handleGestureStart = (e) => {
        e.preventDefault();
        this.setState({lastScale: this.state.scale});
    };

    handleGestureChange = (e) => {
        e.preventDefault();
        const newScale = this.state.lastScale * e.scale;
        this.setState({scale: newScale});
    };

    handleGestureEnd = () => {
        this.setState({lastScale: this.state.scale});
    };
render(){
    return (
        <div className="v360-viewport-container v360-viewport"
             style={{
                 touchAction: "none", // Disable browser's default gestures
                 overflow: "hidden",
             }}
             onPointerDown={this.handlePointerDown}
             onGestureStart={this.handleGestureStart}
             onGestureChange={this.handleGestureChange}
             onGestureEnd={this.handleGestureEnd}
        />
        );
}

}

export default Hammer;