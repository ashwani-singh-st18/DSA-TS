class Graph{
    private adjacencyList: Map<string, string[]>

    constructor(){
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string): void{
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: string, vertex2: string): void{
        this.adjacencyList.get(vertex1)?.push(vertex2)
        this.adjacencyList.get(vertex2)?.push(vertex1)
    }

    bfs(start: string): void{
        const visited = new Set<string>();
        const queue: string[] = []

        visited.add(start)
        queue.push(start)

        while(queue.length > 0){
            const vertex = queue.shift()!;
            console.log(vertex)

            const neighbors = this.adjacencyList.get(vertex);

            for(const neighbor of neighbors!){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}