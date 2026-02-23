// Node class
class ListNode<T> {
    data : T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next= null
    }
}

// Linked List class
class LinkedList<T>{
    head: ListNode<T> | null;
    private length: number;

    constructor(){
        this.head = null;
        this.length = 0;
    }

    // Add at the end
    append(data: T): void{
        const newNode = new ListNode(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
        this.length++;
    }

    // Add at the beginning
    prepend(data: T): void{
        const newNode = new ListNode(data)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    // Insert at specific index
    insertAt(data: T, index: number): void{
        if(index < 0 || index > this.length){
            return;
        }
        const newNode = new ListNode(data)

        if(index === 0){
            newNode.next = this.head
            this.head = newNode;
            return;
        }
        let current = this.head
        let prev : ListNode<T> | null = null; 
        let count = 0;
        
        while(current !== null && count < index){
            prev = current;
            current = current.next;
            count++;
        }
        if(prev === null) return
        prev.next = newNode;
        newNode.next = current;
    }

    sizeOf(): number{
        return this.length
    }
    isEmpty(): boolean{
        return this.length === 0;
    }
    // remove By value
    removeData(data: T): boolean {
        let cur = this.head;
        let prev = null
        while(cur !== null){
            if(cur.data === data){
                if(prev === null) this.head === cur.next
                else prev.next = cur.next
                this.length--
                return true;
            }
            prev = cur
            cur = cur.next
        }
        return false;
}

    // remove from the particular index.
    removeAt(index: number): T | null {
        if(index < 0 || index >= this.length){
            return null
        }
        let current = this.head
        let prev : ListNode<T> | null = null
        let count = 0
        // remove the head;
        if(index === 0 && current != null){
            this.head = current.next
            this.length--;
            return current.data
        }
        while(current != null && count < index){
            prev = current
            current = current.next
            count++
        }
        if(prev !== null && current !== null){
            prev.next = current.next
            this.length--;
            return current.data;
        }
        return null;
    }

    print(): void{
        let current = this.head
        let result = '';
        while(current!==null){
            result += current.data + '->';
            current = current.next;
        }
        result += 'null'
        console.log(result);
        
    }
}

const list = new LinkedList<number>()

list.append(10)
list.append(15)
list.append(20)

list.print()

list.removeData(15)
list.print()