import React, { Component } from "react";
import "./React360.css";

// Adjust this value to control sensitivity
const pixelsPerDegree = 3;

class React360 extends Component {
    static defaultProps = { dir: "awair-360", numImages: 55 };

    state = {
        dragging: false,
        imageIndex: 0,
        dragStartIndex: 0
    };

    componentDidMount = () => {
        // Pointer events do not need to be attached to document directly for "move" and "end"
        // It will be handled by the specific element
    };

    componentWillUnmount = () => {
        // No need to remove event listeners from document
    };

    handlePointerDown = (e) => {
        // Pointer events give us clientX and clientY directly
        this.setState({
            dragging: true,
            dragStart: e.clientX,
            dragStartIndex: this.state.imageIndex
        });
    };

    handlePointerUp = () => {
        this.setState({ dragging: false });
    };

    handlePointerMove = (e) => {
        if (this.state.dragging) {
            this.updateImageIndex(e.clientX);
        }
    };

    updateImageIndex = (currentPosition) => {
        let numImages = this.props.numImages;
        const pixelsPerImage = pixelsPerDegree * (360 / numImages);
        const { dragStart, imageIndex, dragStartIndex } = this.state;
        // pixels moved
        let dx = (currentPosition - dragStart) / pixelsPerImage;
        let index = Math.floor(dx) % numImages;

        if (index < 0) {
            index = numImages + index - 1;
        }
        index = (index + dragStartIndex) % numImages;

        if (index !== imageIndex) {
            this.setState({ imageIndex: index });
        }
    };

    preventDragHandler = (e) => {
        e.preventDefault();
    };

    renderImage = () => {
        const { imageIndex } = this.state;

        return (
            <div className="react360">
                <img
                    className="react-360-img"
                    alt=""
                    src={require(`./${this.props.dir}/image${imageIndex + 1}.jpg`)}
                />
            </div>
        );
    };

    render = () => {
        return (
            <div
                className="react-360-img"
                onPointerDown={this.handlePointerDown}  // Pointer down event
                onPointerMove={this.handlePointerMove}  // Pointer move event
                onPointerUp={this.handlePointerUp}      // Pointer up event
                onDragStart={this.preventDragHandler}
            >
                {this.renderImage()}
            </div>
        );
    };
}

export default React360;