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

  // Método que adiciona uma aresta ao grafo
  addEdge(v, w) {   // v e w são vértices
    // Se o vértice v ainda não existe, cria-o
    if(! this.vertices.has(v)) this.addVertex(v)

    // Se o vértice w ainda não existe, cria-o
    if(! this.vertices.has(w)) this.addVertex(w)

    // Estabelece a aresta v -> w
    this.adjList.get(v).add(w)

    // Se o grafo não for direcionado, devemos criar também a
    // aresta w -> v
    if(! this.isDirected) this.adjList.get(w).add(v)
  }

  // Método que remove um vértice do grafo
  removeVertex(v) {
    // Age apenas se o vértice existir
    if(! this.vertices.has(v)) return

    let referenced = false

    // Verifica se o vértice que está sendo excluído está presente
    // na lista de adjacência de algum outro vértice
    for(let vtx of this.vertices) {
      if(this.adjList(vtx).has(v)) {
        referenced = true
        break
      }
    }

    // Para que um vértice possa ser removido, sua lista de adjacência
    // deve estar vazia e ele não pode estar referenciado por nenhum
    // outro vértice
    if(this.adjList.get(v).size == 0 && !referenced) {

      // Remove o vértice da lista de vértices
      this.vertices.delete(v)

      // Remove a entrada da lista de adjacência
      this.adjList.delete(v)
    }
    else throw new Exception('ERRO: impossível excluir um vértice com arestas incidentes a ele.')
  }

  // Método que remove uma aresta do grafo
  removeEdge(v, w) {   // v e w são os vértices incidentes à aresta
    // Verifica se tanto v quanto w são vértices válidos
    if(!(this.vertices.has(v) && this.vertices.has(w))) return

    // Exclui w da lista de adjacência de v
    this.adjList.get(v).delete(w)

    // Se o grafo não for direcionado, precisamos excluir também
    // a aresta em sentido oposto
    if(! this.isDirected) this.adjList.get(w).delete(v)
  }

}