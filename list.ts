export interface ListType extends Object {}

class List {

    private store: ListType = {};

    // O(n) -> 1
    add<T>(value: T, index: number = Object.keys(this.store).length): ListType {
        this.store[index] = value;
        return this.store;
    }

    // O(n) -> 1
    get(index: number): number {
        return this.store[index];
    }

    // O(n) -> 1, after fix should be O(n) -> n
    remove(index: number): ListType {
        delete this.store[index];
        // FIXME: Task 2
        return this.store; 
    }

    // O(n) -> n
    print(): string {
        const result = Object.keys(this.store).map(i => this.store[i]).join(' ') as string;
        console.log(result);
        return result;
    }

    // O(n) -> 1
    clear(): ListType {
        this.store = {};
        return this.store;
    }

    // O(n) -> n
    reverse(): string {
        // FIXME: Task 1
        return '';
    }

    // O(n) -> 1
    length(): number {
        // FIXME: Task 3
        return 0;
    }

}

export default List;