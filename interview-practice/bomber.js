function bomber(field) {
  var y, x, colUp, colDown, rowRight, rowKills = 0, kills = 0, maxKills = 0;
  for (y = 0; y < field.length; y += 1) {
    for (x = 0; x < field[0].length; x += 1) {
      if (field[y][x] === '0') {
        for (colUp = y - 1; colUp >= 0; colUp -= 1) {
          if (field[colUp][x] === 'E') {
            kills += 1;
          } else if (field[colUp][x] === 'W') {
            break;
          }
        }
        for (colDown = y + 1; colDown < field[y].length; colDown += 1) {
          if (field[colDown][x] === 'E') {
            kills += 1;
          } else if (field[colDown][x] === 'W') {
            break;
          }
        }
        for (rowRight = x + 1; rowRight < field[y].length; rowRight += 1) {
          if (field[y][rowRight] === 'E') {
            kills += 1;
          } else if (field[y][rowRight] === 'W') {
            break;
          }
        }
        kills += rowKills;
        if (kills > maxKills) {
          maxKills = kills;
        }
        kills = 0;
      } else if (field[y][x] === 'E') {
        rowKills += 1;
      } else {
        rowKills = 0;
      }
    }
    rowKills = 0;
    kills = 0;
  }
  return maxKills;
}
