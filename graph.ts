import List from './list';

// Note: Custom simple Graph
class Graph {

    vertices = new List();
    connections = new List();
    hashmap = {} as unknown; // For complex keys Map can be used
    index = 0;

    // O(n) -> 1
    addNode<T>(v: T) {
        this.hashmap[v] = this.index;
        this.vertices.add(v, this.index);
        this.index++;
        return this;
    }

    // O(n) -> 1
    getNode<T>(v: T) {
        const nodeIndex = this.getNodeIndex(v);
        return this.vertices.get(nodeIndex);
    }

    // O(n) -> 1
    updateNode<T>(v: T, newV: T) {
        this.hashmap[newV] = this.hashmap[v];
        delete this.hashmap[v];
        return this;
    }

    // O(n) -> |e| ammount of edges
    removeNode<T>(v: T) {
        const nodeIndex = this.getNodeIndex(v);
        const connections = this.getConnections(v);
        const connectionsStore = connections['store'];
        Object.keys(connectionsStore).map((index) => {
            this.getConnectionsByIndex(+index).remove(nodeIndex);
        });
        this.connections.remove(nodeIndex);
        this.vertices.remove(nodeIndex);
        delete this.hashmap[v];
        return this;
    }

    // O(n) -> 1
    getNodeIndex<T>(v: T): number {
        return this.hashmap[v] as number;
    }

    // O(n) -> 1
    addConnection<T>(v1: T, v2: T, weight: number = 1) {
        const nodeIndex1 = this.getNodeIndex(v1);
        const nodeIndex2 = this.getNodeIndex(v2);
        const connections1 = this.getConnections(v1);
        const connections2 = this.getConnections(v2)
        connections1.add(weight, nodeIndex2);
        connections2.add(weight, nodeIndex1);
        this.connections.add(connections1, nodeIndex1);
        this.connections.add(connections2, nodeIndex2);
        return this;
    }

    // O(n) -> 1
    getConnections<T>(v: T) {
        const nodeIndex = this.getNodeIndex(v);
        return this.getConnectionsByIndex(nodeIndex);
    }

    // O(n) -> 1
    getConnectionsByIndex(index: number) {
        return this.connections.get(index) as unknown as List || new List(); // Our LinkedList or Tree can be used here as well
    }

    // O(n) -> 1
    isConnected<T>(v1: T, v2: T): boolean {
        const nodeIndex2 = this.getNodeIndex(v2);
        return !!this.getConnections(v1).get(nodeIndex2);
    }

    // O(n) -> |e| due to conversion to Array
    getSiblings<T>(v: T): T[] {
        const connectionsStore = this.getConnections(v)['store'];
        return Object.keys(connectionsStore).map((index) => this.vertices.get(+index) as unknown as T);
    }

    // O(n) -> ? depends from implementation
    bestPath<T>(v1: T, v2: T): T[] {
        // FIXME: Task 1
        return [];
    }
 
    toJSON(): Object {
        // Note: For testing only
        return JSON.parse(`{
            "vertices": ${JSON.stringify(this.vertices)},
            "connections": ${JSON.stringify(this.connections)}
        }`);
    }

}

export default Graph;