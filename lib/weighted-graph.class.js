/*
  Classe auxiliar que representará uma aresta, com as informações
  necessárias para um grafo ponderado
*/
class WeightedEdge {
  constructor(adjacent, weight = null, label = null) {
    this.adjacent = adjacent    // Vértice adjacente
    this.weight = weight        // Peso da aresta; opcional
    this.label = label          // Rótulo da aresta; opcional
  }
}

/*
  Implementação de uma classe de grafos que suporta arestas com pesos
  (grafo ponderado)
*/
export default class WeightedGraph {

  constructor(isDirected = false) {
    this.isDirected = isDirected
    this.vertices = []
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

  // Método que adiciona uma nova aresta ao grafo
  addEdge(v, w, weight = null, label = null) {  // v e w são vértices
    // Se o vértice v ainda não existir, cria-o
    if(! this.vertices.includes(v)) this.addVertex(v)

    // Se o vértice w ainda não existir, cria-o
    if(! this.vertices.includes(w)) this.addVertex(w)

    // Cria o objeto que representa a aresta que está sendo inserida
    const edge1 = new WeightedEdge(w, weight, label)

    // Estabelece a aresta v -> w
    this.adjList.get(v).push(edge1)

    // Se o grafo NÃO FOR direcionado, criamos também a aresta w -> v
    if(! this.isDirected) {
      const edge2 = new WeightedEdge(v, weight, label)
      this.adjList.get(w).push(edge2)
    }
  }

  // Método que remove um vértice de um grafo
  removeVertex(v) {
    // Age apenas se o vértice existir
    if(! this.vertices.includes(v)) return

    let referenced = false

    // Verifica se o vértice que está sendo excluído existe na lista
    // de adjacência de algum outro vértice
    for(const vtx of this.vertices) {
      const adjList = this.adjList.get(vtx)

      for(const edge of adjList) {
        if(edge.adjacent === v) {
          referenced = true
          break
        }
      }
    }

    // Verifica se a lista de adjacência do vértice está vazia
    // e se o vértice é referenciado na lista de adjacência de
    // algum outro vértice
    if(this.adjList.get(v).length === 0 && !referenced) {
      // Remove o vértice da lista de vértices
      this.vertices.splice(this.vertices.indexOf(v), 1)
      // Remove a entrada da lista de adjacência
      this.adjList.delete(v)
    }
    else throw new Error('ERRO: impossível excluir um vértice com arestas incidentes.')
  }

  // Método que remove uma aresta do grafo
  removeEdge(v, w) {
    // Só podemos excluir se as arestas v e w existirem
    if(this.vertices.includes(v) && this.vertices.includes(w)) {
      // Remove a aresta v -> w
      const edgesV = this.adjList.get(v)
      const indexW = edgesV.findIndex(edge => edge.adjacent === w)
      if(indexW >= 0) edgesV.splice(indexW, 1)

      // Se o grafo não for direcionado, remove também w -> v
      if(! this.isDirected) {
        const edgesW = this.adjList.get(w)
        const indexV = edgesW.findIndex(edge => edge.adjacent === v)
        if(indexV >= 0) edgesV.splice(indexV, 1)
      }
    }
  }

}