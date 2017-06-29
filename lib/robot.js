'use strict';

class Robot {

  orient(direction) {
    if (direction === 'east' ||  direction === 'west' || direction === 'south' || direction === 'north') {
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  turnRight(direction) {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }

  turnLeft(direction) {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'west':
        this.bearing = 'south'
        break;
    }
  }

  at(x,y) {
    this.coordinates = [x,y]
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break;
      case 'east':
        this.coordinates[0] += 1
        break;
      case 'south':
        this.coordinates[1] -= 1
        break;
      case 'west':
        this.coordinates[0] -= 1
        break;
    }
  }

  instructions(string) {
    let directions = string.split("")
    let methods = []

    for (let i = 0; i < directions.length; i++) {
      switch (directions[i]) {
        case "L":
          methods.push('turnLeft')
          break;
        case "R":
          methods.push('turnRight')
          break;
        case "A":
          methods.push('advance')
          break;
      }
    }
    return methods
  }

  place(locationAndFacing) {
    this.at(locationAndFacing['x'], locationAndFacing['y'])
    this.orient(locationAndFacing['direction'])
  }

  evaluate(string) {
    let directions = this.instructions(string)

    for (let i = 0; i < directions.length; i++) {
      switch (directions[i]) {
        case 'turnLeft':
            this.turnLeft()
            break;
        case 'turnRight':
          this.turnRight()
          break;
        case 'advance':
          this.advance()
          break;
      }
    }
  }

} //CLASS CLOSING BRACKET

let robot = new Robot()

robot.orient("something")
