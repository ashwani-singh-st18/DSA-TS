class TreeNode<T>{
   value: T
   left: TreeNode<T> | null
   right: TreeNode<T> | null

   constructor(value: T){
        this.value = value
        this.left = null
        this.right = null
   }
}

class BinarySearchTree<T>{
    root: TreeNode<number> | null

    constructor(){
        this.root = null
    }

    insert(value: number): void{
        const newNode = new TreeNode(value)

        if(!this.root){
            this.root = newNode
            return;
        }

        let current = this.root;
        while(true){
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode
                    return;
                }
                current = current.left 
            }else{
                if(current.right === null){
                    current.right = newNode
                    return; 
                }
                current = current.right;
            }
        }
    }
    search(value: number): boolean{
        let current = this.root;

        while(current != null){
            if(value === current.value){
                return true;
            } else if(value < current.value){
                current = current.left
            }else{
                current = current.right;
            }
        }
        return false;
    }
    
    delete(value: number): void{
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(node: TreeNode<number> | null, value: number): TreeNode<number> | null{

        if(node === null) return null;

        // Step 1: Find node
        if(value < node.value){
            node.left = this.deleteNode(node.left, value);
        }
        else if(value > node.value){
            node.right = this.deleteNode(node.right, value);
        }
        else{
            // NODE FOUND

            // CASE 1: No Child
            if(node.left === null && node.right === null){
                return null;
            }
            
            // CASE 2: One Child
            if(node.left === null){
                return node.right;
            }
            if(node.right === null){
                return node.left;
            }

            // CASE 3: Two children
            const successor = this.findMin(node.right);
            node.value = successor.value;
            node.right = this.deleteNode(node.right, successor.value);

        }
        return node;
    }

    private findMin(node: TreeNode<number>): TreeNode<number>{
        while(node.left !== null){
            node = node.left;
        }
        return node;
    }
}