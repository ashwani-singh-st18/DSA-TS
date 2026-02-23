class DoublyListNode<T>{
    data: T;
    next: DoublyListNode<T> | null
    prev: DoublyListNode<T> | null

    constructor(data : T){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLL<T>{
    head: DoublyListNode<T> | null;
    tail: DoublyListNode<T> | null;
    private length: number;

    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(data: T): void{
        const newNode = new DoublyListNode(data)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            
            newNode.prev = this.tail
            if(this.tail){
                this.tail.next = newNode
            }
            this.tail = newNode;
        }
        this.length++
    }

    prepend(data: T): void{
        const newNode = new DoublyListNode(data)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode
            this.head = newNode;
        }
        this.length++;    
    }

    remove(data: T): boolean {
    let current = this.head;

    while (current !== null) {
        if (current.data === data) {

            // Case 1: Removing head
            if (current.prev === null) {
                this.head = current.next;
                if (this.head) {
                    this.head.prev = null;
                }
            }
            // Case 2: Removing tail
            else if (current.next === null) {
                this.tail = current.prev;
                if (this.tail) {
                    this.tail.next = null;
                }
            }
            // Case 3: Removing middle node
            else {
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }

            this.length--;
            return true;
        }

        current = current.next;
    }

    return false; // data not found
}

    print(): void{
       let current = this.head;
       let result = '';
       
       while(current != null){
        result += current.data + (current.next ? '<->' : '');
        current = current.next;
       }
       console.log(result);
    }

}


const dll = new DoublyLL<number>()
dll.append(1)
dll.append(2)
dll.append(3)
dll.append(4)

dll.prepend(0)

dll.print()

dll.remove(0)
dll.print()
