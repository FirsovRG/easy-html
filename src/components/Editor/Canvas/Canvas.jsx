import React from 'react';
import styles from './Canvas.module.css';

export class Canvas extends React.Component {
  static defaultProps = {
    // strokeStyle: '#a32af7',
    lineWidth: 1,
    onSelected: () => {}
  };
  state = {
    canDraw: false,
    coordinates: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  };

  canvas = null;
  ctx = null;
  isDirty = false;
  isDrag = false;
  startX = -1;
  startY = -1;
  curX = -1;
  curY = -1;

  handleMouseDown = e => {
    this.setState({ canDraw: true });
    const { clientX, clientY } = e;
    this.setState({
      coordinates: { x1: clientX, y1: clientY, x2: clientX, y2: clientY }
    });

    this.isDrag = true;
    this.curX = this.startX = e.offsetX;
    this.curY = this.startY = e.offsetY;
    requestAnimationFrame(this.updateCanvas);
  };

  handleMouseUp = e => {
    this.setState({ canDraw: false });

    this.isDrag = false;
    this.isDirty = true;

    const rect = {
      x: Math.min(this.startX, this.curX),
      y: Math.min(this.startY, this.curY),
      width: Math.abs(e.offsetX - this.startX),
      height: Math.abs(e.offsetY - this.startY)
    };
    this.setState({ ...rect });
  };

  handleMouseMove = e => {
    const { clientX, clientY } = e;
    if (this.state.canDraw) {
      this.setState({ coordinates: { x2: clientX, y2: clientY } });
    }
    if (!this.isDrag) return;
    this.curX = e.offsetX;
    this.curY = e.offsetY;
    this.isDirty = true;
  };

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = '#a32af7';
    this.ctx.lineWidth = 1;
    this.addMouseEvents();
  }

  updateCanvas = () => {
    if (this.isDrag) {
      requestAnimationFrame(this.updateCanvas);
    }
    if (!this.isDirty) {
      return;
    }

    this.ctx.clearRect(
      0,
      0,
      this.props.screenResolution.width,
      this.props.screenResolution.height
    );
    if (this.isDrag) {
      const rect = {
        x: this.startX,
        y: this.startY,
        w: this.curX - this.startX,
        h: this.curY - this.startY
      };
      this.ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
    }
    this.isDirty = false;
  };

  componentWillUnmount() {
    this.removeMouseEvents();
  }

  addMouseEvents() {
    this.ref.current.addEventListener('mousedown', this.handleMouseDown, false);
    this.ref.current.addEventListener('mousemove', this.handleMouseMove, false);
    this.ref.current.addEventListener('mouseup', this.handleMouseUp, false);
  }
  removeMouseEvents() {
    this.ref.current.removeEventListener('mousedown', this.handleMouseDown, false);
    this.ref.current.removeEventListener('mousemove', this.handleMouseMove, false);
    this.ref.current.removeEventListener('mouseup', this.handleMouseUp, false);
  }

  ref = React.createRef();

  render() {
    return (
      <div className={styles.workspace}>
        <div ref={this.ref} className={styles.canvas}>
          <canvas
            ref={c => {
              this.canvas = c;
            }}
            width={this.props.screenResolution.width / 1.5}
            height={this.props.screenResolution.height / 1.5}
          ></canvas>
        </div>
      </div>
    );
  }
}
