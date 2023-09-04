import { getObstacleEvents } from './computer-vision';

interface Events {
  [event: string]: boolean;
}

interface AutonomousCar {
  isRunning?: boolean;  
  respond: (events: Events) => void; 
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl

  constructor (props: AutonomousCarProps) {
    this.isRunning = props.isRunning
    this.steeringControl = props.steeringControl
  }

  respond (events: Events) {
    const keys = Object.keys(events)
    keys.forEach((eventKey) => {
      if (!events[eventKey]) return
      if (eventKey === 'ObstacleLeft') this.steeringControl.turn('right')
      if (eventKey === 'ObstacleRight') this.steeringControl.turn('left')
    })
    if (!this.isRunning) {
      return console.log('The car is not running')
    }
  }

};

class SteeringControl implements Steering {
  execute (command: string) {
    console.log(`Executing: ${command}`)
  }

  turn (direction: string) {
    this.execute(`turn ${direction}`)
  }
}

const steering = new SteeringControl()
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(getObstacleEvents())