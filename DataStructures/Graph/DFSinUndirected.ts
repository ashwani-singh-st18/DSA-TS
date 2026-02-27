class DFSGraph {
    private adjacencyList: Map<string, string[]>

    constructor() {
        this.adjacencyList = new Map();
    }
    
    addVertex(vertex: string): void{
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, [])
        }
    }

    addEdge(vertex1: string, vertex2: string): void{
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    dfs(start: string): void{
        const visited = new Set<string>();

        const dfsHelper = (vertex: string) => {
            visited.add(vertex);
            console.log(vertex);

            const neighbors = this.adjacencyList.get(vertex);

            for(const neighbor of neighbors!){
                if(!visited.has(neighbor)){
                    dfsHelper(neighbor);
                }
            }
        }
        dfsHelper(start);
    }
}