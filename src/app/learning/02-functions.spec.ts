
// import * as fromUtils from "../utils/math";

import { isEven } from "../utils/math";


describe('writing functions', () => {

  describe('overloading a functions (spoiler - you cannot really do it)', () => {

    it('formatting a name', () => {


      function formatName(first: string, last: string, mi?: string): string {
        let fullName = `${last}, ${first}`;

        if (mi) { // 0, '', null, undefined
          fullName += ` ${mi}.`;
        }
        return fullName;
      }

      let fullName = formatName('Han', 'Solo');

      expect(fullName).toBe('Solo, Han');

      fullName = formatName('Han', 'Solo', 'D');

      expect(fullName).toBe('Solo, Han D.');
    });

    it('interspersed optional parameters', () => {

      function add(a: number = 10, b: number = 2, ...rest: number[]): number {
        const initialState = a + b;

        return rest.reduce((lhs, rhs) => lhs + rhs, initialState);
      }

      expect(add()).toBe(12);

      expect(add(20)).toBe(22);

      expect(add(undefined, 9)).toBe(19);

      expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
    });

  });
  describe('higher order functions', () => {

    it('creating html elements the easy way 1', () => {


      function createElement(tag: string, content: string): string {
        return `<${tag}>${content}</${tag}>`;
      }

      expect(createElement('h1', 'hello')).toBe('<h1>hello</h1>');
      expect(createElement('h1', 'goodbye')).toBe('<h1>goodbye</h1>');
      expect(createElement('p', 'content')).toBe('<p>content</p>');

    });

    it('creating html elements the oop style', () => {

      class ElementMaker {
        constructor(private tag: string) { }
        make(content: string): string {
          return `<${this.tag}>${content}</${this.tag}>`;
        }
      }


      const h1Maker = new ElementMaker('h1');

      expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
      expect(h1Maker.make('GoodBye')).toBe('<h1>GoodBye</h1>');
      expect(h1Maker.make('Tacos')).toBe('<h1>Tacos</h1>');

      const h2Maker = new ElementMaker('h2');
      expect(h2Maker.make('Hello')).toBe('<h2>Hello</h2>');
      expect(h2Maker.make('GoodBye')).toBe('<h2>GoodBye</h2>');
      expect(h2Maker.make('Tacos')).toBe('<h2>Tacos</h2>');

      const pMaker = new ElementMaker('p');
      expect(pMaker.make('I cannot believe I did not giggle at the name of this variable!')).toBe('<p>I cannot believe I did not giggle at the name of this variable!</p>')
    });

  });

  it('a functional way to do the same thing', () => {

    function elementMaker(tag: string): (content: string) => string {
      return (content) => `<${tag}>${content}</${tag}>`
    }

    const h1Maker = elementMaker('h1');
    const h2Maker = elementMaker('h2');
    const pMaker = elementMaker('p');

    expect(h1Maker('Hello')).toBe('<h1>Hello</h1>');
    expect(h1Maker('GoodBye')).toBe('<h1>GoodBye</h1>');
    expect(h1Maker('Tacos')).toBe('<h1>Tacos</h1>');

    expect(h2Maker('Hello')).toBe('<h2>Hello</h2>');
    expect(h2Maker('GoodBye')).toBe('<h2>GoodBye</h2>');
    expect(h2Maker('Tacos')).toBe('<h2>Tacos</h2>');

    expect(pMaker('I cannot believe I did not giggle at the name of this variable!')).toBe('<p>I cannot believe I did not giggle at the name of this variable!</p>');

    expect(elementMaker('span')('stuff')).toBe('<span>stuff</span>');
  });

  describe('object and array destructuring', () => {
    // and refer back to the rest and spread operators.
    it('array destructuring', () => {
      const friends = ['Sean', 'Billy', 'Amy', 'Scott', 'Jill', 'Byron'];

      // let firstFriend = friends[0];
      // let thirdFriend = friends[2];
      // Array Destructuring.
      let [firstFriend, , thirdFriend, ...rest] = friends;

      expect(firstFriend).toBe('Sean');
      expect(thirdFriend).toBe('Amy');
      expect(rest).toEqual(['Scott', 'Jill', 'Byron']);

    });
    it('the spread operator', () => {
      const friends = ['Sean', 'Billy', 'Amy', 'Scott', 'Jill', 'Byron'];

      const newFriends = ['Stacey', ...friends, 'David'];

      expect(newFriends).toEqual(['Stacey', 'Sean', 'Billy', 'Amy', 'Scott', 'Jill', 'Byron', 'David'])
    });

    it('destructuring objects and the spread operator on objects', () => {
      const movie = {
        title: 'Star Wars: The Empire Strikes Back',
        director: 'Lucas',
        genre: 'Sci-Fi'
      };

      // let title = movie.title;
      // let genre = movie.genre;

      let { title, genre, director: directedBy } = movie;

      expect(title).toBe('Star Wars: The Empire Strikes Back');
      expect(genre).toBe('Sci-Fi');

      // let { director: directedBy } = movie;
      expect(directedBy).toBe('Lucas');

      // mutate the object (BAD)
      // movie.director = 'Irvin Kershner';
      const updatedMovie = { ...movie, director: 'Irvin Kershner' };


      // reassign the variable, use the grouping operator.
      ({ director: directedBy } = updatedMovie); // "Grouping Operator"
      expect(directedBy).toBe('Irvin Kershner');
    });
    it('a fake dictionary', () => {

      interface Dictionary<T> {
        [key: string]: T
      }

      interface Friend { name: string, phone: string }
      // interface FriendList {
      //   [key: string]: Friend
      // }
      const friends: Dictionary<Friend> = {
        'sean': { name: 'Sean Carlin', phone: '777-7777' },
        'byron': { name: 'Byron Brown', phone: '555-5555' },
        'jenny smith': { name: 'Jenny Jones Smith', phone: '867-5309' },

      };

      const byronsPhone = friends['byron'].phone;
      const herNumber = friends['jenny smith'].phone;

      const newFriends = { ...friends, 'ryan': { name: 'Ryan', phone: '999-9999' } };




    });
    it('destructuring parameters', () => {
      function doSomethingRad({ message, from }: { message: string, from: string }) {
        console.log(`At ${new Date()} you got the following message ${message} from ${from}`);
      }


      doSomethingRad({ message: 'Hello', from: 'Jeff' });

      const teacherAssignment = {
        teacher: 'Byron Brown',
        class: 'Few 100 Rebooted like JJ Abrams Does Movies'
      }

      expect(teacherAssignment['class']).not.toBe('Tacos');

    });
  });
  describe('Array Methods', () => {

    // map, filter, reducer,
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('looking at each element of an array (forEach)', () => {
      let total = 0;
      numbers.forEach(e => total += e);
      expect(total).toBe(45);
      numbers.forEach((val, inx, array) => console.log({ val, inx, array }));
    });

    describe('methods that create new arrays from another array', () => {

      it('has filter', () => {
        // "Where" in Linq
        const evens = numbers.filter(num => num % 2 === 0);

        expect(evens).toEqual([2, 4, 6, 8]);
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

      });

      it('has map', () => {
        // "Select" in LINQ
        function doubleIt(x: number): number {
          return x + x;
        }

        const doubled = numbers.map(doubleIt);

        expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

        const stringIfied = numbers.map(n => n.toString());
        expect(stringIfied).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9'])

      });
    });

    describe('methods that return a single (scalar) value', () => {

      describe('methods that return a boolean', () => {
        it('does every element meet this criteria?', () => {
          const allEven = numbers.every(isEven);
          expect(allEven).toBeFalse();
        });

        it('do any of the elements meet this criteria', () => {
          const someEven = numbers.some(isEven);

          expect(someEven).toBe(true);


        });

      });

      it('boiling down an array to a single value of your choice!', () => {

        const sum = numbers.reduce((l, r) => l + r);

        expect(sum).toBe(45);

        const bigSum = numbers.reduce((l, r) => l + r, 100);

        expect(bigSum).toBe(145);
      });


    });
  });

  describe('using the array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('example 1', () => {

      // double each of the numbers >= 4, then sum up just the even numbers.
      const answer = ______;

      expect(answer).toBe(??)


    });

  });
});


