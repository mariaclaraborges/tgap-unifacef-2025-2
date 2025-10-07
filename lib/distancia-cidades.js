import WeightedGraph from "./weighted-graph.class"

export function criarGrafoCidades() {
  const grafo = new WeightedGraph(false) // grafo não direcionado

  // Adições das arestas (cidades) com suas distâncias (km)
  grafo.addEdge("Igarapava", "Ituverava", 37)
  grafo.addEdge("Igarapava", "Jeriquara", 41)
  grafo.addEdge("Igarapava", "Rifaina", 47)

  grafo.addEdge("Ituverava", "Guará", 14)
  grafo.addEdge("Guará", "São Joaquim da Barra", 21)
  grafo.addEdge("São Joaquim da Barra", "São José da Bela Vista", 37)
  grafo.addEdge("São José da Bela Vista", "Franca", 33)
  grafo.addEdge("São José da Bela Vista", "Ribeirão Corrente", 27)

  grafo.addEdge("Guará", "Ribeirão Corrente", 23)
  grafo.addEdge("Guará", "Franca", 25)

  grafo.addEdge("Ribeirão Corrente", "Franca", 34)
  grafo.addEdge("Ribeirão Corrente", "Jeriquara", 28)

  grafo.addEdge("Jeriquara", "Pedregulho", 15)
  grafo.addEdge("Jeriquara", "Cristais Paulista", 25)

  grafo.addEdge("Pedregulho", "Rifaina", 28)
  grafo.addEdge("Pedregulho", "Cristais Paulista", 23)

  grafo.addEdge("Cristais Paulista", "Franca", 21)

  grafo.addEdge("Franca", "Restinga", 16)
  grafo.addEdge("Restinga", "Batatais", 40)
  grafo.addEdge("Franca", "Batatais", 50)

  grafo.addEdge("Franca", "Patrocínio Paulista", 19)
  grafo.addEdge("Patrocínio Paulista", "Itirapuã", 9)
  grafo.addEdge("Patrocínio Paulista", "Batatais", 64)

  grafo.addEdge("Franca", "Claraval", 24)
  grafo.addEdge("Claraval", "Ibiraci", 25)
  grafo.addEdge("Franca", "Ibiraci", 39)

  return grafo
}


const grafo = criarGrafoCidades()
const resultado = grafo.shortestDistance("Restinga")
console.log(resultado)