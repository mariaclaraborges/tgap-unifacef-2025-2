class MultiEdgeGraph {
  constructor() {
    this.vertices = []; // vértices
    this.edges = [];    // arestas
  }

  // Adiciona vértice
  adcVertice(vertex) {
    this.vertices.push(vertex);
  }

  // Adiciona uma aresta (permite múltiplas entre os mesmos vértices)
  adcAresta(v1, v2, peso = null) {
    if (!this.vertices.includes(v1)) this.adcVertice(v1);
    if (!this.vertices.includes(v2)) this.adcVertice(v2);

    this.edges.push({ from: v1, to: v2, peso });
    this.edges.push({ from: v2, to: v1, peso }); // grafo não-direcionado
  }

  // Retorna todas as arestas entre dois vertices
  retornaArestas(v1, v2) {
    return this.edges.filter(
      (edge) => (edge.from === v1 && edge.to === v2) || (edge.from === v2 && edge.to === v1)
    );
  }

  // Mostra o grafo
  mostraGrafo() {
    console.log("Vértices:", this.vertices);
    console.log("Arestas:");
    this.edges.forEach((edge) => {
      console.log(`${edge.from} -> ${edge.to} (${edge.peso})`);
    });
  }
}


// Teste
const g = new MultiEdgeGraph();

g.adcAresta("Franca", "Ribeirão Corrente", 34);
g.adcAresta("Franca", "Ribeirão Corrente", 27); 
g.adcAresta("Franca", "Patrocínio Paulista", 19);
g.adcAresta("Franca", "Restinga", 15);

g.mostraGrafo();

// Exemplo: listar todas as arestas entre Franca e Ribeirão Corrente
console.log("Rotas Franca/Ribeirão Corrente:", g.retornaArestas("Franca", "Ribeirão Corrente"));
