enum Direction {
  Up, // 0, auto-incremented from 0
  Down, // 1
  Left = 10,
  Right, // 11 //auto increment from the last value
}

console.log(Direction.Right);

Direction.Up;
Direction.Down;
Direction.Left;
Direction.Right;

function move(direction: number) {
  if (direction === 0) console.log("Moving Up");
}

move(0);

enum Status {
  Success = "SUCCESS", // string approach to enum
  Error = "ERROR",
}
