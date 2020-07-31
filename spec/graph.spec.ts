import 'jasmine';
import Graph from '../graph';

const createGraphHelper = () => {
    const graph = new Graph();
    graph
        .addNode('Kyiv')
        .addNode('Lviv')
        .addNode('Kharkiv')
        .addNode('Odessa')
        .addNode('Poltava')
        .addNode('Dnipro')
        .addConnection('Kyiv', 'Lviv', 540)
        .addConnection('Kyiv', 'Poltava', 350)
        .addConnection('Kyiv', 'Odessa', 470)
        .addConnection('Odessa', 'Dnipro', 450)
        .addConnection('Dnipro', 'Kharkiv', 220)
        .addConnection('Kharkiv', 'Poltava', 145)
        .addConnection('Poltava', 'Dnipro', 160);
/*
                    Kyiv
                .     .   .
           .                    .                 Kharkiv
     Lviv             .              .       .       .
                                     Poltava     . 
                      .                     .   
                                      .  Dnipro
                      .         .
                    Odessa .
*/
    return graph;
}

describe('Graph', () => {

    describe('Simple', () => {

        it('should add nodes with connections', () => {
            const graph = createGraphHelper();
            const serializedGraph = graph.toJSON();
            expect(serializedGraph['vertices']).toEqual({store: {
                0: 'Kyiv', 
                1: 'Lviv', 
                2: 'Kharkiv', 
                3: 'Odessa', 
                4: 'Poltava', 
                5: 'Dnipro' 
            }});
            expect(serializedGraph['connections']).toEqual({store: {
                0: { store: { 1: 540, 3: 470, 4: 350 } },
                1: { store: { 0: 540 } }, 
                2: { store: { 4: 145, 5: 220 } }, 
                3: { store: { 0: 470, 5: 450 } }, 
                4: { store: { 0: 350, 2: 145, 5: 160 } }, 
                5: { store: { 2: 220, 3: 450, 4: 160 } } 
            }});
        });

        it('should find and read data from nodes', () => {
            const graph = createGraphHelper();
            expect(graph.getNode('Kyiv')).toBeDefined();
        });

        it('should modify data for nodes', () => {
            const graph = createGraphHelper();
            graph.updateNode('Kyiv', 'notKiev');
            expect(graph.getNode('Kyiv')).toBeUndefined();
            expect(graph.getNode('notKiev')).toBeDefined();
        });

        it('should remove nodes with connections', () => {
            const graph = createGraphHelper();
            graph.removeNode('Poltava');
            const serializedGraph = graph.toJSON();
            expect(serializedGraph['vertices']).toEqual({store: {
                0: 'Kyiv', 
                1: 'Lviv', 
                2: 'Kharkiv', 
                3: 'Odessa', 
                5: 'Dnipro' 
            }});
            expect(serializedGraph['connections']).toEqual({store: {
                0: { store: { 1: 540, 3: 470 } },
                1: { store: { 0: 540 } }, 
                2: { store: { 5: 220 } }, 
                3: { store: { 0: 470, 5: 450 } }, 
                5: { store: { 2: 220, 3: 450 } } 
            }});
        });

        it('should check if nodes are connected', () => {
            const graph = createGraphHelper();
            expect(graph.isConnected('Kyiv', 'Lviv')).toBe(true);
            expect(graph.isConnected('Lviv', 'Kyiv')).toBe(true);
            expect(graph.isConnected('Lviv', 'Kharkiv')).toBe(false);
            expect(graph.isConnected('Kharkiv', 'Lviv')).toBe(false);
        });

        it('should return all siblings for node', () => {
            const graph = createGraphHelper();
            const siblings = graph.getSiblings('Odessa');
            expect(siblings).toEqual(['Kyiv', 'Dnipro']);
        });

    });

    // Задачки

    describe('Task 1: ', () => {

        it('should find best / shortest path for nodes in the graph', () => {
            /** TODO: Реалізувати метод, який повертає найкращий шлях між двома Вершинами Графу враховуючи вагу Ребер. 
             * Наприклад, для мапи доріг - це буде оптимальний маршрут між двома містами.
             * Підказка: Це класична задача / проблема Графів, алгоритми можна підглянути тут: http://tiny.cc/fqwlsz
            **/
            const graph = createGraphHelper();
            expect(graph.bestPath('Kharkiv', 'Odessa')).toEqual(['Kharkiv', 'Dnipro', 'Odessa']);
        });

    });

});