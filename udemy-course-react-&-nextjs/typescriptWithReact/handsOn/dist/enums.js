"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 10] = "Left";
    Direction[Direction["Right"] = 11] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Right);
Direction.Up;
Direction.Down;
Direction.Left;
Direction.Right;
function move(direction) {
    if (direction === 0)
        console.log("Moving Up");
}
move(0);
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
})(Status || (Status = {}));
//# sourceMappingURL=enums.js.map