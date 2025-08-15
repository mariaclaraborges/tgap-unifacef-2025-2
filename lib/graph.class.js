export default class Graph {

  // Método construtor
  constructor(isDirected = false) {
    /*
      Nesta implementação, o grafo pode ser direcionado ou não, 
      dependendo do valor do atributo isDirected. Vértices e 
      arestas serão representados por uma lista de adjacência,
      implementada com o uso da classe Map nativa do JavaScript. 
    */
    this.isDirected = isDirected
    this.vertices = new Set()   // Set não permite elementos repetidos
    this.adjList = new Map()
  }

  // Método que adiciona um vértice ao grafo
  addVertex(v) {
    // Adiciona o vértice ao conjunto vertices, caso ainda não exista
    if(! this.vertices.has(v)) {
      this.vertices.add(v)

      // Cria um conjunto vazio associado ao vértice na lista de adjacência
      this.adjList.set(v, new Set())
    }

  }

}