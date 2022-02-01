import display from "./display";

// place your code on line 5 above the export statement below
class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(xcoord: number, ycoord: number) {
    this.xcoord = 0;
    this.ycoord = 0;
  }
  public get getXcoord() {
    return this.xcoord;
  }
  public get getYcoord() {
    return this.ycoord;
  }
}

class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = 1;
  }
  public move(numOfSquares: number) {
    if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.xcoord,
        this.position.y + numOfSquares
      );
    } else if (this.currentDirection === -1) {
      this.currentPosition = this.currentPosition - numOfSquares;
    } else if (this.currentDirection === 2) {
    } else if (this.currentDirection === -2) {
    }
  }
  public turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 1;
    }
  }
  public turnLeft() {
    if (this.currentDirection === 1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === -1) {
      this.currentDirection = -2;
    } else if (this.currentDirection === -2) {
      this.currentDirection = 1;
    } else if (this.currentDirection === 2) {
      this.currentDirection = -1;
    }
  }
  public turnRight() {
    if (this.currentDirection === 1) {
      this.currentDirection = -2;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === -2) {
      this.currentDirection = -1;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 1;
    }
  }
  public get position() {
    return this.currentPosition;
  }
}

export default Snake;
