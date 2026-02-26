// Un Directed Graph
class Graph{
    private adjacencyList: Map<string, string[]>

    constructor(){
        this.adjacencyList = new Map();
    }

    // For Vertex
    addVertex(vertex: string): void{
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, []);
        }
    }
    
    // Add edge
    addEdge(vertex1: string, vertex2: string): void{
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    print(): void{
        for(let [vertex, edges] of this.adjacencyList){
            console.log(vertex + "->" + edges.join(", "));
        }
    }
}


const graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B");
graph.addEdge("A", "C")

graph.print();