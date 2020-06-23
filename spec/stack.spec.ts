import 'jasmine';
import Stack, {StackWithList, checkParentheses} from '../stack';
import LinkedList from '../linkedList';

describe('Stack', () => {

    describe('Implementation with LinkedList', () => {
        it('should add / push  item', () => {
            const stack = new Stack();
            stack
                .push(1)
                .push('item 2')
                .push(3);
            expect(stack.toJSON()).toEqual({value: 3, next: {value: 'item 2', next: {value: 1}}});
        });

        it('should remove / pop item', () => {
            const stack = new Stack();
            stack
                .push(1)
                .push('item 2')
                .push(3)
                .pop();
            expect(stack.toJSON()).toEqual({value: 'item 2', next: {value: 1}});
            stack.pop();
            expect(stack.toJSON()).toEqual({value: 1});
        });

        it('should read item from the top', () => {
            const stack = new Stack();
            stack
                .push(1)
                .push('item 2')
                .push('head')
            expect(stack.top()).toEqual('head');
        });

        it('should check if stack is empty', () => {
            const stack = new Stack();
            expect(stack.isEmpty()).toBe(true);
            stack
                .push(1)
                .push('item 2')
                .push(3);
            expect(stack.isEmpty()).toBe(false);
        });

        it('should clear the stack', () => {
            const stack = new Stack();
            stack
                .push(1)
                .push('item 2')
                .push(3);
            expect(stack.isEmpty()).toBe(false);
            stack.clear();
            expect(stack.isEmpty()).toBe(true);
        });
    });

    // Задачки

    describe('Task 1: ', () => {

        it('should use List as store for Stack', () => {
            /** TODO: Реалізувати Стек / Stack на базі класу List.
             * Імплементація повинна відповідати наведеній вище специфікації
             **/
            const stackWithList = new StackWithList() as Stack;
            expect(stackWithList.push).toBeDefined();
            expect(stackWithList.pop).toBeDefined();
            expect(stackWithList.top).toBeDefined();
            expect(stackWithList.isEmpty).toBeDefined();
        });

    });

    describe('Task 2: ', () => {

        it('should reverse LinkedList with Stack', () => {
            /** TODO: Розвернути LinkedList за допомогою стеку **/
            const linkedList = new LinkedList();
            linkedList.add(1).add(2).add(3).add(4).add(5);
            expect(linkedList.toJSON()).toEqual({value: 5, next: {value: 4, next: {value:3, next: {value: 2, next: {value: 1}}}}});
            // FIXME: Використайте стек для реверсу
            // const stack = new Stack();
            expect(linkedList.toJSON()).toEqual({value: 1, next: {value: 2, next: {value:3, next: {value: 4, next: {value: 5}}}}});
        });

    });

    describe('Task 3: ', () => {

        it('should check for balanced parentheses in an expression with Stack', () => {
            /** TODO: Перевірка на балансування дужок у рядку.
             * Використайте стек, щоб перевірити чи дужки збалансовані у тексті.
             **/
            expect(checkParentheses('[()]{}{[()()]()}')).toBe(true);
            expect(checkParentheses('[(])')).toBe(false);
        });

    });

});