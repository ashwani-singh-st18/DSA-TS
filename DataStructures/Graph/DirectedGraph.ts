class DirectedGraph{
    private adjacencyList: Map<string, string[]>

    constructor(){
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string): void{
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(source: string, destination: string): void{
        this.adjacencyList.get(source)?.push(destination);
    }

    print(): void{
        for(let [vertex, neighbors] of this.adjacencyList){
            console.log(vertex + " -> " + neighbors.join(", "));
        }
    }
}

const graph = new DirectedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "A")
graph.print()
