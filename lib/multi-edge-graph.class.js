/*
  Reimplementação da classe Graph, usando Array em vez 
  de Set para armazenar as referências às arestas, 
  permitindo, assim, múltiplas arestas entre dois vértices
*/

export default class MultiEdgeGraph {

  // Método construtor
  constructor(isDirected = false) {
    /*
      Nesta implementação, o grafo pode ser direcionado ou não, 
      dependendo do valor do atributo isDirected. Vértices e 
      arestas serão representados por uma lista de adjacência,
      implementada com o uso da classe Map nativa do JavaScript. 
    */
    this.isDirected = isDirected
    this.vertices = []    // Array permite elementos repetidos
    this.adjList = new Map()
  }

  // Implementar o restante da classe, usando o vetor em
  // this.vertices

}