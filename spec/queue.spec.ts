import 'jasmine';
import Queue, {QueueWithLinkedList} from '../queue';
import Stack from '../stack';

describe('Queue', () => {

    describe('Implementation with List', () => {
        it('should add enQueue / push item', () => {
            const queue = new Queue();
            queue
                .enQueue(1)
                .enQueue('item 2')
                .push(3);
            expect(queue.toArray()).toEqual([1, 'item 2', 3]);
        });

        it('should remove deQueue / pop item', () => {
            const queue = new Queue();
            queue
                .enQueue(1)
                .enQueue('item 2')
                .push(3)
                .push(4)
                .deQueue()
                .pop();
            expect(queue.toArray()).toEqual([3, 4]);
            queue.pop();
            expect(queue.toArray()).toEqual([4]);
        });

        it('should read item from the front / peek', () => {
            const queue = new Queue();
            queue
                .push('head')
                .enQueue(1)
                .enQueue('item 2')
            expect(queue.front()).toEqual('head');
            expect(queue.peek()).toEqual('head');
        });

        it('should check if queue is empty', () => {
            const queue = new Queue();
            expect(queue.isEmpty()).toBe(true);
            queue
                .push(1)
                .push('item 2')
                .push(3);
            expect(queue.isEmpty()).toBe(false);
        });

        it('should clear the queue', () => {
            const queue = new Queue();
            queue
                .push(1)
                .push('item 2')
                .push(3);
            expect(queue.isEmpty()).toBe(false);
            queue.clear();
            expect(queue.isEmpty()).toBe(true);
        });
    });

    // Задачки

    describe('Task 1: ', () => {

        it('should have limit for enQueue operation', () => {
            /** TODO: Додати обмеження для Черги. 
             * Наприклад, уявіть що це черга в ліфт з обмеженим числом пасажирів
             **/
            spyOn(console, 'warn').and.callThrough();
            const queue = new Queue({limit: 3});
            queue
                .enQueue(1)
                .enQueue(2)
                .enQueue(3)
                .enQueue(4);
            expect(console.warn).toHaveBeenCalledWith('Limit of 3 exceeded');
            expect(queue.toArray()).toEqual([1, 2, 3]);
        });

    });

    describe('Task 2: ', () => {

        it('should reverse stack with queue', () => {
            /** TODO: Дуже поширена задача на інтерв'ю. 
             * Треба розвернути Стек за допомогою Черги.
             **/
            const stack = new Stack();
            stack
                .push(1)
                .push(2)
                .push(3);
            
            //FIXME: Використайте Чергу для реверсу Стеку
            // const queue = new Queue();

            expect(stack.toJSON()).toEqual({value: 1, next: {value: 2, next: {value: 3}}});
        });

    });

    describe('Task 3: ', () => {

        it('should reverse queue with two queues', () => {
            /** TODO: Також поширена задача на інтерв'ю. 
             * Треба розвернути Чергу за допомогою двох Черг.
             **/
            const queue = new Queue();
            queue
                .enQueue(1)
                .enQueue(2)
                .enQueue(3)
                .enQueue(4)
                .enQueue(5);

            //FIXME: Використайте черги queue1 та queue2 для реверсу queue
            // const queue1 = new Queue();
            // const queue2 = new Queue();

            expect(queue.toArray()).toEqual([5, 4, 3, 2, 1]);
        });

    });

    describe('Task 4: ', () => {

        it('should use LinkedList as store for Queue', () => {
            /** TODO: Реалізувати Чергу / Queue на базі класу LinkedList.
             * Імплементація повинна відповідати наведеній вище специфікації
             **/
            const queueWithLinkedList = new QueueWithLinkedList() as Queue;
            expect(queueWithLinkedList.enQueue).toBeDefined();
            expect(queueWithLinkedList.push).toBeDefined();
            expect(queueWithLinkedList.deQueue).toBeDefined();
            expect(queueWithLinkedList.pop).toBeDefined();
            expect(queueWithLinkedList.front).toBeDefined();
            expect(queueWithLinkedList.peek).toBeDefined();
            expect(queueWithLinkedList.isEmpty).toBeDefined();
        });

    });

});