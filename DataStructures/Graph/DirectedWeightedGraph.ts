class DirectedWeightedGraph{
    private adjacencyList: Map<string, {node: string, weight: number}[]>

    constructor(){
        this.adjacencyList = new Map()
    }

    addVertex(vertex: string): void{
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(source: string, destination: string, weight: number): void{
        this.adjacencyList.get(source)?.push({
            node: destination,
            weight: weight  
        });
    }

    print(): void{
        for(let[vertex, neighbors] of this.adjacencyList){
            const result = neighbors
                .map(n => `${n.node}(${n.weight})`)
                .join(", ");

                console.log(vertex + " -> " + result)
        }
    }
}