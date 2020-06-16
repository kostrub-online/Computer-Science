class Node<T> {
    constructor(value: T, next?: Node<T>) {
        this.value = value;
        if(next) {
            this.next = next;
        }
    }

    value: T;
    next?: Node<T>;
    // FIXME: Task 3
    prev?: Node<T>;
}

class LinkedList {

    private head: Node<unknown>;
    length: number = 0;

    // O(n) -> 1
    add<T>(value: T): LinkedList {
        this.head = new Node(value, this.head);
        this.length += 1;
        return this;
    }

    // O(n) -> n
    getNode<T>(index: number): Node<T> {
        if(index >= 0 && index <= this.length) {
            let item = this.head;
            for(let i = 0; i<index; i++) {
                item = item.next;
            }
            return item as Node<T>;
        }
    }

    // O(n) -> n
    get<T>(index: number): T {
        const item = this.getNode(index);
        if(item) {
            return item.value as T;
        }
    }

    // O(n) -> n
    insert<T>(value: T, index: number): LinkedList {
        if(index === 0) {
            this.add(value);
        } else {
            const prevItem = this.getNode(--index);
            if(prevItem) {
                const newItem = new Node(value, prevItem.next);
                prevItem.next = newItem;
                this.length++;
            }
        }
        return this;
    }

    // O(n) -> n
    update<T>(value: T, index: number): LinkedList {
        const item = this.getNode(index);
        if(item) {
            item.value = value;
        }
        return this;
    }

    // O(n) -> n
    remove(index: number): LinkedList {
        if(index === 0) {
            this.head = undefined;
            this.length = 0;
        } else {
            const prevItem = this.getNode(--index);
            if(prevItem) {
                prevItem.next = prevItem.next ? prevItem.next.next : undefined; 
                this.length -= 1;
            }
        }
        return this;
    }

    // O(n) -> 1
    clear(): LinkedList {
        return this.remove(0);
    }

    // Note: Рекурсивний метод O(n) -> n
    private printItems<T>(item?: Node<T>) {
        if(item) {
            console.log(item.value);
            return this.printItems(item.next);
        }
    } 

    // O(n) -> n
    print(): void {
        this.printItems(this.head);
    }


    toJSON(): Object {
        // Note: For testing only
        return JSON.parse(JSON.stringify(this.head || {}));
    }

    // O(n) -> n
    reverse(): void {
        // FIXME: Task 1
    }

    // O(n) -> 1
    push<T>(value?: T): LinkedList {
        // FIXME: Task 2
        return this;
    }

}

export default LinkedList;