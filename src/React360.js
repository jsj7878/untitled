import React, { Component } from "react";
import "./React360.css";

// Adjust this value to control sensitivity
const pixelsPerDegree = 3;

class React360 extends Component {
    static defaultProps = { dir: "awair-360", numImages: 55 };

    state = {
        dragging: false,
        imageIndex: 0,
        dragStartIndex: 0,
        imagesLoaded: [],
    };

    componentDidMount = () => {
        // Preload images
        this.preloadImages();

        // Start the initial animation
        this.startInitialAnimation();
    };

    componentWillUnmount = () => {
        // Clear any intervals when the component is unmounted
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
    };

    startInitialAnimation = () => {

        let currentIndex = 0;

        // Interval to increment the imageIndex
        this.animationInterval = setInterval(() => {
            if (currentIndex < 25) {
                this.setState({ imageIndex: currentIndex%24 });
                currentIndex++;
            } else {
                // Stop the animation after reaching the 24th image
                clearInterval(this.animationInterval);
            }
        }, 100); // Adjust the delay (100ms) for smoothness
    };

    handleTouchStart = (e) => {
        const touch = e.touches[0]; // 첫 번째 터치 포인트
        this.setState((state) => ({
            dragging: true,
            dragStart: touch.clientX,
            dragStartIndex: state.imageIndex,
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

    updateImageIndex = (currentPosition) => {
        const { numImages } = this.props;
        const pixelsPerImage = pixelsPerDegree * (360 / numImages);
        const { dragStart, imageIndex, dragStartIndex } = this.state;
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
                onDragStart={this.preventDragHandler}
            >
                {this.renderImage()}
            </div>
        );
    };
}

export default React360;
