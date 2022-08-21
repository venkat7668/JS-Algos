/*
Minimum cost table
:----+----+----+----:
| 1→ | 1↓ |  3 |  4 |
:----+----+----+----:
| 3  | 1  | 2↓ |  4 |
:----+----+----+----:
| 1  | 1  | 7  |  1↓|
:----+----+----+----:
| 1  | 2 |  3 | 1🏁 |
'----'---'----'-----'
*/

// Recursive 
function minCostPath(cost, m, n) {
  if (m < 0 || n < 0) {
    return Number.MAX_VALUE
  } else if (m == 0 && n == 0) {
    return cost[0][0];
  } else {
      return cost[m][n] + Math.min(
        minCostPath(cost, m - 1, n - 1),
        minCostPath(cost, m - 1, n),
        minCostPath(cost, m, n - 1)
      );
  }
}

const cost = [
  [1, 1, 3, 4],
  [3, 1, 2, 4],
  [1, 1, 7, 1],
  [1, 2, 3, 1]
]
console.log(minCostPath(cost, 3, 3))
O(r*c) 