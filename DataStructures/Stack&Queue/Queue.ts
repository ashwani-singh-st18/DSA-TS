// Queue -> FIFO

class Queue<T> {
    private items: T[] = [];

    // push element onto queue
    enqueue(element: T): void{
        this.items.push(element)
    }
    dequeue() : T | undefined {
        return this.items.shift()
    }
    peek() : T | undefined{
        return this.items[0]
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    size(): number {
        return this.items.length;
    }
    clear() : void{
        this.items = []
    }
    print() : void{
        console.log(this.items.toString());
    }    
}


const queue = new Queue<string>();

queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")
queue.enqueue("D")

queue.print()

queue.dequeue()
queue.print()
