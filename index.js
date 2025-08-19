import Graph from './lib/graph.class.js'

const g = new Graph(false)  // false = não direcionado

console.log(g)

g.addVertex('A')
g.addVertex('B')

console.log('-'.repeat(80))

console.log('Grafo após a adição de dois vértices:')
console.log(g)

console.log('-'.repeat(80))

g.addEdge('A', 'B')

console.log('Grafo após a adição da aresta A -> B:')
console.log(g)

console.log('-'.repeat(80))

// Criando uma aresta diretamente. O vértice C ainda não
// existe, e será criado automaticamente antes da criação
// da aresta
g.addEdge('A', 'C')

console.log('Grafo após a adição da aresta A -> C:')
console.log(g)
