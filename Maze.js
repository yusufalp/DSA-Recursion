let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


function solveMaze(maze, row = 0, col = 0, path = []) {
  if (row < 0 || col < 0 || row >= maze.length || col >= maze[row].length) {
    return
  }

  const value = maze[row][col]

  if (value === 'e') {
    console.log(path.join(''))
    return
  } else if (value === '*'){
    return
  } 

  maze[row][col] = '*'
  solveMaze(maze, row+1, col, [...path, 'D'])
  solveMaze(maze, row, col+1, [...path, 'R'])
  solveMaze(maze, row-1, col, [...path, 'U'])
  solveMaze(maze, row, col-1, [...path, 'L'])
  maze[row][col] = ' '
}

solveMaze(maze)