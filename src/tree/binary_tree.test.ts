import { main } from './binary_tree'

const input = `9
0 1 4
1 2 3
2 -1 -1
3 -1 -1
4 5 8
5 6 7
6 -1 -1
7 -1 -1
8 -1 -1`

test('should ', () => {
  main(input)
  console.log(process.memoryUsage().heapUsed)
})
