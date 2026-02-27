class DFSinDirected{
    private adjacencyList: Map<string, string[]>

    constructor(){
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string): void{
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdges(source: string, destination: string): void{
        this.adjacencyList.get(source)?.push(destination);
    }
    
    Dfs(start: string):void{
        const visited = new Set<string>()

        const dfsHelper = (vertex: string) => {
            visited.add(vertex)
            console.log(vertex)

            const neighbors = this.adjacencyList.get(vertex)

            for(const neighbor of neighbors!){
                if(!visited.has(neighbor)){
                    dfsHelper(neighbor)
                }
            }
        }
        dfsHelper(start)
    }
    
}