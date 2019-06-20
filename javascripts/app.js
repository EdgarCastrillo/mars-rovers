// Rover Object Goes Here
// ======================


var rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: []
}

// ======================
function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case 'N':
            rover.direction = 'W';
            break;

        case 'W':
            rover.direction = 'S';
            break;

        case 'S':
            rover.direction = 'E';
            break;

        case 'E':
            rover.direction = 'N';
            break;
    }
    console.log('new position ' + rover.direction);
}

function turnRight(rover) {
    console.log("turnRight was called!");
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;

        case 'E':
            rover.direction = 'S';
            break;

        case 'S':
            rover.direction = 'W';
            break;

        case 'W':
            rover.direction = 'N';
            break;
    }
    console.log('new position ' + rover.direction);
}

function moveForward(rover) {
    console.log("moveForward was called")
    switch (rover.direction) {
        case 'N':
            rover.y = rover.y - 1;
            break;
        case 'E':
            rover.x = rover.x + 1;
            break;
        case 'S':
            rover.y = rover.y + 1;
            break;
        case 'W':
            rover.x = rover.x - 1;
            break;
    }
    tracking();
}

function roverCommands(command) {
    for (var i = 0; i < command.length; i++) {
        switch (command[i]) {
            case 'f':
                moveForward(rover);
                break;
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;
        }
    }
}


function tracking() {
    rover.travelLog.push(rover.x + ',' + rover.y);
    console.log(rover.travelLog);
}