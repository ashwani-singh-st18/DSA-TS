class TreeNode<T> {
    value: T
    left: TreeNode<T> | null
    right: TreeNode<T> | null

    constructor(value: T){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree{
    root: TreeNode<number> | null

    constructor(){
        this.root = null;
    }

    insert(value: number): void{
        const newNode = new TreeNode(value)

        if(!this.root){
            this.root = newNode;
            return;
        }

        let current = this.root;

        while(true){
            if(value < current.value) {
                if(!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value: number): boolean{
        let current = this.root

        while(current){
            if(value === current.value){
                return true
            }
            if(value < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }
    inorder(node: TreeNode<number> | null) : void{
        if(node === null) return

        this.inorder(node.left)
        console.log(node.value)
        this.inorder(node.right);
    }

    preorder(node: TreeNode<number> | null) : void{
        if(node === null) return

        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    postorder(node: TreeNode<number> | null) : void{
        if(node === null) return

        this.postorder(node.left)
        this.postorder(node.right)
        console.log(node.value);
        
    }

    levelorder(): void{
        if(!this.root) return;

        const queue : TreeNode<number>[] = [this.root];
        while(queue.length > 0){
            const current = queue.shift()!;
            console.log(current.value);


            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
    }
}


const bst = new BinarySearchTree();

bst.insert(10)
bst.insert(5)
bst.insert(20)
bst.insert(3)
bst.insert(7)

console.log("Inorder:")
bst.inorder(bst.root)

console.log("Preorder:")
bst.preorder(bst.root)

console.log("Postorder:")
bst.postorder(bst.root)

console.log("Level Order:")
bst.levelorder()