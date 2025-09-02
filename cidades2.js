import MultiEdgeGraph from './lib/multi-edge-graph.class.js'

// Atividade do dia 21/08 no AVA

const cidades = new MultiEdgeGraph()   // Não direcionado

cidades.addEdge('Franca', 'Restinga')
cidades.addEdge('Franca', 'Claraval')
cidades.addEdge('Franca', 'Cristais Paulista')
cidades.addEdge('Franca', 'Ribeirão Corrente')  // estrada 1
cidades.addEdge('Franca', 'Ribeirão Corrente')  // estrada 2
cidades.addEdge('Cristais Paulista', 'Pedregulho')
cidades.addEdge('Claraval', 'Ibiraci')

console.log(cidades)