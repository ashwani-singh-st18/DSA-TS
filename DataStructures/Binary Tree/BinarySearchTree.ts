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
}