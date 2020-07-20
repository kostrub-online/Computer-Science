class Node<T> {
    constructor(data: T, left?: Node<T>, right?: Node<T>) {
        this.data = data;
        if(left) {
            this.left = left;
        }
        if(right) {
            this.right = right;
        }
    }

    data: T;
    left?: Node<T>;
    right?: Node<T>;
}

// Note: Custom simple BST example
class Tree {

    private root: Node<unknown>;

    // O(n) -> log(n) if tree is balanced, O(n) -> n for LinkedList like tree
    insert<T>(root: Node<T>|undefined, node: Node<T>): Node<T> {
        if(root) {
            if (node.data < root.data) {
                root.left = this.insert(root.left, node);
            }
            if (node.data > root.data) {
                root.right = this.insert(root.right, node);
            }
        } else {
            root = node;
        }
        return root;
    }

    // O(n) -> log(n)
    search<T>(root: Node<T>|undefined, data: T): Node<T>|undefined {
        let result = undefined;
        if(root) {
            if (data < root.data) {
                result = this.search(root.left, data);
            } else if (data > root.data) {
                result = this.search(root.right, data);
            } else {
                result = root;
            }
        }
        return result;
    }

    // O(n) -> log(n)
    remove<T>(root: Node<T>|undefined, data: T): Node<T> {
        if(root) {
            if (data < root.data) {
                root.left = this.remove(root.left, data);
            } else if (data > root.data) {
                root.right = this.remove(root.right, data);
            } else {
                if(root.left) {
                    const leftMaxNode = this.findMaxNode(root.left);
                    root.data = leftMaxNode.data;
                    root.left = this.remove(root.left, leftMaxNode.data);
                } else if(root.right) {
                    root = root.right;
                } else {
                    root = undefined;
                }
            }
        }
        return root;
    }

    // O(n) -> log(n)
    findMinNode<T>(root: Node<T> = this.root as Node<T>): Node<T> {
        const minNode = root;
        // FIXME: Task 1
        return minNode;
    }

    // O(n) -> log(n)
    findMaxNode<T>(root: Node<T> = this.root as Node<T>): Node<T> {
        let maxNode = root;
        if(root.right) {
            maxNode = this.findMaxNode(root.right);
        }
        return maxNode;
    }

    // O(n) -> log(n)
    add<T>(data: T): Tree {
        this.root = this.insert(this.root, new Node(data));
        return this;
    }

    // O(n) -> log(n)
    find<T>(data: T): Node<T>|undefined {
        return this.search(this.root, data) as Node<T>|undefined;
    }

    findParent<T>(data: T): Node<T> {
        const parentNode = this.root as Node<T>; 
        // FIXME: Task 2
        return parentNode;
    }

    // O(n) -> log(n)
    delete<T>(data: T): Tree {
        this.root = this.remove(this.root, data);
        return this;
    }

    // O(n) -> n
    nodeHeight<T>(node: Node<T>): number {
        if(node) {
            return Math.max(
                this.nodeHeight(node.left),
                this.nodeHeight(node.right)
            ) + 1;
        }
        return -1;
    }

    // O(n) -> n
    height(): number {
        return this.nodeHeight(this.root);
    }

    // O(n) -> 1
    clear() {
        this.root = undefined;
        return this;
    }

    toJSON(): Object {
        // Note: For testing only
        return JSON.parse(JSON.stringify(this.root || {}));
    }

    isBST(): boolean {
        // FIXME: Task 3
        return false;
    }

    isBalanced(): boolean {
        // FIXME: Task 4
        return false;
    }

    balance(): Tree {
        // FIXME: Task 5
        return this;
    }

}

export default Tree;