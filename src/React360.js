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
        document.addEventListener("touchmove", this.handleTouchMove, false);
        document.addEventListener("touchend", this.handleTouchEnd, false);
        this.preloadImages()
    };

    componentWillUnmount = () => {
        // No need to remove event listeners from document
        document.removeEventListener("touchmove", this.handleTouchMove, false);
        document.removeEventListener("touchend", this.handleTouchEnd, false);
    };

    handleTouchStart = (e) => {
        const touch = e.touches[0]; // 첫 번째 터치 포인트
        this.setState((state) => ({
            dragging: true,
            dragStart: touch.clientX,
            dragStartIndex: state.imageIndex
        }));
    };

    handleTouchEnd = () => {
        this.setState({ dragging: false });
    };

    handleTouchMove = (e) => {
        if (this.state.dragging) {
            const touch = e.touches[0]; // 첫 번째 터치 포인트
            this.updateImageIndex(touch.clientX);
        }
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

    preloadImages = () => {
        const { dir, numImages } = this.props;
        let imagesLoaded = [];

        for (let i = 1; i <= numImages; i++) {
            const image = new Image();
            image.src = require(`./${dir}/image${i}.jpg`);
            image.onload = () => {
                imagesLoaded.push(i);
                if (imagesLoaded.length === numImages) {
                    this.setState({ imagesLoaded });
                }
            };
        }
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
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
                // onPointerDown={this.handlePointerDown}  // Pointer down event
                // onPointerMove={this.handlePointerMove}  // Pointer move event
                // onPointerUp={this.handlePointerUp}      // Pointer up event
                onDragStart={this.preventDragHandler}
            >
                {this.renderImage()}
            </div>
        );
    };
}

export default React360;