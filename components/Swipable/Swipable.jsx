import React from 'react';

class Swipeable extends React.Component {
  touchStartX = 0;
  touchStartY = 0;
  touchEndX = 0;
  touchEndY = 0;

  handleTouchStart = (event) => {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  handleTouchEnd = (event) => {
    this.touchEndX = event.changedTouches[0].clientX;
    this.touchEndY = event.changedTouches[0].clientY;
    this.handleGesture();
  }

  handleGesture = () => {
    const threshold = 150; // required min distance traveled to be considered swipe
    const restraint = 100; // maximum distance allowed at the same time in perpendicular direction
    const allowedTime = 300; // maximum time allowed to travel that distance
    const elapsedTime = new Date().getTime() - this.touchStartX;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(this.touchStartY - this.touchEndY) <= restraint) {
        if (this.touchEndX - this.touchStartX >= threshold) {
          this.props.onSwipeRight();
        }
        if (this.touchStartX - this.touchEndX >= threshold) {
          this.props.onSwipeLeft();
        }
      }
    }
  }

  render() {
    return (
      <div
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        id='swipable'
      >
        {this.props.children}
      </div>
    );
  }
}

export default Swipeable;
