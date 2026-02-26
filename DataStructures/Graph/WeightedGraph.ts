// For undirected Graph
class WeightedGraph{
    private adjacencyList: Map<string, {node: string; weight: number}[]>

    constructor(){
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string): void{
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, [])
        }
    }

    addEdge(vertex1: string, vertex2: string, weight: number): void{
        this.adjacencyList.get(vertex1)?.push({node: vertex2, weight})
        this.adjacencyList.get(vertex2)?.push({node: vertex1, weight});
    }
    print(): void{
        for(let[vertex, neighbors] of this.adjacencyList){
            const result = neighbors
                .map(n => `${n.node}(${n.weight})`)
                .join(", ");
                console.log(vertex + " -> " + result);
        }
    }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 5);
graph.addEdge("A", "C", 10);

graph.print();