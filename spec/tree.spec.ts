import 'jasmine';
import Tree from '../tree';

const createTreeHelper = () => {
    const tree = new Tree();
    tree.add(5).add(3).add(2).add(1).add(4).add(9).add(7).add(6).add(8).add(11).add(10).add(12);
/*
                    5
                 /     \
               3         9
             /  \      /   \
           2     4   7      11
         /         /  \    /  \
        1         6    8  10   12
*/
    return tree;
}

describe('Tree', () => {

    describe('BST', () => {

        it('should add nodes', () => {
            const tree = createTreeHelper();
            expect(tree.toJSON()).toEqual({
                data: 5, 
                left: {      
                    data: 3,
                    left: {
                        data: 2,
                        left: {
                            data: 1
                        }
                    },
                    right: {
                        data: 4
                    }
                }, 
                right: {
                    data: 9,
                    left: {
                        data: 7,
                        left: {
                            data: 6
                        },
                        right: {
                            data: 8
                        }
                    },
                    right: {
                        data: 11,
                        left: {
                            data: 10
                        },
                        right: {
                            data: 12
                        }
                    }
                }
            });
        });

        it('should find and read data from nodes', () => {
            const tree = createTreeHelper();
            let node = tree.find(3);
            expect(node.data).toBe(3);
            expect(node.left.data).toBe(2);
            expect(node.right.data).toBe(4);
            node = tree.find(2);
            expect(node.data).toBe(2);
            expect(node.left.data).toBe(1);
            expect(node.right).toBeUndefined();
            node = tree.find(9);
            expect(node.data).toBe(9);
            expect(node.left.data).toBe(7);
            expect(node.right.data).toBe(11);
            node = tree.find(6);
            expect(node.data).toBe(6);
            expect(node.left).toBeUndefined();
            expect(node.right).toBeUndefined();
        });

        it('should find max node in the tree', () => {
            const tree = createTreeHelper();
            const node = tree.findMaxNode();
            expect(node.data).toBe(12);
        });

        it('should remove nodes', () => {
            const tree = createTreeHelper();
            tree
                .delete(1)
                .delete(4);
            tree.delete(9);
            expect(tree.toJSON()).toEqual({
                data: 5, 
                left: {      
                    data: 3,
                    left: {
                        data: 2
                    }
                }, 
                right: {
                    data: 8,
                    left: {
                        data: 7,
                        left: {
                            data: 6
                        }
                    },
                    right: {
                        data: 11,
                        left: {
                            data: 10
                        },
                        right: {
                            data: 12
                        }
                    }
                }
            });
        });

        it('should have correct height', () => {
            let tree = new Tree();
            expect(tree.height()).toBe(-1);
            tree.add(5);
            expect(tree.height()).toBe(0);
            tree = createTreeHelper();
            expect(tree.height()).toBe(3);
        });

        it('should clear the tree', () => {
            const tree = new Tree();
            tree.add(2).add(1).add(3);
            tree.clear();
            expect(tree.toJSON()).toEqual({});
        });

    });

    // Задачки

    describe('Task 1: ', () => {

        it('should find minimum node in tree', () => {
            /** TODO: Реалізувати метод findMinNode, 
             * який повертає Вузол з мінімальним значенням у дереві 
            **/
            const tree = createTreeHelper();
            expect(tree.findMinNode().data).toBe(1);
        });

    });

    describe('Task 2: ', () => {

        it('should find parent for node', () => {
            /** TODO: Знайти Батьківський вузол по значенню.
             * Дуже поширена задача на інтерв'ю
            **/
            const tree = createTreeHelper();
            expect(tree.findParent(1).data).toBe(2);
            expect(tree.findParent(11).data).toBe(9);
        });

    });

    describe('Task 3: ', () => {

        it('should check if tree is BST', () => {
            /** TODO: Метод повинен перевіряти чи дерево є Бінарним деревом пошуку.
             * Підказка: Ліворуч всі значення менше, праворуч - більше.
            **/
            const tree = createTreeHelper();
            expect(tree.isBST()).toBeTruthy();
            tree.find(11).data = 100;
            expect(tree.isBST()).toBeFalsy();
        });

    });

    describe('Task 4: ', () => {

        it('should check if tree is balanced', () => {
            /** TODO: Метод повинен перевіряти чи дерево є збалансованим.
             * Підказка: Дерево є збалансованим коли висота лівого та правого піддерева відрізняється максимум на 1 для всіх Вузлів.
            **/
            let tree = createTreeHelper();
            expect(tree.isBalanced()).toBeTruthy();
            tree = new Tree();
            tree.add(1).add(2).add(3).add(4).add(5);
            expect(tree.isBalanced()).toBeFalsy();
        });

    });

    describe('Task 5: ', () => {

        it('should balance tree', () => {
            /** TODO: Метод повинен збалансувати дерево.
             * Підказка: дерево -> масив -> сортування -> дерево
            **/
            const tree = new Tree();
            tree.add(1).add(2).add(3).add(4).add(5);
            expect(tree.isBalanced()).toBeFalsy();
            tree.balance();
            expect(tree.isBalanced()).toBeTruthy();
        });

    });

});