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

  /*
    Método que determina o menor caminho entre um vértice e
    todos os demais usando o algoritmo de Dijkstra
  */
  shortestDistance(initialVertex) {

    // Tabela que conterá os resultados
    const result = {}

    // Cria a tabela de trabalho do algoritmo
    for(let vtx of this.vertices) {
      result[vtx] = {
        isClosed: false,
        distance: Infinity,
        parent: null
      }
    }

    // Inicializa as informações relativas ao vértice inicial
    result[initialVertex].isClosed = true
    result[initialVertex].distance = 0
    result[initialVertex].parent = initialVertex

    // O primeiro vértice a ser analisado é exatamente aquele
    // passado como parâmetro
    let currentVertex = initialVertex

    // Repete enquanto houver um vértice válido
    while(currentVertex) {

      console.log({currentVertex})

      // Inicia pelos adjacentes do vértice inicial
      const edges = this.adjList.get(currentVertex)

      // Inicializa o vértice adjacente mais próximo com distância infinita 
      const closer = { vertex: null, distance: Infinity }

      // Para cada aresta incidente ao vértice inicial,
      // preenche a tabela com as informações pertinentes
      for(let e of edges) {
        
        // Se a soma da distância acumulada até o vértice atual mais o peso da
        // aresta incidente for menor do que a distância acumulada já registrada
        // para o vértice adjacente, substituímos a distância acumulada e o vértice pai
        if(result[currentVertex].distance + e.weight < result[e.adjacent].distance) {
          result[e.adjacent].distance = result[currentVertex].distance + e.weight
          result[e.adjacent].parent = currentVertex
        }

        // Aqui, determinamos qual vértice adjacente tem a menor distância relativa
        // ao vértice que está sendo analisado
        if(! result[e.adjacent].isClosed && e.weight < closer.distance) {
          closer.vertex = e.adjacent
          closer.distance = e.weight
        }

      }
      
      currentVertex = null
      let minDistance = Infinity

      // Determina o próximo vértice a ser analisado
      // Procura pelo vértice com menor distância acumulada e que
      // ainda esteja aberto
      for(let vtx of this.vertices) {
        if(! result[vtx].isClosed && result[vtx].distance <= minDistance) {
          currentVertex = vtx
          minDistance = result[vtx].distance
        }
      }

      // Se tiver sido encontrado um vértice válido, fecha-o
      if(currentVertex) result[currentVertex].isClosed = true

    }

    return result

  }

}