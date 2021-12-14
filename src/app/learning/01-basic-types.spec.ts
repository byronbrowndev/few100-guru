describe('basic data types', () => {

  it('is easy to declare a variable', () => {

    let a = 10, b = 20;

    let answer = a + b;

    expect(answer).toBe(30);
  });

  describe('declaring variables', () => {

    it('untyped variables', () => {
      let a;

      a = 19;

      expect(a).toBe(19);

      a = 'tacos';

      expect(a).toBe('tacos');

      a = function (x: number) {
        return x * 2;
      }

      expect(typeof (a)).toBe('function');

      expect(a(10)).toBe(20);
    });
    it('setting data types for a variable', () => {

      let x: number | string; // Union.

      x = 12;


      x = 'tacos';

    });

    it('initializing a variable', () => {
      let x: number | string = 12;
      let y = 18;


      x = 'Tacos';
    });

    it('declaring constants', () => {
      const x = 12; // you cannot reassign a new value to this name.

      // x = 13;

      const jobs = ['Developer', 'QA', 'STE'];

      // jobs = ['Fry Cook'];

      jobs[0] = 'Fry Cook';

      // jobs = [...jobs, 'Scrum Master']
      jobs.push('Scrum Master');

      expect(jobs).toEqual(['Fry Cook', 'QA', 'STE', 'Scrum Master']);


      const book = { title: 'War and Piece', author: 'Tolstoy' };

      book.title = 'War and Peace';


    });
  });
  describe('built-in types', () => {

    it('numbers', () => {
      // 64 bit floating point numbers.

      let n1 = 12;
      let n2 = 3.1415;
      let n3 = 0xFFF; // Base 16.
      let n4 = 0o111; // base 8 - octal.
      let n5 = 0b11011; // base 2 - binary.
      let lindsayPay = 13_393_892_893; // thousands place thing.

    });
    describe('strings', () => {

      it('standard string delimiters', () => {
        let s1 = "dog";
        let s2 = 'dog';
        expect(s1).toBe(s2);

        let story = "She said \"Hello\" to him";
        let story2 = 'She said "Hello" to him';
        expect(story).toBe(story2);
      });
      it('literal or format strings', () => {
        let s1 = `dog`;
        let s2 = 'dog';
        expect(s1).toBe(s2);

        let story = `Chapter 1.

It was a dark and stormy night.

The End`;
        console.log(story);

        let name = 'Earl', pay = 120_000;

        let message = 'The customer\'s name is ' + name + ' and they are paid ' + pay + ' a year';
        let message2 = `The customer's name is ${name} and they are paid ${pay} a year`;
        console.log(message, message2);

        let message3 = `<div class="pretty">
        <h1>Tacos are good</h1>
        </div>`;
      });
    });

    it('booleans', () => {
      let ok = true;
      let nope = false;

      if ('tacos') {
        console.log('Delicious!');
      }
      // truthy and falsy
      // when a value is converted to a boolean, does it conver to true or false.
      expect('tacos').toBeTruthy(); // any string with a greater than 0 length is true
      expect('').toBeFalsy();
      expect(9).toBeTruthy();
      expect(-9).toBeTruthy();
      expect(0).toBeFalsy();
      expect(undefined).toBeFalsy();
      expect(null).toBeFalsy();

    });
    it('testing for equality', () => {

      // use === for equality
      // use !== for inequality.

      // if you want to convert, you do it yourself.

      const pay = 12.93;

      if (pay === 12.93) {

      }
    });
  });

  it('has a literal for objects', () => {
    let pay = 32;

    interface Movie {
      title: string;
      director: string;
      yearReleased: number;
    };
    const jaws: Movie = {
      title: 'Jaws',
      director: 'Spielberg',
      yearReleased: 1977
    };


    const starWars: Movie = {
      title: 'Star Wars',
      director: 'Lucas',
      yearReleased: 1977
    }



  });

  describe('array literals', () => {

    it('syntax 1', () => {
      const friends = ['Sean', 'Billy', 'Amy'];

      let luckyNumbers: (number | string)[];

      luckyNumbers = [1, 9, 20, 108, 'tacos'];
      let e = luckyNumbers[1];

      luckyNumbers[1] = 'birds';

    });

    it('generic syntax', () => {
      let friends: Array<string>;
      let friends2: string[];

      let luckyNumbers: Array<number | string>;
      luckyNumbers = [1, 'two', 3];

      if (luckyNumbers[3]) {
        expect(true).toBeFalse(); // Blow up the test.
      }
    });

    it('typed arrays - tuples ', () => {

      let userInfo: [string, string, number, string[]];
      userInfo = ['Warren', 'Ellis', 58, ['musician', 'artist', 'writer']];

      let firstName = userInfo[0];
      let age = userInfo[2];

      // doing this with a more oop style.
      const warren = {
        firstName: 'Warren',
        lastName: 'Ellis',
        age: 58,
        jobs: [
          'musician',
          'artist',
          'writer'
        ]
      };


      firstName = warren.firstName;



    });


  });

  describe('object literals', () => {

    it('object literals are anonymous objects', () => {

      interface Artist {
        firstName: string;
        lastName: string;
        age: number;
        jobs: string[];
        books?: string[];
      }
      const warren: Artist = {
        firstName: 'Warren',
        lastName: 'Ellis',
        age: 58,
        jobs: [
          'musician',
          'artist',
          'writer'
        ]
      };


      expect(warren.firstName).toBe('Warren');
      expect(warren['firstName']).toBe('Warren');

      warren.books = ['Nina Simone\'s Gum'];

      const jimi: Artist = {
        firstName: 'James',
        lastName: 'Hendrix',
        age: 27,
        jobs: ['guitar god']
      }

    });

    it('structural typing', () => {

      interface LoggableCall { message: string, from: string }

      function doSomethingRad(thing: LoggableCall) {
        console.log(`At ${new Date()} you got the following message ${thing.message} from ${thing.from}`);
      }

      function doSomethingRadWithAnonInterface(thing: { message: string, from: string }, numberOfTimes: number) {
        console.log(`At ${new Date()} you got the following message ${thing.message} from ${thing.from}`);
      }

      const call = { from: 'Bill', message: 'Your tacos are ready for pickup', needsCallback: false }
      doSomethingRad(call);


    });

  });

  describe('function literals', () => {


    it('needs to throw on web exception', () => {

    });
    it('named functions', () => {

      expect(add(2, 2)).toBe(4);


      function add(a: number, b: number): number {
        return a + b;
      }

    });

    it('anonymous functions', () => {
      const subtract = (a: number, b: number): number => a - b;

      const divide = (a: number, b: number): number => {
        if (b === 0) {
          throw 'Are you Crazy!';
        } else {
          return a / b;
        }
      };
      expect(subtract(10, 2)).toBe(8);
      expect(divide(10, 2)).toBe(5);
      expect(() => divide(10, 0)).toThrow('Are you Crazy!');
    });


  });
});
