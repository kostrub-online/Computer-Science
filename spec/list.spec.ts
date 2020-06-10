import 'jasmine';
import List, {ListType} from '../list';

describe('List', () => {

    it('should add item', () => {
        const list = new List();
        expect(list.add(1, 0)).toEqual({0:1} as ListType);
    });

    it('should add text items and print', () => {
        const list = new List();
        list.add('Hi');
        list.add('there');
        list.add('!');
        expect(list.print()).toEqual('Hi there !');
    });

    it('should read item', () => {
        const list = new List();
        list.add(1, 0);
        expect(list.get(0)).toEqual(1);
    });

    it('should remove item', () => {
        const list = new List();
        list.add(1, 0);
        expect(list.remove(0)).toEqual({});
    });

    it('should clear the list', () => {
        const list = new List();
        list.add('Some item', 0);
        list.add('Some item 2', 1);
        expect(list.clear()).toEqual({});
    });

    // Задачки

    describe('Task 1: ', () => {

        it('should print the list in reverse order', () => {
            /** TODO: Додати метод reverse для класу List, 
             * який друкує елементи списку у зворотному порядку не змінюючи сам список
            **/
            const list = new List();
            list.add('1');
            list.add('2');
            list.add('3');
            list.add('4');
            list.add('5');
            expect(list.reverse()).toBe('5 4 3 2 1');
            expect(list.print()).toBe('1 2 3 4 5');
        });

    });

    describe('Task 2: ', () => {

        it('should keep correct index', () => {
            /** TODO: Виправити метод remove для класу List таким чином,
            * щоб при видаленні елемента з будь-якої позиції індекс йшов за порядком
            **/
            const list = new List();
            list.add('1');
            list.add('2');
            list.add('3');
            expect(list.remove(1)).toEqual({
                0: '1',
                1: '3'
            } as ListType);
        });

    });

    describe('Task 3: ', () => {

        it('should provide length of the list', () => {
            /** TODO: Додати метод length для класу List, 
             * який вертає кількість елеметів у списку
            **/
            const list = new List();
            list.add('1');
            list.add('2');
            list.add('3');
            expect(list.length()).toBe(3);
        });

    });

});