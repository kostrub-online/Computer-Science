import 'jasmine';
import LinkedList from '../linkedList';

describe('LinkedList', () => {

    it('should add items', () => {
        const linkedList = new LinkedList();
        linkedList
            .add(1)
            .add(2)
            .add(3);
        expect(linkedList.length).toBe(3); 
        expect(linkedList.toJSON()).toEqual({value: 3, next: {value: 2, next: {value: 1}}});
    });

    it('should read items', () => {
        const linkedList = new LinkedList();
        linkedList
            .add('bar')
            .add('foo')
            .add('qux');
        expect(linkedList.get(-1)).toBe(undefined);
        expect(linkedList.get(0)).toBe('qux');
        expect(linkedList.get(1)).toBe('foo');
        expect(linkedList.get(2)).toBe('bar');
        expect(linkedList.get(4)).toBe(undefined);
    });

    it('should insert item', () => {
        const linkedList = new LinkedList();
        linkedList
            .add(3)
            .add(2)
            .add(1)
            .insert(0, 0);
        expect(linkedList.length).toBe(4);  
        expect(linkedList.toJSON()).toEqual({value: 0, next: {value: 1, next: {value: 2, next: {value: 3}}}});
        linkedList.insert(4, 2);
        expect(linkedList.length).toBe(5);  
        expect(linkedList.toJSON()).toEqual({value: 0, next: {value: 1, next: {value: 4, next: {value: 2, next: {value: 3}}}}});
        linkedList.insert(9, 100);
        expect(linkedList.toJSON()).toEqual({value: 0, next: {value: 1, next: {value: 4, next: {value: 2, next: {value: 3}}}}});
        linkedList.insert(9, 5);
        expect(linkedList.length).toBe(6);  
        expect(linkedList.toJSON()).toEqual(
            {value: 0, next: {value: 1, next: {value: 4, next: {value: 2, next: {value: 3, next: {value:9}}}}}}
        );
    });

    it('should update item', () => {
        const linkedList = new LinkedList();
        linkedList
            .add('three')
            .add('two')
            .add('one')
            .update('last', 2);
        expect(linkedList.toJSON()).toEqual({value: 'one', next: {value: 'two', next: {value: 'last'}}});
    });

    it('should remove item', () => {
        const linkedList = new LinkedList();
        linkedList
            .add('three')
            .add('two')
            .add('one')
            .remove(1);
        expect(linkedList.length).toBe(2);  
        expect(linkedList.toJSON()).toEqual({value: 'one', next: {value: 'three'}}); 
        linkedList.remove(99);
        expect(linkedList.toJSON()).toEqual({value: 'one', next: {value: 'three'}});
        linkedList.remove(-1);
        expect(linkedList.toJSON()).toEqual({value: 'one', next: {value: 'three'}});
        linkedList.remove(1);
        expect(linkedList.toJSON()).toEqual({value: 'one'});
        expect(linkedList.length).toBe(1);  
        linkedList.remove(0);
        expect(linkedList.toJSON()).toEqual({});  
        expect(linkedList.length).toBe(0);  
    });

    it('should clear list', () => {
        const linkedList = new LinkedList();
        linkedList
            .add('some item 3')
            .add('some item 2')
            .add('some item 1')
            .clear();
        expect(linkedList.length).toBe(0); 
        expect(linkedList.toJSON()).toEqual({});
    });

    it('should print items in the list', () => {
        spyOn(console, 'log').and.callThrough();
        const linkedList = new LinkedList();
        linkedList
            .add('three')
            .add('two')
            .add('one')
            .print();
        expect(console.log).toHaveBeenCalledWith('one');
        expect(console.log).toHaveBeenCalledWith('two');
        expect(console.log).toHaveBeenCalledWith('three');
    });

    // Задачки

    describe('Task 1: ', () => {

        it('should print the linked list in reverse order', () => {
            /** TODO: Додати метод reverse для класу LinkedList, 
             * який друкує елементи списку у зворотному порядку не змінюючи сам зв'язаний список
            **/
            spyOn(console, 'log').and.callThrough();
            const linkedList = new LinkedList();
            linkedList
                .add('3')
                .add('2')
                .add('1')
                .reverse();
            expect(console.log).toHaveBeenCalledWith('3');
            expect(console.log).toHaveBeenCalledWith('2');
            expect(console.log).toHaveBeenCalledWith('1');
        });

    });

    describe('Task 2: ', () => {

        it('should be able to add items to the end of the list', () => {
            /** TODO: Зробити метод push для класу LinkedList таким чином,
            * щоб нові елементи додавалися в кінець зв'язаного списку
            **/
            const linkedList = new LinkedList();
            linkedList
                .push('1')
                .push('2')
                .push('3');
            expect(linkedList.toJSON()).toEqual({value: '1', next: {value: '2', next: {value: 3}}});
        });

    });

    describe('Task 3: ', () => {

        it('should be double linked list', () => {
            /** TODO: Додати можливість до класу LinkedList
             * зберігати посилання на попередній та наступний елемент списку
            **/
            const linkedList = new LinkedList();
            linkedList
                .add('three')
                .add('two')
                .add('one');
            const item0 = linkedList.getNode(0);
            const item1 = linkedList.getNode(1);
            const item2 = linkedList.getNode(2);
            expect(item0.next).toBeDefined();
            expect(item0.prev).toBeUndefined();
            expect(item0.value).toBe('one');
            expect(item0.next.value).toBe('two');
            expect(item1.next).toBeDefined();
            expect(item1.prev).toBeDefined();
            expect(item1.value).toBe('two');
            expect(item1.next.value).toBe('three');
            expect(item1.prev!.value).toBe('one');
            expect(item2.next).toBeUndefined();
            expect(item2.prev).toBeDefined();
            expect(item2.value).toBe('three');
            expect(item2.prev!.value).toBe('two');
        });

    });

});