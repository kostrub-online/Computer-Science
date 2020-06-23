import LinkedList from './linkedList';

class Stack {

    private store = new LinkedList();

    // O(n) -> 1
    push<T>(item: T): Stack {
        this.store.add(item);
        return this;
    }

    // O(n) -> 1
    pop(): Stack {
        this.store.remove(0);
        return this;
    }

    // O(n) -> n успадковує з LinkedList методу get, але технічно ми постійно читаємо з голови списку без циклу O(n) -> 1
    top<T>(): T {
        return this.store.get(0);
    }

    // O(n) -> 1
    isEmpty(): boolean {
        return !this.store.length;
    }

    // O(n) -> 1
    clear(): Stack {
        this.store.clear();
        return this;
    }

    toJSON(): Object {
        // Note: For testing only
        return this.store.toJSON();
    }

}

export class StackWithList {
    // FIXME: Task 1
}

export function checkParentheses(expression: string): boolean {
    // FIXME: Task 3
    return false;
}

export default Stack;