import List from './list';

// Decorator
function alias(name:string): Function {
   return function (target: Object, key: string, descriptor: PropertyDescriptor) {
       target[name] = descriptor.value;
       return descriptor;
   };
}

class Queue {

    constructor(props?: {limit?: number}) {
        // FIXME: Task 1
    }

    private store = new List();
    
    length: number = 0;
    frontIndex: number = 0;

    push: Queue['enQueue'];
    pop: Queue['deQueue'];
    peek: Queue['front'];

    // O(n) -> 1
    @alias('push')
    enQueue<T>(item: T): Queue {
        this.store.add(item);
        this.length++;
        return this;
    }

    // O(n) -> 1
    @alias('pop')
    deQueue(): Queue {
        if(this.length > 0) {
            this.store.remove(this.frontIndex);
            this.length--;
            this.frontIndex++;
        } else {
            this.frontIndex = 0;
        }
        return this;
    }

    // O(n) -> 1
    @alias('peek')
    front<T>(): T {
        return this.store.get(this.frontIndex) as unknown as T;
    }

    // O(n) -> 1
    isEmpty(): boolean {
        return this.length <= 0;
    }

    // O(n) -> n
    toArray<T>(): Array<T> {
        const arr = [];
        for(let i = 0; i < this.length; i++) {
            arr.push(this.store.get(this.frontIndex + i));
        }
        return arr;
    }

    // O(n) -> 1
    clear(): Queue {
        this.store = new List();
        this.length = 0;
        return this;
    }

}

export class QueueWithLinkedList {
    // FIXME: Task 4
}

export default Queue;