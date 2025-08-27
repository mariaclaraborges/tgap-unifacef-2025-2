// Questão 3
// Proponha uma nova implementação da classe Graph que torne possível representar mais de uma aresta entre dois vértices.

class Grafo {
  constructor() {

    this.adjList = {};
  }

  // Adiciona um vrtice ao grafo
  adcVertice(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = {};
    }
  }

  // Adiciona uma aresta 
  adcAresta(v1, v2, peso = null) {
    this.adcVertice(v1);
    this.adcVertice(v2);

    // Se ainda não houver relação, inicializa como lista
    if (!this.adjList[v1][v2]) {
      this.adjList[v1][v2] = [];
    }
    if (!this.adjList[v2][v1]) {
      this.adjList[v2][v1] = [];
    }

    // Adiciona aresta nos dois sentidos 
    this.adjList[v1][v2].push(peso);
    this.adjList[v2][v1].push(peso);
  }

  // Retorna todas as arestas entre dois vertices
  mostraAresta(v1, v2) {
    if (this.adjList[v1] && this.adjList[v1][v2]) {
      return this.adjList[v1][v2];
    }
    return [];
  }

  mostraGrafo() {
    for (let v in this.adjList) {
      console.log(`${v}:`);
      for (let vizinho in this.adjList[v]) {
        console.log(`  -> ${vizinho}: ${this.adjList[v][vizinho].join(", ")}`);
      }
    }
  }
}
