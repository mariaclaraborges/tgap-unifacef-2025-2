// Questão 1
const grafo = {
  "Igarapava": ["Ituverava", "Jeriquara", "Rifaina"],
  "Ituverava": ["Igarapava", "Guará", "Jeriquara"],
  "Guará": ["Ituverava", "São Joaquim da Barra", "Ribeirão Corrente"],
  "São Joaquim da Barra": ["Guará", "São José da Bela Vista"],
  "São José da Bela Vista": ["São Joaquim da Barra", "Ribeirão Corrente", "Franca"],
  "Ribeirão Corrente": ["Guará", "Jeriquara", "São José da Bela Vista", "Franca"],
  "Jeriquara": ["Igarapava", "Ituverava", "Ribeirão Corrente", "Pedregulho", "Cristais Paulista"],
  "Rifaina": ["Igarapava", "Pedregulho"],
  "Pedregulho": ["Rifaina", "Jeriquara", "Cristais Paulista"],
  "Cristais Paulista": ["Pedregulho", "Jeriquara", "Franca"],
  "Franca": ["Ribeirão Corrente", "São José da Bela Vista", "Cristais Paulista", "Claraval", "Ibiraci", "Patrocínio Paulista", "Restinga", "Batatais"],
  "Claraval": ["Franca", "Ibiraci"],
  "Ibiraci": ["Claraval", "Franca"],
  "Patrocínio Paulista": ["Franca", "Itirapuã", "Batatais"],
  "Itirapuã": ["Patrocínio Paulista"],
  "Restinga": ["Franca", "Batatais"],
  "Batatais": ["Franca", "Restinga", "Patrocínio Paulista"]
};

// Questão 2
// Na imagem aparecem duas ligações entre Franca e Ribeirão Corrente.  No grafo não deveria existir duas arestas diretas entre os mesmos vértices (isso caracterizaria um multigrafo).
// O mais provável é que a ligação direta correta entre Franca e Ribeirão Corrente é 34 km.
// O caminho de 27 km não é uma ligação direta, mas sim um trecho de São José da Bela Vista → Ribeirão Corrente (27 km).
// Depois, de Ribeirão Corrente até Franca, temos 34 km.
// Ou seja, na hora de montar o grafo, não devemos criar duas arestas diretas diferentes entre Franca ↔ Ribeirão Corrente.

