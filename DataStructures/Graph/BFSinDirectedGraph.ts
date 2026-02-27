class DirectedGraph{
    private adjacencyList: Map<string, string[]>

    constructor(){
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string): void{
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, [])
        }
    }
    
    addEdges(source: string, destination: string): void{
        this.adjacencyList.get(source)?.push(destination);
    }

    bfs(start: string):void{
        const visited = new Set<string>();
        const queue: string[] = [];

        visited.add(start)
        queue.push(start);

        while(queue.length > 0){
            const vertex  = queue.shift()!;
            console.log(vertex);

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