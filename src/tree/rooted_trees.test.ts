import { main } from './rooted_trees'

const input = `13
0 3 1 4 10
1 2 2 3
2 0
3 0
4 3 5 6 7
5 0
6 0
7 2 8 9
8 0
9 0
10 2 11 12
11 0
12 0`

test('should ', () => {
  main(input)
  console.log(process.memoryUsage().heapUsed)
})