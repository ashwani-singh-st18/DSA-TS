class TrieNode{
    children: {[key: string]: TrieNode};
    isEndOfWord: boolean;

    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    private root: TrieNode;

    constructor(){
        this.root = new TrieNode();
    }

    insert(word: string): void{
        let current = this.root;

        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }
}

